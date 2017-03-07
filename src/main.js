// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 引入axios请求API
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// 引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)

import Todos from './components/Todos';
import Todo from './components/Todo';

const routes = [
  { path: '/', component: Todos },
  { path: '/todo/:id', component: Todo, name:'todo'}
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})


/* ====================== Vuex说明 ==================== //

  store：可以理解为一个大的容器
  state: 相当于一个全局变量数据属性
  mutations：里边的方法专门操作state里边的全局变量
  actions: 模型组件操作actions,获取数据，然后触发mutations
  小结：Vuex的核心，主要是理解其应用的场景，如果理清了这些思路，就可以很容易进行开发了。
 另外我们也可以将store这变量拆分为一个store.js文件，然后引用进来即可。
====================================================== */

// Vuex example
// store 可以理解为一个大的容器
const store = new Vuex.Store({

  state: {    // state 可以理解为全局的变量，可以在任意组件中使用
    todos: [],
    newTodo:{id:null, title:"", completed:false}
  },

  // mutations里边的方法用来修改state里的数据
  mutations: {
    get_todo_list(state, todos) {
      state.todos = todos;
    },
    complete_todo(state, todo){
      todo.completed = ! todo.completed
    },
    delete_todo(state, index){
      state.todos.splice(index, 1)
    },
    add_todo(state, todo){
      state.todos.push(todo)
    }
  },
  // actions 主要用来获取客户端的数据，然后将数据传给 mutations 的方法
  actions:{
    getTodos(store){
      store.commit('get_todo_list', [{id : 1, title:"hello,world!"}])
    },
    completeTodo(state, todo){
      store.commit('complete_todo', todo)
    },
    removeTodo(store, todo, index){
      store.commit('delete_todo', index)
    },
    saveTodo(store, todo){
      store.commit('add_todo', todo)
      store.state.newTodo = {id:null,title:"",completed:false}
    },


  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
  router
})
