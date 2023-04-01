<template>
  <section class="flex items-center justify-center flex-col relative pt-56">
    <img src="../assets/images/image-founder.webp" alt="" class="object-cover relative -bottom-10 w-4/5 -z-10">
    <div class="w-full box-text flex items-center justify-center text-center flex-col bg-dark-purple p-8 gap-6">
      <h3 class="font-Fraunces text-white text-4xl font-semibold">Be the first to test</h3>
      <p class="text-white text-base/8 font-normal max-w-xl">Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call.</p>
      <a class="font-bold text-lg/loose grid place-content-center w-48 h-16 text-dark-purple bg-eucaplyptus hover:border hover:border-1 hover:border-eucaplyptus hover:text-eucaplyptus hover:bg-dark-purple transition-colors duration-500" href="/">Apply for access</a>
    </div>
  </section>
</template>

<style scoped>
@media (min-width: 64rem) { 
  section img {
    left: 2.625rem;
  }
  section {
    margin-top: 12.5rem;
  }
  h3 {
    font-size: 56px;
  }
  img {
    top: -7.5rem;
    right: -5rem;
  }
  .box-text {
    align-items: flex-start;
    max-width: 45.625rem;
    height: 29.1875rem;
    position: relative;
    top: 3.5rem;
    left: -3.125rem;
    padding-left: 4rem !important;
  }
  .box-text h3 {
    position: relative;
    top: -2.25rem;
  }
  .box-text p {
    position: relative;
    top: -1rem;
  }
  .box-text a {
    position: relative;
    top: -0.3125rem;
  }
  p {
    text-align: start;
  }
  section {
    flex-direction: row;
  }
}
@media (max-width: 40rem) {
  img {
    max-width: 17.5625rem;
  }
}
@media (min-width: 40rem) {
  img {
    max-width: 29.8125rem;
  }
  .box-text {
    position: relative;
  }
  .box-text::before {
    content: "";
    width: 100%;
    height: 13rem;
    background: url("../assets/images/bg-pattern-1.svg") no-repeat;
    background-size: 12.625rem 11.125rem;
    position: absolute;
    right: -28.125rem;
    bottom: -1.125rem;
    z-index: 2;
  }
}
</style>