<template>
  <aside class="profile mb-xxl">
      <img src="../assets/images/marvintandler.png" alt="Photo of Marvin Tandler" class="profile__picture">
      <div class="profile__picture-overlay"></div>
      <div class="profile__quotation-bg"></div>
      <blockquote class="profile__quotation">
        &ldquo;My passion lies where code and design meet. As a Frontend Designer, I love to make my designs a reality.&rdquo;
      </blockquote>
  </aside>
</template>

<script>
export default {
    name: 'Profile'
}
</script>

<style lang="scss">
.profile {
    display: grid;
    grid-template-rows: repeat(2,minmax(15rem, 3vw)) min-content;
    grid-template-columns: minmax(3rem, 3vw) 30rem 1fr;

    @media only screen and (max-width: 800px) {
      grid-template-rows: minmax(15rem, 3vw) repeat(2, min-content);
      grid-template-columns: 1fr 8fr 1fr;
    }

    &__picture {
      // Create new stacking context to overlay background
      isolation: isolate;
      grid-row: 1/3;
      grid-column: 2/3;
      border-radius: $border-radius;
      padding: 2rem;
      box-shadow: $box-shadow-inset;
      background-color: $color-background;
      width: 100%;
      aspect-ratio: 1/1;

      &-overlay {
        // Create new stacking context to be in same one as the image
        isolation: isolate;
        grid-row: 1/3;
        grid-column: 2/3;
        background-color: rgba($color-primary, .15);
        padding: 2rem;
        box-shadow: $box-shadow-inset;
        width: 100%;
        aspect-ratio: 1/1;
        border-radius: $border-radius;
      }
    }

    &__quotation-bg {
      padding: 4rem;
      box-shadow: $box-shadow-inset;
      border-radius: $border-radius;
      grid-row: 2/4;
      grid-column: 1/4;
      background-image: radial-gradient($color-primary 0, rgba($color-background, .8) 30%, $color-primary 50%, rgba($color-background, .8) 75%, $color-primary 100%);
      background-size: 400% 400%;
      animation: gradient 35s linear infinite alternate-reverse;

      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 150% 150%;
        }
        100% {
          background-position: 0% 0%;
        }
      }
    }

    &__quotation {
      font-size: clamp(3.5rem, 2vw, 5rem);
      font-weight: 300;
      grid-row: 3/4;
      grid-column: 1/4;
      padding: 3rem;
    }
}
</style>
