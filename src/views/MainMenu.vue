<template>
  <div class="container" >
    <div>
      <h1 class="mainLogo">Battle<br><span class="stopWord">of</span> Ships</h1>
    </div>
    <ul class="mainMenuList">
      <router-link 
       v-for="(item,index) in items" 
       :key="index"
       :to="item.path"
       tabindex="0"
       tag="li">
 
        {{item.name}}
      </router-link> 
    </ul>
    <div v-if="introSong">
      <button @click="fadeOut()">pause sound</button>
      <button @click="introSong.play()">play sound</button>

    </div>
  </div>
</template>

<script>
export default {
  name: 'mainMenu',
  data() {
    return {
      introSong: null,
      introSongVolume: .5,
      items: [
        {
          name: 'Play',
          path: '/theGame'
        },
        {
          name: 'Settings',
          path: '/'
        },
        {
          name: 'quit',
          path: '/'
        }
      ]
    }
  },
  mounted  () {
    this.introSong = this.createMainThemeInstance()
    this.introSong.play()
  },
  methods: {
    createMainThemeInstance () {
      let mainTheme = new Audio(require('@/assets/battleOfShipsIntro.wav')); 
      mainTheme.loop = true;
      mainTheme.volume = this.introSongVolume
      return mainTheme;
    },
    fadeOut () {
      do {
        this.introSong.volume -= .1;
      } while (this.introSong.volume > 0.1);
      this.introSong.pause()
    }
  }
}
</script>

<style scoped>
  .container {
    height: 100vh;
    background-image: url('../assets/mainMenuBG.png');
    background-repeat: no-repeat;
  }

  .mainLogo {
    position: absolute;
    top: 100px;
    left: 30vh;
    font-family: 'Satisfy', cursive;
    font-weight: unset;
    color: #1f386e;
    font-size: 46px;
    line-height: 40px;
    text-align: left;
    animation: mainLogo 400ms ease-in;
  }
  .mainLogo .stopWord {
    font-size: 30px;
  }

  .mainMenuList {
    position: absolute;
    text-align: left;
    top: 20vh;
    left: 10vh;
  }

  .mainMenuList li {
    font-family: 'Satisfy', cursive;
    font-size: 28px;
    letter-spacing: 4px;
    color: #e6e1c9;
    padding-left: 10px;
    margin-bottom: 20px;
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

  @keyframes mainLogo {
    0% {
      transform: scale(0.5);
      color: #3c7bcc;
    }
    100% {
      transform: scale(1);
      
    }
  }

</style>