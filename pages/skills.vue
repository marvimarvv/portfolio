<template>
  <section>
    <h1 class="mb-m">My skill set</h1>
    <ul class="skills">
      <li>
        <figure class="skills__icon skills__icon--1">
          <div aria-label="Skills icon with animated patricles">
            <div class="skills__icon--1__particle--1"></div>
            <div class="skills__icon--1__particle--2"></div>
            <div class="skills__icon--1__particle--3"></div>
            <div class="skills__icon--1__particle--4"></div>
            <div class="skills__icon--1__particle--5"></div>
            <div class="skills__icon--1__particle--6"></div>
          </div>
          <figcaption class="skills__text"></figcaption>
        </figure>
      </li>
      <li>
        <figure class="skills__icon skills__icon--2">
          <figcaption class="skills__text"></figcaption>
        </figure>
      </li>
      <li>
        <figure class="skills__icon skills__icon--3">
          <figcaption class="skills__text"></figcaption>
        </figure>
      </li>
      <li>
        <figure class="skills__icon skills__icon--4">
          <figcaption class="skills__text"></figcaption>
        </figure>
      </li>
    </ul>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.skills {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 5rem;

  &__icon--1 {
      height: 30rem;
      aspect-ratio: 1/1;
      background-color: whitesmoke;
      grid-row: 1/2;
      grid-column: 1/2;
  }
}
</style>
