<template>
  <div>
    <input type="range" value="5" step="1" min="1" max="10" @input="change">
  </div>
</template>

<script>
export default {
  name: 'base-slider',
  methods: {
    change() {
      window.navigator.vibrate(3);
    }
  }
}
</script>

<style scoped>
  input {
    width: 100%;
    background: none;
  }
  input[type=range] {
  height: 31px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  animate: 0.2s;
  background: #4e4e4e;
  border-radius: 5px;
}
input[type=range]::-webkit-slider-thumb {
  height: 24px;
  width: 6px;
  border-radius: 2px;
  background: #eccd40;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -11px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #4d4d4d;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  animate: 0.2s;
  background: #5c5c5c;
  border-radius: 5px;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #000000;
  height: 24px;
  width: 10px;
  border-radius: 2px;
  background: #858585;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #132C42;
  border: 1px solid #000000;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #000000;
}
input[type=range]::-ms-fill-upper {
  background: #132C42;
  border: 1px solid #000000;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #000000;
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #000000;
  height: 24px;
  width: 10px;
  border-radius: 2px;
  background: #858585;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #132C42;
}
input[type=range]:focus::-ms-fill-upper {
  background: #132C42;
}
</style>