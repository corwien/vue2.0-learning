<template>
  <div id="todos">

  <ul class="list-group">
    <li class="list-group-item"
    v-bind:class="{ 'completed' : todo.completed }"
    v-for="(todo,index) in todos">
        {{ todo.id }}
        <router-link :to="{ name: 'todo', params: { id: todo.id }}">{{ todo.title }}</router-link>
        <button class="btn btn-warning btn-xs pull-right margin-right-10"
        v-bind:class="[todo.completed ? 'btn-danger' : 'btn-success']"
         v-on:click="toggleCompletion(todo)"
        >
        {{ todo.completed ? 'undo' : 'complete' }}
        </button>

        <button class="btn btn-danger btn-xs pull-right margin-right-10"
         v-on:click="deleteTodo(todo, index)"
        >删除</button>
    </li>
  </ul>

  <todo-form></todo-form>

</div>
</template>

<style>
  .completed{
    color:#5c5b5c;
    text-decoration: line-through;
  }

  .margin-right-10{
    margin-right: 10px;
  }
</style>

<script>
import TodoForm from './TodoForm';

  export default{
    name:'todos',
  //  props:['todos'],   // 定义一个属性
  computed: {
   todos() {
     return this.$store.state.todos
   }
 },
    methods:{
      deleteTodo(todo, index){
        this.$store.dispatch('removeTodo', todo, index)
      },
      toggleCompletion(todo){
        this.$store.dispatch('completeTodo', todo)
      }
    },

    components:{
        TodoForm
      }
  }
</script>
