<template>
  <section>
    <h1 class="mb-l">My private projects</h1>
    <div class="projects">
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
      ></Card>
    </div>
  </section>
</template>

<script>
import Card from "~/components/card.vue";

export default {
  head() {
    return {
      title: "Marvin Tandler | Projects",
      meta: [
        {
          name: "description",
          content: "This is the site where I list all my projects",
        },
        {
          name: "keywords",
          content:
            "private projects, marvin tandler projects, ui design, frontend design",
        },
        { hid: "description", name: "description", content: this.description },
        { hid: "og:title", property: "og:title", content: this.pageTitle },
        { hid: "og:url", property: "og:url", content: this.pageUrl },
        {
          hid: "og:description",
          property: "og:description",
          content: this.description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: process.env.baseUrl + "marvintandler.png",
        },

        // twitter card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.pageTitle,
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
          content: process.env.baseUrl + "marvintandler.png",
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
