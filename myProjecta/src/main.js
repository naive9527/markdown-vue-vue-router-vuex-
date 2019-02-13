// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import $ from 'jquery'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

// 定义创建store
import Vuex from 'vuex'  // 引入 vuex
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 这里面的状态 跟每个组件的 数据属性有关系
    allList:[  // 把数据库的数据放入数组中。从后端传入前端的数据
      {id:1, title:'你好明天', content:"哈哈哈哈"},  // 模拟的假数据
      ],  
    note:{   // 新的文章数据， 前端传给后端的数据。
      title:'',
      content:'',
      markdown:'',
    }
  },
  mutations: {  // 声明一些方法，来修改 state ，进而修改数据
    GETALLDATAS(state) {  // 第一个参数必须是state。第二个参数是需要传入的数据。 要调用此方法，必须用 store.commit('GETALLDATAS') 来触发
      
      // 发送ajax请求， 获取后端数据
      $.ajax({  
        url:'http://127.0.0.1:8000/api/comment/',  // 后端的接口
        methods:'get',
        success:function(data){
          // console.log(data);
          state.allList = data;  // 将后端传来的 data 数据 赋值给 store 的state 的 allList
        },
        error:function(err){
          console.log("请求数据失败");
        }
      })
    },
    ADDONENOTE(state, json){    // 添加一篇文章
      
      // 同步操作
      // 发送ajax请求， 传给后端数据
      // $.ajax({  //  ajax 发送post 请求，将文章的数据传给后端
      //     url:'http://127.0.0.1:8000/api/comment/created',  // 后端的接口,
      //     method:'post',
      //     data:json,
      //     success:function(data){  // 提交数据成功后, 更新之前 allList 里的数据
      //         console.log(data);
      //         state.allList = data;
      //     },
      //     error:function(err){
      //         console.log("发送数据失败");
      //     }
      // })
      

      // actions异步操作
      state.allList = json;
    },
  },
  actions:{  // Action 提交的是 mutation而不是直接变更状态, Action 可以包含任意异步操作。
    getAllDatas(context){
      context.commit('GETALLDATAS');
    },
    addOneNote(context, json){
      // actions异步操作。
      // 发送ajax请求， 传给后端数据
      $.ajax({  //  ajax 发送post 请求，将文章的数据传给后端
        url:'http://127.0.0.1:8000/api/comment/created',  // 后端的接口,
        method:'post',
        data:json,
        success:function(data){  // 提交数据成功后, 更新之前 allList 里的数据
            console.log(data);
            context.commit('ADDONENOTE',data);  // 提交一个 mutation
        },
        error:function(err){
            console.log("发送数据失败");
        }
    })
      
    }
  },
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  // 挂载 store 
  components: { App },
  template: '<App/>'
})
