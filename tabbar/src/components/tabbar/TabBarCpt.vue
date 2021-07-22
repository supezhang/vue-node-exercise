<template>
 <div>
   <tab-bar style="bottom:100px;">
     <tab-bar-item path="/home">
        <img slot="item-icon" src="../../assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/home-1.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" isActiveColor="#00f">
        <img slot="item-icon" src="../../assets/img/tabbar/fenlei.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/fenlei-1.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" isActiveColor="#00f">
        <img slot="item-icon" src="../../assets/img/tabbar/shop-cart.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/shop-cart-1.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" isActiveColor="#00f">
        <img slot="item-icon" src="../../assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/profile-1.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
   </tab-bar>
 </div>
</template>

<script>
  import TabBar from './TabBar'
  import TabBarItem from './TabBarItem'
 export default {
  name: 'TabBarCpt',
  data () {
   return {

   }
  },
  components: {
    TabBar,
    TabBarItem
  }
 }
</script>

<style scoped>

 
</style>
