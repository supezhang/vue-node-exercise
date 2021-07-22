<template>
 <div class="tabbar">
   <slot></slot>
 </div>
</template>

<script>
 export default {
  name: 'TabBar',
  data () {
   return {

   }
  },
  components: {

  }
 }
</script>

<style scoped>
.tabbar{
    display:flex;
    background-color:#f6f6f6;
    position:fixed;
    left:0;
    right:0;
    bottom:0;
    box-shadow: 0 -3px 1px rgba(71, 48, 48, .1);
}
 </style>
