<template>
  <form v-on:submit.prevent="addTodo(newTodo)">
     <div class="form-group">
         <input type="text" v-model="newTodo.title" class="form-control" placeholder="Add a list" />
     </div>
     <div class="form-group">
         <button class="btn btn-success" type="submit">Add to do</button>
     </div>
   </form>
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
  export default{
      props:['todos'],

     // 子组件数据属性
     data(){
       return{
         newTodo:{id:null,title:"",completed:false}
       }
     },
     methods:{
       addTodo(newTodo){
         this.todos.push(newTodo)
         this.newTodo = {id:null,title:"",completed:false}
       }
     }
  }
</script>
