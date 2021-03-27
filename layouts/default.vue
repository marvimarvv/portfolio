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
    min-height: 100vh;
    margin: 0 auto;
  }
</style>