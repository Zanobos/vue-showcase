<template>
  <div id="app">
    <navbar/>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
    name: 'app',
    components: {
        Navbar
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
