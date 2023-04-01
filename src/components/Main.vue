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
  top: -6.25rem;
  border-radius: 50%;
  width: 200%;
  height: 29.375rem;
  background: #24053E;  
}

.wrapper-list::before {
  content: "";
  z-index: -200;
  position: absolute;
  left: -50%;
  top: -12.5rem;
  border-radius: 50%;
  width: 200%;
  height: 140%;
  background: #FCF8FF;
}

@media (min-width: 40rem) {
  .hero-image::before {
    width: 170%;
    top: -8.125rem;
    height: 35.4%;
  }
  img {
    top: 2.875rem;
    left: 1.5rem;
  }
  h1 {
    font-weight: 600;
    max-width: 39.6875rem; 
    font-size: 5rem;
    line-height: 5rem ;
  }
  .wrapper-list::before {
    top: -23.75rem;
    height: 240%;
  }
  .pattern {
    max-width: 90rem;
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
    right: -3.125rem;
    /* transform: rotateZ(-9deg); */
    top: 10.375rem;
    width: 10.9375rem;
    height: 12.5rem;
    background-size: 10.6875rem 11.375rem;
  }
  .pattern::before {
    background: url("../assets/images/bg-pattern-3.svg") no-repeat;
    left: -8.625rem;
    transform: rotateZ(-9deg);
    top: -13.9375rem;
    width: 20.25rem;
    height: 43.75rem;
    background-size: 21.125rem 44.0625rem;
  }
}

@media (max-width: 64rem) {
  .hero-image img {
    max-width: 80%;
  }
}
</style>