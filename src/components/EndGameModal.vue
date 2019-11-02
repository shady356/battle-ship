<template>
  <div class="end-game-modal-container">
    <div class="title">
      {{endGameStatusTitle}}
    </div>
    <div class="score">
      <div class="label">
        Score
      </div>
      <div class="value">
        1337
      </div>

      <div class="bombsLeft">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'end-game-modal',
  data() {
    return {

    }
  },
  computed: {
    endGameStatusTitle() {
      return this.result.win ? 'You Rock!' : 'Game Over'
    }
  },
  props: {
    result: {
      type: Object,
      required: true
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .title {
  }
  .score {
    margin-top: 30px;
    padding: 20px 0;
  }
  .score .label {
    font-size: 20px;
    text-transform: lowercase;
    letter-spacing: 1px;
    font-variant: small-caps;
  }
  .score .value {
    color: #ecb00a;
    letter-spacing: 0px;
    font-size: 46px;
  }
</style>