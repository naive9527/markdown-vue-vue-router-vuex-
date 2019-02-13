<template>
    <div class="content">
         
            请输入文章标题：<input type="text" name='' v-model="titleHander"> 
            <button class='btn btn-success' @click="addNote">提交数据</button>           
    
        <!-- 自己仿的 markdown -->
        <div class="mark">
                <textarea class="editor" name="" id="" cols="100" rows="10" v-model="markdownHandler"></textarea>
                <div class="show" v-html='currentValue' ref="t"></div>  <!-- 将编译成的HTML代码 显示 -->
        </div>
        
    </div>
</template>

<script>
import $ from 'jquery'
import Marked from 'marked'

export default {
    name:'Vheader',
    data(){
        return {
            title:'',
        }
    },
    computed:{
        currentValue(){  
            return Marked(this.markdownHandler);  // 将输入的内容经过 marked 编译成HTML代码
        },
        titleHander:{  // 获取 输入的 标题数据
            set:function(newValue){
                // console.log(newValue);
                this.$store.state.note.title = newValue;
            },
            get:function(){
                return this.$store.state.note.title;
            }
        },
        markdownHandler:{  // 获取输入的 文章内容。 markdown 语法
            set:function(newValue){
                this.$store.state.note.markdown = newValue;
            },
            get:function(){
                return this.$store.state.note.markdown;
            }
        },
    },
    methods:{
        addNote(){  // 点击提交按钮，获取提交数据，发送post 请求，将文章的数据传给后端。
            var json = {
                title: this.titleHander,
                content: this.$refs.t.innerText,  // 在标签有属性 ref='t' ，  this.$refs.t.innerText拿到标签里的所有纯文本（包括子标签）， this.$refs.t 拿到该标签
                markdown:this.markdownHandler,
            }
            // console.log(json);

            // 方式三：actions 异步提交数据
            this.$store.dispatch('addOneNote', json)  // 分发actions。 触发 store 的 actions 里的 addOneNote 方法，添加一篇文章。等价于下面的代码

            // 方式二： mutations 同步提交数据
            // this.$store.commit('ADDONENOTE', json)  // 触发 store 的 mutations 里的 ADDONENOTE 方法，添加一篇文章。等价于下面的代码。

            // 方式一： 原生的ajax提交数据
            // var _this = this;

            // $.ajax({  //  ajax 发送post 请求，将文章的数据传给后端
            //     url:'http://127.0.0.1:8000/api/comment/created',  // 后端的接口,
            //     method:'post',
            //     data:json,
            //     success:function(data){  // 提交数据成功后, 更新之前 allList 里的数据
            //         console.log(data);
            //         _this.$store.state.allList = data;
            //     },
            //     error:function(err){
            //         console.log("发送数据失败");
            //     }
            // })
        }
    },
}
</script>
<style scoped>
.t{
    width: 300px;
    height: 100px;
}
.mark{
    width: 800px;
    height: 400px;
    margin: 0 auto;
}
.editor,.show{ 
    float: left;
    width: 397px;
    height: 400px;
    border: 1px solid #666;
}
</style>