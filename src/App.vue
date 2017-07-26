<template>
<div id="app">
  <router-link :to="'/'">Home</router-link>
  <router-link :to="'/about'">About</router-link>
  <router-link :to="'/param'">Param Link</router-link>
  <!-- the router outlet, where all matched components would ber viewed -->
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app',

  created() {
    Event.$on('global-event', param => console.log('Global event holded: ' + param));
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
  margin-top: 60px;
}
</style>
