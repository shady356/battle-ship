<template>
  <button 
    @click="emitAction()"
    class="noSelect">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'base-button',
  data() {
    return {

    }
  },
  methods: {
    emitAction() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
  button {
    background: #fff;
    border: 1px solid transparent;
    border-radius: 20px;
    cursor: pointer;
    font-size: 18px;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    padding: 8px 18px;
    cursor: pointer;
  }
  .ghost {
    background: none;
    border: 1px solid #fff;
    font-weight: 400;
    color: #ddd;
  }
  .ghost:hover {
    background: #ffffff22;
    border-color: #ffffff11;
  }
</style>