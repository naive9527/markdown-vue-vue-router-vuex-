<template>
       <li >
            <h4>{{data.tile}} 标题</h4>
            <p>{{data.content}}内容</p>
            <!-- 使用 element-ui 样式 -->
         <el-button type="danger">危险按钮</el-button>

         <!-- 使用自己封装的按钮 组件 -->
            <Vbtn type='success' >删除按钮</Vbtn>  <!-- type='success' 相当于自定义属性type 的值为success, 可以传给子组件  -->
        </li>
        
</template>

<script>

import Vbtn from './Vbtn'   // 引入自定义的 按钮

export default {
    name:'VnoteItem',
    data(){
        return {

        }
    },
    props:{
        data:Object,
    },
    components:{
        Vbtn,
    },
    methods:{

    }
}
</script>

<style scoped>

</style>
