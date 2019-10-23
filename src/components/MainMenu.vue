<template>
  <div class="container">
    <ul class="mainMenuList">
      <li 
       v-for="(item,index) in items" :key="index">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'mainMenu',
  data() {
    return {
      items: [
        {
          name: 'Play'
        },
        {
          name: 'Settings'
        },
        {
          name: 'quit'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .container {
    height: 100vh;
    background: linear-gradient(to bottom right, #02383a, #0c0625);
  }

  .mainMenuList {
    position: absolute;
    text-align: left;
    top: 20vh;
    left: 10vh;
    perspective: 200px;
    perspective-origin: left; 
  }

  .mainMenuList li {
    font-size: 36px;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: #eeeeeeaa;
    padding-left: 10px;
    margin-bottom: 20px;
    transform: rotateY(10deg);
    border-left: 4px solid transparent;
    cursor: pointer;
    transition: all .4s;
  
  }
  .mainMenuList:hover {

    transform: rotate(0deg);
    transition: all .4s;
  }
  .mainMenuList li:hover {
    color: #fff;
    transform: rotateY(5deg);
    border-color: #166d88;
    transition: all .4s;
  }

</style>