<template>
  <div id="app">    
    <!-- <router-link to='/home' tag='button' replace active-class="active">首页</router-link>
    <router-link to='/about' tag='button' replace active-class="active">关于</router-link> -->
    <!-- --------- -->
    <router-link to='/home' tag='button' replace>首页</router-link>
    <router-link to='/about' tag='button' replace>关于</router-link>
    <router-link :to="'/user/'+userId" tag='button' replace>用户</router-link>
    <router-link :to="{path:'/profile',query:{name:'why',age:18,height:1.88}}" tag='button' replace>档案</router-link>
    <!-- --------- -->
    <!-- <button @click="homeclick">首页</button>
    <button @click="aboutclick">关于</button> -->
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '',
      userId:'abc'
    }
  },
  methods: {
    homeclick(){
      // history.pushState 可以前进后退
      // this.$router.push('/home')
      // history.replaceState 不可前进后退
      this.$router.replace('/home')
    },
    aboutclick(){
      this.$router.push('/about')
    }
  },
}
</script>

<style>
 .router-link-active{
   color:#f00;
 }
 .active{
   color:#00f;
 }
</style>
