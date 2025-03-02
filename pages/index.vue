<template>
  <section class="intro">
    <span class="intro__name intro__name--01">
      <div v-gsap.entrance.slide-bottom>MAR</div>
      <div v-gsap.entrance.slide-bottom.delay-200>VIN</div>
    </span>
    <span
      class="intro__name intro__name--02"
      v-gsap.entrance.slide-bottom.delay-400
    >
      TAND</span
    >
    <span
      class="intro__name intro__name--03"
      v-gsap.entrance.slide-bottom.delay-600
    >
      LER
      <div width="100%" height="100%" class="intro__artboard"></div>
    </span>
    <div width="100%" height="100%" id="intro__particles"></div>
    <div class="intro__particles-placeholder"></div>
    <nuxt-link class="intro__link" to="projects">
      <span class="intro__link-text"> View my projects </span>
    </nuxt-link>
    <NuxtMarquee autoFill="true" pauseOnHover="true" speed="50" class="marquee">
      <a href="mailto:marvin.tandler@outlook.com">
        contact me marvin.tandler@outlook.com&nbsp;
      </a>
    </NuxtMarquee>
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
        "Come and explore the site of UX/UI Designer and Frontend Developer Marvin Tandler. Here you can find his portfolio and projects.",
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
.marquee {
  font-style: italic;
  overflow-y: clip;
  grid-row: 2 / 3;
  grid-column: 4 / -1;
}

.intro {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(8, 1fr);
  overflow: hidden;
  /* Reduce intial layout shift */
  width: 100%;
  height: 100%;
  align-self: center;

  @media (min-width: 1101px) {
    padding-top: 0;
    padding-bottom: 6rem;
  }

  &__name {
    font-size: clamp(7rem, 14vw, 24rem);
    line-height: 1;
    color: var(--heading-color);

    &--01 {
      grid-column: 1/4;
      grid-row: 1/3;

      @media (max-width: 600px) {
        grid-row: 1/4;
      }
    }

    &--02 {
      grid-column: 4/8;
      grid-row: 4/6;
      align-self: end;
      z-index: 1;
      pointer-events: none;
    }

    &--03 {
      grid-column: 4/8;
      grid-row: 6/8;
      white-space: nowrap;
      z-index: 1;
      pointer-events: none;
    }
  }

  &__artboard {
    display: inline-block;
    width: 1.9ex;
    aspect-ratio: 1 / 1;
    border-radius: var(--border-radius);
    border: var(--border);
    position: relative;
    background-size: 3px 3px;
    background-image: linear-gradient(
      45deg,
      var(--text) 25%,
      transparent 25%,
      transparent 75%,
      #000 75%,
      #000
    );
    animation: background-size alternate 7s linear infinite;
    margin-left: calc(max(2vw, 15px) * -1);

    @media (prefers-reduced-motion: reduce) {
      animation-play-state: paused;
    }

    @keyframes background-size {
      0% {
        background-size: 1px 1px;
      }
      100% {
        background-size: 3px 3px;
      }
    }
  }

  &__link {
    grid-column: 1/-1;
    grid-row: 8/9;
    justify-self: start;
    align-self: end;
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
  grid-column: 1/5;
  grid-row: 2/8;
  overflow: hidden;
  isolation: isolate;
  border-radius: var(--border-radius);
  width: 100%;
  height: 100%;

  @media (max-width: 600px) {
    grid-column: 2/7;
  }
}

.intro__particles-placeholder {
  grid-column: 1/5;
  grid-row: 2/8;
  overflow: hidden;
  isolation: isolate;
  border-radius: var(--border-radius);
  width: 100%;
  height: 100%;

  @media (max-width: 600px) {
    grid-column: 2/7;
  }
}
</style>
