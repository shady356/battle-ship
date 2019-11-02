<template>
  <div class="modalMask">
    <div class="modalContainer">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'base-modal',
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .modalMask {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: #000000aa;
    z-index: 1000;
  }
  .modalContainer {
    background: #123;
    padding: 20px;
    color: #ddd;
    width: calc(90vw - 40px);
    height: calc(90vh - 40px);
    margin: 5vh auto 0;
    border-radius: 20px;
  }
</style>