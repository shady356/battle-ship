<template>
  <div class="end-game-modal-container">
    <!-- <div class="title">
      {{endGameStatusTitle}}
    </div> -->

    <!-- Win msg -->
    <div 
      class="score"
      v-if="result.win"
      >
      <h2>You Rock!</h2><br><br>
      <div class="label">
        bombs left
      </div>
      <div class="value">
        {{ result.bombs}}
      </div>
    </div>

    <!-- fail msg -->
    <div 
      v-else 
      class="score">
      <h2>Game Over</h2>
    </div>

    <base-button @click="retry()">
      Play again
    </base-button>

  </div>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue'
export default {
  name: 'end-game-modal',
  data() {
    return {

    }
  },
  components: {
    BaseButton
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
    retry() {
      this.$router.go()
    }
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