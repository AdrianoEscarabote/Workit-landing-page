<script setup>
import ResourceList from './ResourceList.vue';
import Card from "./Card.vue"
</script>

<template>
  <main class="relative overflow-x-hidden w-full">
    <div class="pattern relative"></div>
    <div class="px-5 overflow-hidden">

      <div class="hero-image flex items-center flex-col justify-center">
        <h1 class="font-semibold text-5xl font-Fraunces text-center text-white">Data <span class="border-b-4 border-eucaplyptus">tailored</span> to your needs.</h1>
        <a href="/" aria-label="Learn more" class="text-lg mt-9 grid place-content-center w-40 h-14 bg-eucaplyptus text-dark-purple font-bold hover:bg-dark-purple hover:text-eucaplyptus hover:border hover:border-1 hover:border-eucaplyptus transition-colors duration-500">Learn more</a>
        <img class="relative top-16 max-w-3xl" src="../assets/images/image-hero.webp" alt="" />
      </div>

      <div class="wrapper-list pt-24 relative">
        <ResourceList />
      </div>

      <Card />

    </div>
  </main>
</template>

<style scoped>
.hero-image::before {
  content: "";
  z-index: -100;
  position: absolute;
  top: -100px;
  border-radius: 50%;
  width: 200%;
  height: 470px;
  background: #24053E;  
}

.wrapper-list::before {
  content: "";
  z-index: -200;
  position: absolute;
  left: -50%;
  top: -200px;
  border-radius: 50%;
  width: 200%;
  height: 140%;
  background: #FCF8FF;
}

@media (min-width: 640px) {
  .hero-image::before {
    width: 170%;
    top: -130px;
    height: 35.4%;
  }
  img {
    top: 46px;
    left: 24px;
  }
  h1 {
    font-weight: 600;
    max-width: 635px; 
    font-size: 80px;
    line-height: 80px ;
  }
  .wrapper-list::before {
    top: -380px;
    height: 240%;
  }
  .pattern {
    max-width: 1440px;
    margin: 0 auto;
  }
  .pattern::after,
  .pattern::before {
    content: "";
    position: absolute;
    z-index: 2;
  } 
  .pattern::after {
    background: url("../assets/images/bg-pattern-2.svg") no-repeat;
    right: -50px;
    /* transform: rotateZ(-9deg); */
    top: 166px;
    width: 175px;
    height: 200px;
    background-size: 171px 182px;
  }
  .pattern::before {
    background: url("../assets/images/bg-pattern-3.svg") no-repeat;
    left: -138px;
    transform: rotateZ(-9deg);
    top: -223px;
    width: 324px;
    height: 700px;
    background-size: 338px 705px;
  }
}

@media (max-width: 640px) {
  .hero-image img {
    max-width: 80%;
  }
}
</style>