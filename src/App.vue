<template>
  <div id="app">
    <TheGame/>
  </div>
</template>

<script>

import TheGame from '@/components/TheGame.vue'
export default {
  name: 'app',
  components: {
    TheGame
  }
}
</script>

<style>
body {
  background: #333;
}
#app {
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #aaa;
  margin-top: 60px;
}
</style>
