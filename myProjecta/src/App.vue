<template>
  <div id="app">
    
    <Vheader></Vheader>
    
    <router-view/>  <!-- 路由的出入口 -->
  </div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.min.css'
import Vheader from '@/components/Vheader'  // 引入导航条组件

import $ from 'jquery'  // 引入jquery

export default {
  name: 'App',
  components:{  // 绑定组件
    Vheader,
  },
  mounted(){  // 页面加载完成之后调用的方法

    this.$store.commit('GETALLDATAS');  // 相当于下面的代码，下面的代码等于在 store 的 mutations 里的 GETALLDATAS 方法

    // var _this = this;  // _this 就是 vue 实例化对象。

    // // 发送ajax请求，获取后端数据
    // $.ajax({  
    //   url:'http://127.0.0.1:8000/api/comment/',  // 后端的接口
    //   methods:'get',
    //   success:function(data){
    //     // console.log(data);
    //     // console.log(this);  // 直接用this不是 vue 对象
    //     // console.log(_this);  // 需要提前重新赋值一下。_this 就是 vue 的对象 this

    //     _this.$store.state.allList = data;  // 将后端传来的 data 数据 赋值给 store 的 allList
    //   },
    //   error:function(err){
    //     console.log("请求数据失败");
    //   }
    // })
  },
}
</script>

<style>

</style>
