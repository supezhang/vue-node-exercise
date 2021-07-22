<template>
    <div>
        <h2 class="title">{{message}}</h2>
        <button @click="btnClick">按钮</button>
        <h3>{{name}}</h3>
        <Cpn/>
    </div>
</template>
<script>
import Cpn from "./Cpn"
export default {
    name:'tplt',
    data(){
      return{
        message:"hellow webpack",
        name:"supeman"
      }    
    },
    components:{
        Cpn
    },
    methods:{
        btnClick(){
            console.log(this.message);
        }
    }
}
</script>
<style lang="less" scoped>
    .title{
        color:green;
    }
</style>