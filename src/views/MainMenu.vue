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
<!--       <button @click="fadeOut()">pause sound</button>
      <button @click="introSong.play()">play sound</button> -->

    </div>
  </div>
</template>

<script>
export default {
  name: 'mainMenu',
  data() {
    return {
      introSong: null,
      introSongVolume: .8,
      items: [
        {
          name: 'Play',
          path: '/theGame'
        },
        {
          name: 'Settings',
          path: '/settings'
        },
        {
          name: 'Quit',
          path: '/'
        }
      ]
    }
  },
  mounted  () {
    this.introSong = this.createMainThemeInstance()
    //this.introSong.play()
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
    width: 100vw;
    background-image: url('../assets/mainMenuBG.png');
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
  }

  .mainLogo {
    font-family: 'Satisfy', cursive;
    font-weight: unset;
    color: #1f386e;
    font-size: 46px;
    line-height: 40px;
    text-align: center;
    padding-top: 100px;
    animation: mainLogo 400ms ease-in;
  }
  .mainLogo .stopWord {
    font-size: 30px;
  }

  .mainMenuList {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: 80px;
  }

  .mainMenuList li {
    font-size: 36px;
    letter-spacing: 1px;
    color: #dae2f7;
    font-weight: 400;
    margin-bottom: 30px;
    border-left: 4px solid transparent;
    cursor: pointer;
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