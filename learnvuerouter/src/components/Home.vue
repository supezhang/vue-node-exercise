<template>
 <div>
     <h2>首页</h2>
     <!-- <h3>用户ID：{{userId}}</h3> -->     
     <router-link to="/home/homenews">新闻</router-link>
     <router-link to="/home/homemessage">信息</router-link>   
     <router-view></router-view>
     <h3>路由列表</h3>
     <ul class="nav">
       <li v-for="(item,index) in routerobj" :key='index' v-show="!item.redirect">
         <div @click="toggleslide(item)">{{item.meta.title}}</div>
         <ul v-if="item.children" v-show="up">
           <li v-for="child in item.children" :key="child.path" v-show="!child.redirect"><div @click="go_child_page(item,child.path)">{{child.meta.title}}</div></li>
         </ul>
        </li>
     </ul>
 </div>
</template>

<script>
 export default {
  name: 'Home',
  data(){
      return{
        routerobj:[],
        up:false,
        path:'/home/homenews'
      }
  },
  created(){
    // console.log(this.$router);
    this.routerobj = this.$router.options.routes;
    // console.log('home created');
    // this.$router.push(this.path)
  },
  methods:{
    // 无二级目录跳转
    toggleslide(item){
      this.up=!this.up
      if(!item.children){
        console.log(item.path);
        this.$router.push(item.path)
      }
    },
    // 有二级目录跳转
    go_child_page(item,child_path){
      if(!item.children){
       
      }else{
        this.$router.push(item.path+'/'+child_path)
      }
    }
  },
  destroyed() {
    // console.log('home destroyed');
  },
  beforeRouteLeave (to, from, next) {
    this.path = this.$route.path
    console.log(this.$route.path);
    next();
  },
  //组件使用了keep-alive  时 activated,deactivated有效
  // 活跃的
  activated() {
    // console.log('home activated',this.path);
    this.$router.push(this.path)
  },
  // 不活跃的
  deactivated() {
    console.log('home deactivated');
  },
 }
</script>

<style scoped>
ul{list-style: none;margin:0;padding:0;}
.nav li>div{cursor: pointer;}
.nav li ul{padding-left:15px;}
</style>
