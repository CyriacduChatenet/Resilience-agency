<template>
  <main class="Homepage" @scroll="changeNavStyle">
    <section class="herobanner">
      <h1 class="title">Resilience</h1>
      <p class="desc">Rediscover nature</p>
      <div class="hero-background"></div>
    </section>
    <section class="first-section"></section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  methods:{
    changeNavStyle () {
      console.log(window.scrollY)
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
  .Homepage{
    width: 100vw;
    height: 100vh;
    .herobanner{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .title{
      position: absolute;
      z-index: 1;
      color: white;
      font-family: $font-secondary;
    }
    .desc{
      color: white;
      font-family: $font-secondary;
      position: absolute;
      z-index: 1;
      transform: translateY(10vh);
    }
    .hero-background{
      width: 100%;
      height: 100%;
      background-image: url('../assets/images/hero-background.jpeg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      filter: brightness(0.5);
      position: absolute;
      z-index: 0;
    }
  }
  .first-section{
    width: 100vw;
    height: 100vh;
    background-color: rgb(17, 17, 17);
  }

  @media all and (min-width:1200px){
    .title{
        font-size: 12vh;
    }
    .desc{
      font-size: 3vh;
    }
  }
</style>