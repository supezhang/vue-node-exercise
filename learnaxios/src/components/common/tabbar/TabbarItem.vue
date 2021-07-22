<template>
 <div class="tabbar-item">
   <div>
     <img solt="item-icon" src="" alt="">
   </div>
   <div solt="item-text"></div>
 </div>
</template>

<script>
 export default {
  name: 'TabBarItem',
  data () {
   return {

   }
  },
  components: {

  }
 }
</script>

<style scoped>
  .tab-bar-item{
    flex:1;
    text-align: center;
    height:49px;
  }
  .tab-bar-item img{
    width:24px;height:24px;vertical-align: middle;
    margin-top: 3px;margin-bottom: 2px;
  }
  .active{
    color:#f00;
  }
 
</style>
