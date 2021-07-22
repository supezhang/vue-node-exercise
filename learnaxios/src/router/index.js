import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../views/home/Home'
const routes=[
  {
    path:"",
    redirect:"/home"
  },
  {
    path:"/home",
    component:Home
  }
]

const router =new VueRouter({
  routes,
  mode:"history"
})


export default router;