<template>
  <div class="modalMask">
    <div class="modalContainer">
      <div class="title">
        Modal title
      </div>
    </div>
    <div 
      class="closeModal" 
      @click="closeModal()">Close</div>
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
    closeModal() {
      this.$emit('closeModal')
    }
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
    background-image: linear-gradient(#012, #123);
    padding: 20px;
    color: #ddd;
    width: calc(90vw - 40px);
    height: calc(90vh - 40px);
    margin: 2vh auto 0;
    border-radius: 10px;
  }
  .title {
    
  }
  .closeModal {
    padding-top: 15px;
    font-size: 20px;
    font-variant: small-caps;
    text-transform: lowercase;
    letter-spacing: 1px;
  }
</style>