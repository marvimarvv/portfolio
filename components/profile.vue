<template>
  <aside class="profile mb-xl">
    <nuxt-picture
      src="marvintandler.png"
      alt="Photo of Marvin Tandler"
      class="profile__picture"
      placeholder
    />
    <div class="profile__picture-overlay"></div>
    <div class="profile__quotation-bg"></div>
    <blockquote class="profile__quotation">
      My passion lies where
      <span class="profile__word profile__word--code">code</span> and
      <span class="profile__word profile__word--design">design</span> meet. As a
      frontend designer, I love to make my designs a reality.
    </blockquote>
  </aside>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style lang="scss">
.profile {
  display: grid;
  grid-template-rows: repeat(2, minmax(15rem, 3vw)) min-content;
  grid-template-columns: minmax(3rem, 3vw) 30rem 1fr;
  max-width: 110rem;

  @media only screen and (max-width: 800px) {
    grid-template-rows: minmax(15rem, 3vw) repeat(2, min-content);
    grid-template-columns: 1fr 8fr 1fr;
  }

  &__picture {
    // Create new stacking context to overlay background
    isolation: isolate;
    grid-row: 1/3;
    grid-column: 2/3;
    border-radius: var(--border-radius);
    background-color: var(--background);
    max-height: 40vh;
    aspect-ratio: 1/1;
    border: var(--border);
    filter: grayscale(0.5) contrast(1.3);
    overflow: hidden;

    &-overlay {
      // Create new stacking context to be in same one as the image
      isolation: isolate;
      grid-row: 1/3;
      grid-column: 2/3;
      background-color: var(--brand);
      max-height: 40vh;
      aspect-ratio: 1/1;
      opacity: 0.1;
    }
  }

  &__quotation-bg {
    padding: 4rem;
    border: var(--border);
    border-radius: var(--border-radius);
    grid-row: 2/4;
    grid-column: 1/4;
    background-image: repeating-radial-gradient(
      circle closest-side,
      transparent,
      transparent 50%,
      hsla(var(--hue), calc(var(--saturation) / 4), 70%, 0.6) 75%,
      transparent 75%
    );
    background-size: 100%;
    transition: background-size 3s ease-in-out;

    @keyframes backgroundSize {
      0% {
        background-size: 100%;
      }
      100% {
        background-size: 10%;
      }
    }

    @media (prefers-reduced-motion: no-preference) {
      animation: backgroundSize 30s ease-in-out infinite alternate;
    }
  }

  &__quotation {
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    line-height: 1.4;
    font-weight: var(--font-weight-normal);
    grid-row: 3/4;
    grid-column: 1/4;
    padding: 3rem;
    line-height: 1.3;
    position: relative;
  }

  &__word {
    font-weight: var(--font-weight-bold);
  }
}
</style>
