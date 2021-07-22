<template>
 <div>
     <h2>档案</h2>
     <ul>
         <li>{{$route.query.name}}</li>
         <li>{{$route.query.age}}</li>
         <li>{{$route.query.height}}</li>
     </ul>
     <button @click="clickRoute">route/router</button>
     
 </div>
</template>

<script>
 export default {
  name: 'Profile',
  data () {
   return {

   }
  },
  components: {

  },
  methods:{
      clickRoute(){
          console.log(this.$route);
          console.log(this.$router);
      }
  }
 }
</script>

<style scoped>

 
</style>
