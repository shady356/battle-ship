<template>
  <div id="app">
    <transition name="fade" style="overflow:hidden;">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  background: #333;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
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
  color: #fff;
}

h2,h3,h4,h5,h6 {
  margin: 0px;
  font-style: italic;
  font-weight: 400;
}

.noSelect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
}

.fade-enter-active,
.fade-leave-active {
  transition: all .4s ease-in;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
