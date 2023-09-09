<template>
  <article class="card">
    <nuxt-picture
      src="/fusspflege.png"
      class="card__image"
      alt="Screenshot Site Fußpflege Heike Tandler"
    />
    <div class="card__body">
      <h2 class="mb-s">{{ heading }}</h2>
      <ul class="card__list mb-l">
        <li v-for="item in items" :key="item.bulletpoint">
          {{ item.bulletpoint }}
        </li>
      </ul>
      <a class="btn" href="https://fusspflegetandler.de" target="blank"
        >Visit site</a
      >
    </div>
  </article>
</template>

<script>
export default {
  name: "Card",
  props: ["heading"],
  data() {
    return {
      items: [
        { bulletpoint: "No CSS Framework" },
        { bulletpoint: "Sass" },
        { bulletpoint: "NPM" },
        { bulletpoint: "Brilliant Page Speed Score" },
        { bulletpoint: "On Scroll Animations" },
      ],
    };
  },
};
</script>

<style lang="scss">
.card {
  position: relative;
  box-shadow: var(--box-shadow-outset-l);
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

  &__body {
    flex: 1 1 auto;
    padding: 1.8rem 1.8rem 0;
  }

  &__list {
    padding-left: 0.5rem;
    list-style-position: inside;
  }
}
</style>
