<template>
  <ul class="list-group">
    <li class="list-group-item"
    v-bind:class="{ 'completed' : todo.completed }"
    v-for="(todo,index) in todos">
        {{ todo.id }} {{ todo.title }}
        <button class="btn btn-warning btn-xs pull-right"
        v-bind:class="[todo.completed ? 'btn-danger' : 'btn-success']"
         v-on:click="toggleCompletion(todo)"
        >
        {{ todo.completed ? 'undo' : 'complete' }}
        </button>

        <button class="btn btn-danger btn-xs pull-right"
         v-on:click="deleteTodo(index)"
        >删除</button>
    </li>
  </ul>
</template>


<style>
  .completed{
    color:#5c5b5c;
    text-decoration: line-through;
  }
</style>

<script>
  export default{
    props:['todos'],   // 定义一个属性
    methods:{
      deleteTodo(index){
        this.todos.splice(index,1)
      },
      toggleCompletion(todo){
        todo.completed = !todo.completed;
      }
    }
  }
</script>
