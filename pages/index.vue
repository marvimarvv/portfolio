<template>
  <section class="intro">
    <h1 class="intro__title">Marvin Tandler</h1>
    <div class="intro__artboard" aria-label="Decorative gradient image"></div>
    <div
      id="intro__particles"
      aria-label="Visually interactive area that responds to mouse movements"
    ></div>
    <nuxt-link class="intro__link" to="projects">
      <span class="intro__link-text"> View my projects </span>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  mounted() {
    this.$particles();
  },
};
</script>

<style lang="scss">
.intro {
  display: grid;
  grid-template-columns: 0.5fr 1fr 4fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 4fr 1fr 1fr max-content;
  max-width: 100rem;
  margin: auto;

  @media (min-width: 1101px) {
    padding-top: 0;
    padding-bottom: 6rem;
  }

  &__title {
    grid-column: 1/-1;
    grid-row: 1/3;
    align-self: center;
    isolation: isolate;
  }

  &__artboard {
    grid-column: 2/4;
    grid-row: 2/5;
    box-shadow: var(--box-shadow-outset-l);
    padding: 3rem;
    background-image: url("/coverart.svg");
    background-size: cover;
    background-repeat: none;
    border-radius: var(--border-radius);
  }

  &__link {
    grid-column: 1/-1;
    grid-row: 7/-1;
    justify-self: end;
    align-self: end;
    margin-top: 3rem;
    text-decoration: none;
    padding: 8px 12px;
    color: white;
    background-color: #ff695c;
    border-radius: 5px;
    text-transform: capitalize;
    transition: all 0.5s ease;

    &:focus-visible {
      background-color: #ff4331;
      transform: translateY(-3px);
      transition: transform 0.5s;
    }

    @media (pointer: fine) and (hover: hover) {
      &:hover {
        background-color: #ff4331;
        transform: translateY(-3px);
        transition: transform 0.5s;
      }

      &:active {
        transform: translateY(3px);
        transition: transform 0.5s;
      }
    }

    @media (pointer: coarse) {
      &:active {
        background-color: #ff4331;
        transform: translateY(5px);
        transition: transform 1s;
      }
    }
  }
}

#intro__particles {
  grid-column: 3/6;
  grid-row: 4/7;
  background-color: rgba(20, 20, 20, 0.7);
  box-shadow: var(--box-shadow-outset-l);
  overflow: hidden;
  isolation: isolate;
  border-radius: var(--border-radius);
}
</style>
