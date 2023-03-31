<script setup>
import ResourceList from './ResourceList.vue';
import Card from "./Card.vue"
</script>

<template>
  <main class="relative overflow-x-hidden">
    <div class="px-5">

      <div class="hero-image flex items-center flex-col justify-center">
        <h1 class="font-semibold text-5xl font-Fraunces text-center text-white">Data <span class="border-b-4 border-eucaplyptus">tailored</span> to your needs.</h1>
        <a href="/" class="mt-12 grid place-content-center w-36 h-14 bg-eucaplyptus text-dark-purple font-bold">Learn More</a>
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

@media (max-width: 640px) {
  .hero-image img {
    max-width: 80%;
  }
}
</style>