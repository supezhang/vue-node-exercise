<template>
 <div>
   <div class="banner">
     <div class="banner-scroll-box">
      <div class="banner-item" v-for="item in banners" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </div>
     </div>
   </div>
   <div class="recommends">
     <div class="item" v-for="item in recommends" :key="item.title">
       <a :href="item.link">
         <img :src="item.image" alt="">
         <div>{{item.title}}</div>
       </a>
     </div>
   </div>
 </div>
</template>

<script>
// import {request} from '../../network/require'
import {getHomeMultidata} from '../../network/home'
 export default {
  name: 'Home',
  data () {
   return {
     banners:[],   
     recommends:[]
   }
  },
  created(){
    this.get()
  },
  components: {

  },
  methods:{
    get(){
      // axios({
      //   url:"http://123.207.32.32:8000/home/multidata"
      // }).then(res=>{
      //   console.log(123,res);
      // })
      getHomeMultidata().then(res=>{
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
    }
  },
 }
</script>

<style scoped>
  .banner{width:390px;margin:auto;overflow: hidden;}
  .banner-item{text-align: center;display:inline-block;}
  .banner-item img{max-width:100%;display:block;}
  .banner-scroll-box{white-space: nowrap;animation: remove 8s infinite;}
  @keyframes remove{
    0%{
      transform: translateX(0%);    
    }
    25%{
      transform: translateX(-100%);    
    }
    50%{
      transform: translateX(-200%);    
    }
    75%{
      transform: translateX(-300%);    
    }    
  } 
  .recommends{display:flex;padding:16px 0;border-bottom:8px solid #eee;}
  .recommends .item{flex:1;text-align: center;margin:0 10px;}
  .recommends .item a{color:#333;text-decoration: none;}
</style>
