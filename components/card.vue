<template>
  <article class="card">
    <a class="card__link" :href="siteLink" target="blank">
      <nuxt-picture
        :src="imageLink"
        class="card__image"
        :alt="alt"
        placeholder
      />
      <div class="card__body">
        <h2 class="card__heading">{{ heading }}</h2>
        <ul class="card__list">
          <li
            class="card__list-item"
            v-for="point in bulletPoints"
            :key="point"
          >
            {{ point }}
          </li>
        </ul>
        <a class="card__btn btn" :href="siteLink" target="blank">Visit site</a>
      </div>
    </a>
  </article>
</template>

<script>
export default {
  name: "Card",
  props: {
    heading: {
      type: String,
      default: "Default Heading",
    },
    imageLink: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "Default Alt Text",
    },
    bulletPoints: { type: Array, default: () => [] },
    siteLink: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.card {
  position: relative;
  border: var(--border);
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border-radius: var(--border-radius);

  img {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    aspect-ratio: 16/9;
    border-bottom: var(--border);
  }

  &__link {
    height: 100%;
    display: flex;
    flex-direction: column;

    @media (pointer: fine) and (hover: hover) {
      &:hover {
        .btn {
          color: var(--background);
          background-color: var(--text);
          transition: all 0.5s ease;

          @media (prefers-reduced-motion: reduce) {
            transition: unset;
          }
        }
      }
    }
  }

  &__body {
    padding: 1.8rem 1.8rem 0;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  &__list {
    margin-top: auto;
    margin-bottom: 1.8rem;
    padding-left: 2rem;
    list-style-type: square;
  }
}
</style>
