<template>
  <transition name="modal">
    <div class="modalMask">
      <div class="modalContainer">
        <slot/>
      </div>

      <!-- <div 
        class="closeModal" 
        @click="closeModal()"
      >
        Close window
      </div> -->
    </div>
  </transition>
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
    background: #000000cc;
    z-index: 1000;
  }
  .modalContainer {
    position: relative;
    background-image: linear-gradient(#001122ee, #112233ee);
    padding: 20px;
    color: #ddd;
    width: calc(90vw - 40px);
    height: calc(88vh - 40px);
    margin: 2vh auto 0;
    border-radius: 10px;
    transform: translateY(0px);
  }
  .closeModal {
    padding: 10px 0;
    width: 200px;
    margin: 10px auto;
    font-size: 20px;
    font-variant: small-caps;
    text-transform: lowercase;
    letter-spacing: 1px;
    border: 1px solid #ddd;
  }

  .modal-enter-active, .modal-leave-active {
    transition: all .3s ease;
  }
  .modal-enter, .modal-leave-to  {
    transform: translateY(100px);
    opacity: 0;
    transition: all .4s ease;
  }
</style>