<template>
  <section class="intro">
    <div class="intro__artboard">
      <div class="intro__circular-text intro__circular-text--1">
        <svg viewBox="0 0 100 100">
          <path d="M0,50 a50,50 0 1,1 0,1z" id="circle"></path>
          <text>
            <textPath xlink:href="#circle">
              Marvin Tandler Marvin Tandler Marvin Tandler
            </textPath>
          </text>
        </svg>
      </div>
      <div class="intro__circular-text intro__circular-text--2">
        <svg viewBox="0 0 100 100">
          <path d="M0,50 a50,50 0 1,1 0,1z" id="circle"></path>
          <text>
            <textPath xlink:href="#circle">
              Marvin Tandler Marvin Tandler Marvin Tandler
            </textPath>
          </text>
        </svg>
      </div>
      <div class="intro__circular-text intro__circular-text--3">
        <svg viewBox="0 0 100 100">
          <path d="M0,50 a50,50 0 1,1 0,1z" id="circle"></path>
          <text>
            <textPath xlink:href="#circle">
              Marvin Tandler Marvin Tandler Marvin Tandler
            </textPath>
          </text>
        </svg>
      </div>
    </div>
    <div id="intro__particles"></div>
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
  // Avoid scrollbar bc of rotating circles on some screens
  overflow: hidden;

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
    border-radius: var(--border-radius);
    border: var(--border);
    background-color: var(--background);
    position: relative;

    @media (prefers-color-scheme: light) {
      background-color: #f5f5f5;
    }
  }

  &__circular-text {
    position: absolute;

    svg {
      display: block;
      overflow: visible;
    }

    text {
      fill: currentColor;
      font-size: 15px;
      word-spacing: 0.8px;
    }

    path {
      fill: none;
    }

    &--1 {
      width: clamp(10rem, 15vw, 30rem);
      height: clamp(10rem, 15vw, 30rem);
      top: -10%;
      left: -10%;
      animation: rotate 20s linear infinite;
    }

    &--2 {
      width: clamp(18rem, 25vw, 45rem);
      height: clamp(18rem, 25vw, 45rem);
      top: 50%;
      left: 30%;
      animation: rotate 20s linear infinite reverse;
    }

    &--3 {
      width: clamp(7rem, 8vw, 20rem);
      height: clamp(7rem, 8vw, 20rem);
      top: 10%;
      left: 90%;
      animation: rotate 20s linear infinite;
    }

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }

  &__link {
    grid-column: 1/-1;
    grid-row: 7/-1;
    justify-self: start;
    align-self: end;
    margin-top: 3rem;
    text-decoration: none;
    padding: 8px 12px;
    color: #201e1e;
    background-color: var(--accent);
    border-radius: var(--border-radius);
    text-transform: capitalize;
    transition: all 0.5s ease;

    &:focus-visible {
      background-color: var(--accent);
      transform: translateY(-3px);
      transition: transform 0.5s;
    }

    @media (pointer: fine) and (hover: hover) {
      &:hover {
        background-color: var(--accent);
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
  overflow: hidden;
  isolation: isolate;
  border-radius: var(--border-radius);
}
</style>
