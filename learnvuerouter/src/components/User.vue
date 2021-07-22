<template>
 <div>
    <h2>用户</h2>
    <h3>用户ID：{{userId}}</h3>
 </div>
</template>

<script>
 export default {
  name: 'User',
  data () {
   return {

   }
  },
  components: {

  },
  computed:{
       userId(){
           return this.$route.params.userId
       }
  }
 }
</script>

<style scoped>

 
</style>
