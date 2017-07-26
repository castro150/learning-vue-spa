<template>
<div id="paramdetails">
  The paremeter value that was passed to me is: {{ $route.params.id }}
</div>
</template>

<script>
export default {
  name: 'paramdetails'
}
</script>

<style>
#paramdetails {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
