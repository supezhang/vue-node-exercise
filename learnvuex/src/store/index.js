import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA ={
  state:{
    name:"zhangsan",
  },
  mutations:{
    updateName(state,payload){
      state.name = payload
    }
  },
  getters:{
    fullName(state){
      return state.name + "1111"
    },
    fullName2(state,getters){
      return getters.fullName + "222"
    },
    //rootState 根state
    fullName3(state,getters,rootState){
      return getters.fullName2 + rootState.counter
    },
    // 自己module内没有往上找
    otherGetter(state,getters){
      return state.name + getters.powerCounter
    },
    //获取moduleB getters 
    thirdGetter(state,rootGetters){
      return state.name + rootGetters.aaa
    }
  },
  actions:{
    // context上下文 指的是自己的mutations
    aUpdateName2(context,payload){
      console.log(context);
      setTimeout(()=>{
        context.commit('updateName',payload)
      },1000)
    }
  }
}
const moduleB = {
  state:{
    c:"wangmazi"
  },
  getters:{    
    aaa(state,getters,rootState){
      return rootState.counter
    }
  }
}
const store = new Vuex.Store({
  state:{
    counter:1000,
    students:[
      {id:110,name:'why',age:18},
      {id:111,name:'kobe',age:22},
      {id:112,name:'james',age:19},
      {id:112,name:'james1',age:20},
      {id:112,name:'james2',age:24},
      {id:112,name:'james3',age:33},
      {id:113,name:'curry',age:15}
    ],
    info:{
      name:"kobe",
      age:40,
      height:1.91
    }
  },
  // 同步操作
  mutations:{
    increment(state){
      state.counter++
    },
    decrment(state){
      state.counter--
    },
    // incrementCount(state,count){
    //   state.counter+=count
    // },
    // ↓↓
    incrementCount(state,payload){
      state.counter+=payload.count
    },
    addStu(state,stu){
      state.students.push(stu)
    },
    updateInfo(state){
      state.info.name="codewhy"
      // this.$store.dispatch("aUpdateInfo")
    }
  },
  // 异步操作
  actions:{
    //context 默认参数 上下文 =>$store
    aUpdateInfo(context,payload){
      setTimeout(()=>{
        context.commit('updateInfo')
        console.log(payload.msg);
        payload.success()
      },1000)
    }
  },
  // 类似组件里的计算属性 computed  两个参数 state getters
  getters:{
    powerCounter(state){
      return state.counter * state.counter
    },
    more20stu(state){
      return state.students.filter(s=>{
        return s.age>20
      })
    },
    more20stuLength(state,getters){
      return getters.more20stu.length
    },
    moreAgestu(state){
      return function(num){
        return state.students.filter(s=>{
          return s.age>num
        })
      }
      // retrun num => {return state.students.filter(s=>s.age>num)}
    }
  },
  modules:{
    a:moduleA,
    b:moduleB
  }
})

export default store