<template>
  <div id="app">    
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" isActiveColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/home-1.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" isActiveColor="#00f">
        <img slot="item-icon" src="./assets/img/tabbar/fenlei.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/fenlei-1.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" isActiveColor="#00f">
        <img slot="item-icon" src="./assets/img/tabbar/shop-cart.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/shop-cart-1.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" isActiveColor="#00f">
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/profile-1.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
    <tab-bar-cpt></tab-bar-cpt>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem'
import TabBarCpt from "./components/tabbar/TabBarCpt"
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components:{
    TabBar,
    TabBarItem,
    TabBarCpt
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
