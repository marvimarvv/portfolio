<template>
  <main class="page-container">
    <Nav />
    <Nuxt />
  </main>
</template>

<script>
import Nav from "./partials/nav";
export default {
  components: {
    Nav
  }
}
</script>

<style>
.page-container {
  max-width: 140rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  /* Use on mobile to fix iOS Safari issue with 100vh */
  height: var(--app-height);
}

@media (min-width: 1101px) {
  .page-container {
    height: 100vh;
    flex-direction: column;
  }
}
</style>
