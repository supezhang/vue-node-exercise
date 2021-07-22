<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
 export default {
  name: 'Tabbar',
  data () {
   return {

   }
  },
  components: {

  }
 }
</script>

<style scoped>
  #tab-bar{
    display:flex;
    background-color:#f6f6f6;
    position:fixed;
    left:0;
    right:0;
    bottom:0;
    box-shadow: 0 -3px 1px rgba(71, 48, 48, .1);
  }
</style>
