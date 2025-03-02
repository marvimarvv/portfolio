<template>
  <section>
    <h1 class="mb-l">My private projects</h1>
    <div class="projects">
      <Card
        siteLink="https://3elm.com"
        heading="3elm - design and animation studio"
        alt="Screenshot of the beginning of the website 3elm.com"
        imageLink="/3elm.png"
        :bulletPoints="[
          'In Arabic and English',
          'Built with Next.js',
          'Custom SVG animations',
        ]"
        v-gsap.entrance.slide-bottom
      ></Card>
      <Card
        siteLink="https://www.fusspflegetandler.de"
        heading="Fußpflege Heike Tandler"
        alt="Screenshot of the beginning of the website fusspflegetandler.de"
        imageLink="/fusspflege.png"
        :bulletPoints="[
          'Excellent page speed core',
          'Built with SASS',
          'No JS Framework',
        ]"
        v-gsap.entrance.slide-bottom.delay-200
      ></Card>
      <Card
        siteLink="https://www.dorotalazarski.de"
        heading="Ernährung Dorota Lazarski"
        alt="Screenshot of the beginning of the website dorotalazarski.de"
        imageLink="/ernaehrung.png"
        :bulletPoints="[
          'Excellent page speed core',
          'Built with Wordpress',
          'Scroll animations',
        ]"
        v-gsap.entrance.slide-bottom.delay-400
      ></Card>
    </div>
  </section>
</template>

<script>
import Card from "~/components/card.vue";

export default {
  data() {
    return {
      title: "Marvin Tandler | Projects",
      description: "See what projects I've worked on",
      keywords:
        "private projects, marvin tandler projects, ui design, frontend design",
      pageUrl: "https://marvintandler.com/projects",
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
  components: { Card },
};
</script>

<style lang="scss">
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 3rem;
}
</style>
