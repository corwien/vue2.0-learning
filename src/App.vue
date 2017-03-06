<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--
    <todos :todos="todos"></todos>
  -->

  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view :todos="todos"></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello';
import Todos from './components/Todos';

export default {
  name: 'app',
  data(){
    return {
      todos:[
        {id:1,title:'Jack Chan',completed:true},
        {id:2,title:'Jet Lee',completed:false}
      ]
    }
  },

  // 异步请求
  mounted(){
    /*
    this.axios.get('http://baidu.com').then(response =>{
      console.log(response.data)
    })*/
  },
  computed:{
    todosCount(){
      return this.todos.length;
    }
  },
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
