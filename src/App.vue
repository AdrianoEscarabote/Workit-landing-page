<script setup>
import Header from "./components/Header.vue"
import Main from "./components/Main.vue"
</script>

<template>
  <Header />
  
  <Main />

  <!-- <div>
    <h2 class="px-4 py-3 text-primary font-manrope">Apply for access</h2>
    <p>Data tailored to your needs.</p>
    <p>Learn more</p>
    <ol class="flex items-center">
      <li>Actionable insights</li>
      <p>Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.</p>
      <li>Data-driven decisions</li>
      <p>Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.</p>
      <li>Always affordable</li>
      <p>Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.</p>
    </ol>
    <h2>Be the first to test</h2>
    <p>Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call.</p>
    <button>Apply for access</button>
  </div>

  <main>
    <TheWelcome />
  </main> -->
</template>

<style>
/* global styles */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}
/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul {
  list-style: none;
}
/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}
/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: 'Manrope', sans-serif;
}
/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}
/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
.sr-only {
  position: absolute;
  width: 0.0625rem;
  height: 0.0625rem;
  padding: 0;
  margin: -0.0625rem;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}

.font-fraunces {
  font-family: 'Fraunces', sans-serif;
}
.font-manrope {
  font-family: "Manrope", sans-serif;
}
</style>