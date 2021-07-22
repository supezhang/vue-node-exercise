import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'
// const Home = () => import('../components/Home')
import Profile from '../components/Profile'
import Homenews from '../components/Homenews'
import Homemessage from '../components/Homemessage'
Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect: '/home',
        meta:{
            title:'首页'
        }
    },
    {
        path:'/home',
        component:Home,
        // component: () => import('../components/Home')
        meta:{
            title:'首页'
        },
        children:[
            // {
            //     path:'',
            //     redirect: 'homenews',
            //     meta:{
            //         title:"新闻"
            //     }             
            // },
            {
                path:'homenews',
                component:Homenews,
                meta:{
                    title:"新闻",
                    keepAlive:true
                }             
            },
            {
                path:'homemessage',
                component:Homemessage,
                meta:{
                    title:"信息",
                    keepAlive:true
                }               
            }
        ]      
    },
    {
        path:'/about',
        component:About,
        meta:{
            title:'关于'
        },
        // 路由独享守卫
        beforeEnter:(to,from,next)=>{
            // console.log('about beforeEnter');
            next();
        }
    },
    {
        path:'/user/:userId',
        component:User,
        meta:{
            title:'用户'
        }
    },
    {
        path:"/profile",
        component:Profile,
        meta:{
            title:'档案'
        }
    }
]

const router = new VueRouter({
    routes,
    mode:'history',
    linkActiveClass:'active'
})
// 前置守卫guard
router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title
    // console.log(from,next);
    // console.log('start');
    next()
})
// 后置钩子hook
router.afterEach((to,from)=>{
    // console.log('end');
})

export default router