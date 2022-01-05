<template>
  <main class="Homepage">
    <section class="herobanner">
      <h1 class="title">
        <span id="letter1">R</span>
        <span id="letter2">e</span>
        <span id="letter3">s</span>
        <span id="letter4">i</span>
        <span id="letter5">l</span>
        <span id="letter6">i</span>
        <span id="letter7">e</span>
        <span id="letter8">n</span>
        <span id="letter9">c</span>
        <span id="letter10">e</span>
      </h1>
      <p class="desc">Rediscover nature</p>
      <div class="hero-background"></div>
    </section>
    <section class="first-section">
      <h2 class="subtitle">About</h2>
      <div class="first-section-container">
        <div class="first-section-content">
          <p class="first-section-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, animi, minus tenetur eaque aperiam laborum blanditiis cupiditate at libero ex pariatur quisquam nostrum, ab natus velit eum voluptates. Neque nam ullam reiciendis unde corporis similique, ipsa ut sequi dolorem libero magnam incidunt officiis facilis culpa odit pariatur deleniti reprehenderit illum dicta? A, beatae. Nesciunt odit illo, necessitatibus soluta tempore delectus dignissimos, dolores, ab praesentium et odio id laboriosam inventore voluptas aliquid error unde voluptates accusantium qui. Eligendi vel pariatur laboriosam autem laborum esse, cum tempore! Delectus, illum! Laborum porro quia ad sequi quam nobis, nulla impedit consequatur sapiente inventore iure similique, provident officia quisquam vero est velit molestiae consectetur dolor necessitatibus sunt quos eius. Voluptate voluptatem debitis modi. Iusto atque sequi fuga sunt id nihil dicta culpa minima obcaecati aut rerum nam repudiandae, iste enim architecto recusandae. Aperiam, vitae sunt qui ullam libero architecto eaque sequi iste at praesentium totam voluptatem illum aspernatur itaque quidem. Tempora vero similique laborum commodi, accusantium quod dolorum, quae earum nostrum harum sapiente. Impedit eligendi tempora odio quibusdam dolorum repellendus facilis rem incidunt eveniet dicta molestiae quidem, voluptates sint doloribus natus quam odit eaque temporibus, harum beatae eum reiciendis officia autem quia? Magnam, ab unde.</p>
        </div>
        <div class="first-section-images"></div>
      </div>
    </section>
    <section class="second-section">
      <h2 class="subtitle">Stats</h2>
      <div class="second-section-container">
        <div class="second-section-img"></div>
        <div class="second-section-graph">
          <tree-chart style="width:100%; height:100%"/>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import {gsap} from "gsap"
import TreeChart from '~/components/TreeChart.vue'

export default Vue.extend({
  components: { TreeChart },
  name: 'IndexPage',
  mounted(){
    gsap.to("#letter1", {delay: 1, duration : 2, opacity : 1})
    gsap.to("#letter2", {delay: 1.5, duration : 2, opacity : 1})
    gsap.to("#letter3", {delay: 2, duration : 2, opacity : 1})
    gsap.to("#letter4", {delay: 2.5, duration : 2, opacity : 1})
    gsap.to("#letter5", {delay: 3, duration : 2, opacity : 1})
    gsap.to("#letter6", {delay: 3.5, duration : 2, opacity : 1})
    gsap.to("#letter7", {delay: 4, duration : 2, opacity : 1})
    gsap.to("#letter8", {delay: 4.5, duration : 2, opacity : 1})
    gsap.to("#letter9", {delay: 5, duration : 2, opacity : 1})
    gsap.to("#letter10", {delay: 5.5, duration : 2, opacity : 1})
    gsap.to(".desc", {delay: 7.5, duration : 2, opacity : 1})
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.herobanner{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .hero-background{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    background-image: url("@/assets/images/hero-background.jpeg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(0.5);
  }
  .title{
    position: absolute;
    z-index: 1;
    color: white;
  }
  #letter1, #letter2, #letter3, #letter4, #letter5, #letter6, #letter7, #letter8, #letter9, #letter10{
     font-family: $font-secondary;
     opacity: 0;
  }
  .desc{
    position: absolute;
    z-index: 1;
    color: white;
    font-family: $font-secondary;
    opacity: 0;
  }
}
.first-section{
  width: 100vw;
  background-color: rgb(17, 17, 17);
  height: 100vh;
}
.second-section{
  width: 100vw;
  background-color: rgb(17, 17, 17);
  height: 100vh;
}
.third-section{
  width: 100vw;
  background-color: rgb(17, 17, 17);
  height: 100vh;
}
.first-section-container{
  width: 90%;
  padding: 0 5%;
}
@media all and (max-width:767.98px){
  .title{
    font-size: 6vh;
    transform: translateY(-4vh);
  }
  .desc{
    font-size: 2vh;
    transform: translateY(4vh);
  }
  .first-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .first-section-container{
      display: flex;
      flex-direction: column-reverse;
      .first-section-content{
        width: 100%;
        height: 100%;
        background-color: red;
      }
      .first-section-images{
        width: 100%;
        height: 100%;
        background-color: green;
      }
    }
    .subtitle{
      font-family: $font-secondary;
      color: white;
      font-size: 4vh;
      margin-bottom: 4vh;
    }
  }
}
@media all and (min-width:768px) and (max-width:991.98px){
  .title{
    font-size: 8vh;
    transform: translateY(-4vh);
  }
  .desc{
    font-size: 3vh;
    transform: translateY(4vh);
  }
  .first-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .first-section-container{
      display: flex;
      flex-direction: column-reverse;
      .first-section-content{
        width: 100%;
        height: 100%;
        background-color: red;
      }
      .first-section-images{
        width: 100%;
        height: 100%;
        background-color: green;
      }
    }
    .subtitle{
      font-family: $font-secondary;
      color: white;
      font-size: 6vh;
      margin-bottom: 4vh;
    }
  }
}
@media all and (min-width:992px) and (max-width:1199.98px){
  .title{
    font-size: 10vh;
    transform: translateY(-6vh);
  }
  .desc{
    font-size: 3vh;
    transform: translateY(6vh);
  }
  .first-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .first-section-container{
      display: flex;
      flex-direction: column-reverse;
      height: 120%;
      .first-section-content{
        width: 100%;
        height: 100%;
        background-color: red;
      }
      .first-section-images{
        width: 100%;
        height: 100%;
        background-color: green;
      }
    }
    .subtitle{
      font-family: $font-secondary;
      color: white;
      font-size: 6vh;
      margin-bottom: 4vh;
    }
  }
}
@media all and (min-width:1200px){
  .title{
    font-size: 12vh;
    transform: translateY(-6vh);
  }
  .desc{
    font-size: 4vh;
    transform: translateY(6vh);
  }
  .first-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    .first-section-container{
      display: flex;
      .first-section-content{
        width: 40%;
        height: 100%;
        padding: 0 5%;
        display: flex;
        align-items: center;
        text-align: center;
      }
      .first-section-images{
        width: 50%;
        height: 100%;
        background-image: url('https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80');
        background-position: center;
        background-size: cover;
      }
    }
    .subtitle{
      font-family: $font-secondary;
      color: white;
      font-size: 6vh;
      margin-bottom: 4vh;
    }
    .first-section-desc{
      color: white;
      line-height: 2.75vh;
    }
  }
  .second-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    .second-section-container{
      display: flex;
      width: 100vw;
      height: 90vh;
    }
    .second-section-graph{
        width: 50%;
        height: 100%;
        padding: 0 5%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      .second-section-img{
        width: 50%;
        height: 100%;
        background-image: url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1441&q=80');
        background-position: center;
        background-size: cover;
      }
    .subtitle{
      font-family: $font-secondary;
      color: white;
      font-size: 6vh;
      margin-bottom: 4vh;
    }
    .second-section-desc{
      color: white;
      line-height: 2.75vh;
    }
  }
  .third-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    .third-section-container{
      display: flex;
      width: 100vw;
      height: 90vh;
    }
    .third-section-graph{
        width: 50%;
        height: 100%;
        padding: 0 5%;
        display: flex;
        align-items: center;
        text-align: center;
      }
      .third-section-img{
        width: 50%;
        height: 100%;
        background-image: url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1441&q=80');
        background-position: center;
        background-size: cover;
      }
    .subtitle{
      font-family: $font-secondary;
      color: white;
      font-size: 6vh;
      margin-bottom: 4vh;
    }
    .third-section-desc{
      color: white;
      line-height: 2.75vh;
    }
  }
}
</style>