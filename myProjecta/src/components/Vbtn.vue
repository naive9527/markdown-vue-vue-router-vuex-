<template>
   <!-- 自己封装的按钮 -->
   <button class='btn' :class="currentBtn">
       <!-- 插槽， 可以分发 -->
       <slot>按钮</slot>
   </button>
</template>

<script>
export default {
    name:'Vbtn',
    data(){
        return {

        }
    },
    props:{  // 验证传的type属性值，是字符串
        type:String
    },
    computed:{
        currentBtn(){
            return {
                "btn-success": this.type =='success'? true:false,  // 如果type 的值是success，就为true ，true就显示 btn-success样式
                "btn-info": this.type =='info'? true:false,
                "btn-danger": this.type =='danger'? true:false,
            }
        }
    }
    
}
</script>

<style scoped>

</style>
