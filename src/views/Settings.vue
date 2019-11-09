<template>
  <div class="container">
    
    <div class="header">
      <h2>Settings</h2>
    </div>

    <ul class="list">
      <li 
        v-for="item in list"
        :key="item.name"
        @click="vibrate()"
      >
        <div>
          <h3>{{item.name}}</h3>
          <base-slider class="slider"/>
        </div>
      </li>
    </ul>
    <base-button>
      Save
    </base-button>
    <base-button
    class="ghost">
      Reset to <br>default
    </base-button>
  </div>
</template>

<script>
import BaseSlider from '@/components/base/BaseSlider.vue'
import BaseButton from '@/components/base/BaseButton.vue'

export default {
  name: 'settings',
  components: {
    BaseSlider,
    BaseButton
  },
  data() {
    return {
      list: [
        {
          name: 'Music',
          value: 0.5,
          min: 0,
          max: 1,
          step: 10,
          default: 0.5
        },
        {
          name: 'Sound FX',
          value: 0.5,
          min: 0,
          max: 1,
          step: 10,
          default: 0.5
        },
        {
          name: 'Vibration',
          value: 0.5,
          min: 0,
          max: 1,
          step: 10,
          default: 0.5
        }
      ]
    }
  },
  methods: {
    vibrate() {
      window.navigator.vibrate(200);
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 8% 4%;
  }
  .header {
    margin-bottom: 40px;
  }
  .list {
    padding: 0 40px;
    text-align: left;
  }
  .list li {
    padding: 15px 0;
  }
  .list li .slider {
    
  }
</style>