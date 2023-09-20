<template>
  <main class="page-container">
    <Nav />
    <Nuxt />
    <div class="floating-action-menu">
      <button class="theme-button theme-button--contrast">Contrast</button>
      <button class="theme-button theme-button--dark">Dark</button>
      <button class="theme-button theme-button--light">Light</button>
      <button class="main-button">Theme Picker</button>
    </div>
  </main>
</template>

<script>
import Nav from "./partials/nav";
export default {
  components: {
    Nav,
  },
};
</script>

<style lang="scss">
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

.light {
  background: conic-gradient(
    from 3.1416rad at 0% 50%,
    rgba(254, 173, 166, 0.6),
    hsl(var(--hue) calc(var(--saturation) / 2) 95%)
  );
  color: hsl(var(--hue) var(--saturation) 10%);
}

.dark {
  background: conic-gradient(
    from 3.1416rad at 0% 50%,
    rgba(254, 173, 166, 0.6),
    hsl(calc(var(--hue) - 180) var(--saturation) 2%)
  );
  color: hsl(var(--hue) calc(var(--saturation) / 4) 70%);
}

.contrast {
  color: #222222;
  background-color: #efefef;
  border: 0.3rem solid #222222;
  font-weight: 700;
}

.floating-action-menu {
  &:hover,
  &:focus-within {
    .theme-button {
      opacity: 1;

      &:hover,
      &:focus-within {
        scale: 1.1;
        z-index: 1;
      }

      &--light,
      &--dark,
      &--contrast {
        transform: translateY(0);
      }
    }
  }

  display: grid;
  place-items: center;
  position: absolute;
  bottom: 6rem;
  width: 7rem;
  height: 7rem;
  border-radius: 1px;
  right: 6rem;
  //Pull the container up the height of the buttons
  transform: translateY(-350%);

  @media (max-width: 1100px) {
    right: clamp(1.5rem, 5vw, 14rem);
    // Section padding plus menu bar
    bottom: calc(clamp(1.5rem, 5vw, 14rem) + 101px);
  }

  button {
    border: none;
    color: var(--text);
    padding: 0.4rem 0.8rem;
    cursor: pointer;
    width: 7rem;
    height: 7rem;
    transition: all 0.3s ease;
    font-family: inherit;
    font-weight: inherit;
    border: var(--border);
  }

  .main-button {
    box-shadow: var(--box-shadow);
  }

  .theme-button {
    opacity: 0;

    &--light {
      transform: translateY(100%);
      @extend .light;
    }
    &--dark {
      transform: translateY(200%);
      transition-delay: 0.1s;
      @extend .dark;
    }
    &--contrast {
      transform: translateY(300%);
      transition-delay: 0.2s;
      @extend .contrast;
    }
  }
}
</style>
