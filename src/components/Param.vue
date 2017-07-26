<template>
<div id="param">
  <input v-model="userInput" />
  <button @click="goToRoute">Go to route</button>
</div>
</template>

<script>
export default {
  name: 'param',

  data() {
    return {
      userInput: ''
    }

  },

  methods: {
    goToRoute: function() {
      this.$router.push({
        name: 'Paramdetails',
        params: {
          id: this.userInput
        }
      });
    }
  }
}
</script>

<style>
#param {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
