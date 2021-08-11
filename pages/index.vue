<template>
  <section class="intro">
    <h1 class="intro__title">
      Marvin Tandler
    </h1>
    <div class="intro__artboard" aria-label="Decorative gradient image">
    </div>
    <div id="intro__particles" aria-label="Visually interactive area that responds to mouse movements">
    </div>
  </section>
</template>

<script>
export default {
  mounted () {
   this.$particles()
  }
}
</script>

<style lang="scss">
.intro {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: auto 1fr 4fr 1fr;
  max-width: 110rem;
  margin: auto;

  @media only screen and (min-width: 1100px) {
    height: calc(100vh - 191px);
    max-height: 80rem;
    padding-top: 0;
    padding-bottom: 6rem;
  }

  &__title {
    grid-column: 1/-1;
    grid-row: 1/2;
    align-self: end;
  }

  &__artboard {
    grid-column: 1/3;
    grid-row: 2/4;
    box-shadow: $box-shadow-outset-l;
    isolation: isolate;
    padding: 3rem;
    background-image: url("../assets/images/coverart.svg");
    background-size: cover;
    background-repeat: none;
  }
}

#intro__particles {
  grid-column: 2/-1;
  grid-row: 3/-1;
  background-color: rgba(20, 20, 20, 0.7);
  box-shadow: $box-shadow-outset-l;
  overflow: hidden;
  isolation: isolate;
}
</style>
