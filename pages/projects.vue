<template>
  <section>
    <h1 class="mb-l">My private projects</h1>
    <div class="projects">
      <Card heading="Fußpflege Heike Tandler"></Card>
    </div>
  </section>
</template>

<script>
import Card from "~/components/card.vue";

export default {
  head() {
    return {
      title: "My private projects",
      meta: [
        { name: "description", content: "This is my projects page." },
        {
          name: "keywords",
          content: "private projects, marvin tandler projects"
        }
      ]
    };
  },
  components: { Card }
};
</script>

<style lang="scss">
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 3rem;
}
</style>
