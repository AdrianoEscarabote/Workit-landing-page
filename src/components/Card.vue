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
@media (min-width: 1024px) { 
  section img {
    left: 42px;
  }
  section {
    margin-top: 200px;
  }
  h3 {
    font-size: 3.5rem;
  }
  img {
    max-width: 477px;
    top: -120px;
    right: -80px;
  }
  .box-text {
    align-items: flex-start;
    max-width: 730px;
    height: 467px;
    position: relative;
    top: 56px;
    left: -50px;
    padding-left: 64px !important;
  }
  .box-text h3 {
    position: relative;
    top: -36px;
  }
  .box-text p {
    position: relative;
    top: -16px;
  }
  .box-text a {
    position: relative;
    top: -5px;
  }
  p {
    text-align: start;
  }
  section {
    flex-direction: row;
  }
}
@media (max-width: 640px) {
  img {
    max-width: 281px;
  }
}
@media (min-width: 640px) {
  .box-text {
    position: relative;
  }
  .box-text::before {
    content: "";
    width: 100%;
    height: 208px;
    background: url("../assets/images/bg-pattern-1.svg") no-repeat;
    background-size: 202px 178px;
    position: absolute;
    right: -450px;
    bottom: -18px;
    z-index: 2;
  }
}
</style>