<template>
  <div id="app">
    <MainMenu />
    <TheGame/>
  </div>
</template>

<script>

import TheGame from '@/components/TheGame.vue'
import MainMenu from '@/components/MainMenu.vue'
export default {
  name: 'app',
  components: {
    TheGame,
    MainMenu
  }
}
</script>

<style>
body {
  background: #333;
}

* {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

#app {
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #aaa;
}
</style>
