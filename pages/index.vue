<template>
  <section class="intro">
    <div width="100%" height="100%" class="intro__artboard">
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
    <div width="100%" height="100%" id="intro__particles"></div>
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
  data() {
    return {
      title: "Marvin Tandler | 💻",
      description:
        "Come and explore the site of UX/UI Designer and Frontend Developer Marvin Tandler",
      keywords:
        "Marvin Tandler, UX, UI, Frontend Designer, Developer, Designer, Portfolio, Webdesign, Web, Design, Webdesigner, Webdeveloper, Webentwickler, Webentwicklung",
      pageUrl: "https://marvintandler.com/",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.keywords,
        },
        { hid: "og:title", property: "og:title", content: this.title },
        { hid: "og:url", property: "og:url", content: this.pageUrl },
        {
          hid: "og:description",
          property: "og:description",
          content: this.description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://marvintandler.com/marvintandler.png",
        },

        // twitter card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.title,
        },
        { hid: "twitter:url", name: "twitter:url", content: this.pageUrl },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.description,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://marvintandler.com/marvintandler.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.intro {
  display: grid;
  grid-template-columns: 0.5fr 1fr 4fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 4fr 1fr 1fr 1fr;
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

      .contrast-theme & {
        font-size: 14.3px;
      }

      // Correct for font-size differences between Safari and other browsers
      @supports (-webkit-hyphens: none) {
        font-size: 14.6px;
        word-spacing: 0.9px;

        .contrast-theme & {
          font-size: 14px;
          word-spacing: 0.2px;
        }
      }
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

    @media (prefers-reduced-motion: reduce) {
      &--1,
      &--2,
      &--3 {
        animation-play-state: paused;
      }
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

    @media (prefers-reduced-motion: reduce) {
      transition: unset;
    }

    &:focus-visible {
      background-color: var(--accent);
      transform: translateY(-3px);

      @media (prefers-reduced-motion: reduce) {
        transform: unset;
      }
    }

    @media (pointer: fine) and (hover: hover) {
      &:hover {
        background-color: var(--accent);
        transform: translateY(-3px);

        @media (prefers-reduced-motion: reduce) {
          transform: unset;
        }
      }

      &:active {
        transform: translateY(3px);

        @media (prefers-reduced-motion: reduce) {
          transform: unset;
        }
      }
    }

    @media (pointer: coarse) {
      &:active {
        background-color: #ff4331;
        transform: translateY(5px);
        transition-duration: 1s;

        @media (prefers-reduced-motion: reduce) {
          transform: unset;
        }
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
