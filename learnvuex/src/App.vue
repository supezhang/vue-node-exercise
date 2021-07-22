<template>
  <div id="app">
    <!-- moduleA中的name -->
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改name</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asynUpdateName">异步修改name</button>
    <h2>获取其他getter-{{$store.getters.otherGetter}}</h2>
    <h2>获取其他modulegetter-{{$store.getters.thirdGetter}}</h2>
    <h3>moduleB:{{$store.getters.aaa}}</h3>
    <h3>{{$store.state.b.c}}</h3>
    <!-- ......... -->
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>
    <h2>{{$store.state.counter}}</h2>
    <button @click="sub">-</button>
    <button @click="add">+</button>
    <button @click="addCrement(5)">+5</button>
    <button @click="addCrement(10)">+10</button>
    <button @click="addStu">+学员</button>
    <hello/>
    <p>getters 平方计算</p>
    <h2>{{$store.getters.powerCounter}}</h2>
    <p>{{$store.getters.more20stu}}</p>
    <p>{{$store.getters.more20stuLength}}</p>
    <p>{{$store.getters.moreAgestu(30)}}</p>
  </div>
</template>

<script>
import hello from "./components/hello"
export default {
  name: 'app',
  data () {
    return {
      msg: 'hello vuex'
    }
  },
  components:{
    hello
  },
  methods:{
    add(){
      this.$store.commit('increment')
    },
    sub(){
      this.$store.commit('decrment')
    },
    addCrement(count){
      // this.$store.commit("incrementCount",count)
      this.$store.commit({
        type:"incrementCount",
        count
      })
    },
    addStu(){
      let stu = {id:116,name:"alxn",age:35}
      this.$store.commit("addStu",stu)
    },
    updateInfo(){
      // this.$store.commit("updateInfo")
      this.$store.dispatch("aUpdateInfo",{
        msg:"携带信息",
        success:()=>{
          console.log('里面已经完成');
        }
      })
    },
    updateName(){
      this.$store.commit('updateName','lisi')
    },
    asynUpdateName(){
      this.$store.dispatch("aUpdateName2","wangwu2")
    }
  },
  computed:{
    // more20stu(){
    //   return this.$store.state.students.filter(s=>{
    //     return s.age>20
    //   })
    // }
  }
}
</script>

<style>

</style>
