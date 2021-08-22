<template>
  <aside class="profile mb-xxl">
      <img src="../assets/images/marvintandler.png" alt="Photo of Marvin Tandler" class="profile__picture">
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
      width: 100%;
      position: relative;
      aspect-ratio: 1/1;
      border-radius: $border-radius;
      padding: 2rem;
      grid-row: 1/3;
      grid-column: 2/3;
      isolation: isolate; // create new stacking context
      box-shadow: $box-shadow-inset;
      background-color: $color-background;

      &::before {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top left, rgba(254, 173, 166, .6) 0%, $color-background 55%);
      }
    }

    &__quotation-bg {
      padding: 4rem;
      box-shadow: $box-shadow-inset;
      border-radius: $border-radius;
      grid-row: 2/4;
      grid-column: 1/4;
      background-image: radial-gradient($color-primary 0, rgba($color-background, .8) 80%);
      background-size: 80% 80%;
      animation: gradient 7s linear infinite alternate-reverse;

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
