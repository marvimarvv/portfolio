<template>
  <article class="card">
    <nuxt-picture :src="link" class="card__image" :alt="alt" />
    <div class="card__body">
      <h2 class="card__heading">{{ heading }}</h2>
      <a class="btn" href="https://fusspflegetandler.de" target="blank"
        >Visit site</a
      >
    </div>
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
    link: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "Default Alt Text",
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
  }

  &__heading {
    margin-bottom: 1.8rem;
  }

  &__body {
    flex: 1 1 auto;
    padding: 1.8rem 1.8rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
