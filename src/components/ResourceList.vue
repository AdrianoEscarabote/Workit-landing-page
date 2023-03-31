<template>
  <ul class="flex flex-wrap items-center gap-6">
    <li class="flex items-center justify-center flex-col gap-3 text-center">
      <p class="w-12 h-12 text-dark-purple text-xl grid place-content-center border border-dark-purple border-solid border-1 rounded-full">1</p>
      <div class="wrapper">
        <h2 class="font-Fraunces text-dark-purple text-2xl">Actionable insights</h2>
        <p class="text-davy-grey">Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.</p>
      </div>
    </li>
    <li class="flex items-center justify-center flex-col gap-3 text-center">
      <p class="w-12 h-12 text-dark-purple text-xl grid place-content-center border border-dark-purple border-solid border-1 rounded-full">2</p>
      <div class="wrapper">
        <h2 class="font-Fraunces text-dark-purple text-2xl">Data-driven decisions</h2>
        <p class="text-davy-grey ">Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.</p>
      </div>
    </li>
    <li class="flex items-center justify-center flex-col gap-3 text-center">
      <p class="w-12 h-12 text-dark-purple text-xl grid place-content-center border border-dark-purple border-solid border-1 rounded-full">3</p>
      <div class="wrapper">
        <h2 class="font-Fraunces text-dark-purple text-2xl">Always affordable</h2>
        <p class="text-davy-grey ">Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.</p>
      </div>  
    </li>
  </ul>
</template>

<style scoped>
@media (min-width: 640px) {
  li {
    flex-direction: row;
  }
  li .wrapper {
    gap: 20px;
    text-align: start;
    max-width: 493px;
  }
  ul {
    justify-content: center;
  }
}
</style>