<template>
  <ul class="flex flex-wrap items-center gap-6 pt-6 relative -bottom-6">
    <li class="flex items-center justify-center flex-col gap-5 text-center">
      <p class="text-2xl font-semibold w-14 h-14 font-Fraunces text-dark-purple grid place-content-center border border-dark-purple border-solid border-1 rounded-full">1</p>
      <div class="wrapper flex flex-col gap-5 pt-10">
        <h2 class="font-Fraunces text-dark-purple text-3xl">Actionable insights</h2>
        <p class="text-davy-grey text-lg/8">Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.</p>
      </div>
    </li>
    <li class="flex items-center justify-center flex-col gap-5 text-center">
      <p class="text-2xl font-semibold w-14 h-14 font-Fraunces text-dark-purple grid place-content-center border border-dark-purple border-solid border-1 rounded-full">2</p>
      <div class="wrapper flex flex-col gap-5 pt-10">
        <h2 class="font-Fraunces text-dark-purple text-3xl">Data-driven decisions</h2>
        <p class="text-davy-grey text-lg/8">Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.</p>
      </div>
    </li>
    <li class="flex items-center justify-center flex-col gap-5 text-center">
      <p class="text-2xl font-semibold w-14 h-14 font-Fraunces text-dark-purple grid place-content-center border border-dark-purple border-solid border-1 rounded-full">3</p>
      <div class="wrapper flex flex-col gap-5 pt-10">
        <h2 class="font-Fraunces text-dark-purple text-3xl">Always affordable</h2>
        <p class="text-davy-grey text-lg/8">Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.</p>
      </div>  
    </li>
  </ul>
</template>

<style scoped>

@media (min-width: 64rem) {
  .wrapper h2 {
    font-size: 2rem; 
  }
  li {
    flex-direction: column !important;
    max-width: 22.125rem;
  }
  li .wrapper {
    text-align: center !important;
  }
}
@media (min-width: 40rem) {
  li {
    flex-direction: row;
  }
  li .wrapper {
    gap: 1.25rem;
    text-align: start;
    max-width: 30.8125rem;
  }
  ul {
    justify-content: center;
  }
}
</style>