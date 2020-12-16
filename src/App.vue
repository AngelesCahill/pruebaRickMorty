<template>
  <div id="app">
    <div id="nav">
     <NavBar/>
     
    </div>
    <router-view/>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';


export default {
  name: 'app',
  
  components: {
    NavBar,
    
  },
  created() {
    this.$store.dispatch('traerApi');
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap');
#app {
  font-family: 'Hammersmith One', sans-serif;
}
</style>
