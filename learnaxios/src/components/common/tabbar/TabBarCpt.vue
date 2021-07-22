<template>
 <div>
   <tab-bar>
     <tab-bar-item>
       <img src="" alt="" name="item-icon">
       <div name="item-text">首页</div>
     </tab-bar-item>
   </tab-bar>
 </div>
</template>

<script>
 import Tabbar from "./TabBar"
 import TabBarItem from './TabBarItem'
 export default {
  name: 'TabBarCpt',
  data () {
   return {

   }
  },
  components: {
    Tabbar,
    TabBarItem
  }
 }
</script>

<style scoped>

 
</style>
