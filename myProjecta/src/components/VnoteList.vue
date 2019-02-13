<template>
    <ul>
        <VnoteItem v-for="(item,index) in getAllDatas" :data = "item"></VnoteItem>
    </ul>
       
</template>

<script>

import VnoteItem from './VnoteItem'

export default {
    name:'VnoteList',
    data(){
        return {

        }
    },
    components:{
        VnoteItem,
    },
    computed:{
        getAllDatas(){
            return this.$store.state.allList  // 取 store 里面的 allList 的数据
        }
    }
}
</script>

<style scoped>

</style>
