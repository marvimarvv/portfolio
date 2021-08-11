<template>
    <section>
        <Profile></Profile>
        <h1 class="mb-l">Professional journey</h1>
        <ol class="timeline">
            <div class="timeline__line">
            </div>
            <span class="timeline__today">today</span>
            <li class="timeline__left timeline__left--1">
                <h2 class="timeline__heading mb-s">ePages - UI Designer</h2>
                <p class="timeline__text">Designing user interfaces for an <strong>e-commerce platform.</strong> Having the merchant's needs in mind and good usability is key here. Also I am working on the storefront enabling the merchants to create <strong>beautiful online shops</strong> with our themes and components.</p>
            </li>
            <li class="timeline__right timeline__right--1">
                <h2 class="timeline__heading mb-s">Dataport - Trainee Web Development</h2>
                <p class="timeline__text">Working for a public company developing <strong>online services for citizens</strong>. Exciting work because it was actively improving people's lives. Tasks included <strong>enhancing the UI</strong> and its components as well as an emphasis on <strong>accessibilty.</strong></p>
            </li>
            <li class="timeline__left timeline__left--2">
                <h2 class="timeline__heading mb-s">MYLILY - Frontend Designer & Shop Admin</h2>
                <p class="timeline__text">Allrounder tech admin position. Working with Shopify to improve the shop's <strong>look & performance.</strong> Implementing <strong>e-commerce</strong> best pratices, managing the company's blog with Wordpress. Extending the visiblity of the online shop by implementing <strong>marketing camaigns & SEO.</strong></p>
            </li>
            <li class="timeline__right timeline__right--2">
                <h2 class="timeline__heading mb-s">FH Westküste - B. Sc. Management & Technology</h2>
                <p class="timeline__text">Started my studies right after school. They were not only <strong>theoretical but also practical.</strong> Did an internship in Austria for Bosch. Eventually I knew where i wanted to go professionally so I <strong>started self teaching myself web development.</strong> This is where my passion for web design began.</p>
            </li>
            <li class="timeline__left timeline__left--3">
                <h2 class="timeline__heading mb-s">Gymnasium Wentorf - Abitur</h2>
                <p class="timeline__text">Gradated in 2015 with the Abitur and an emphasis on languages: English, French & Spanish.</p>
            </li>
        </ol>
    </section>
</template>

<script>
import Profile from "~/components/profile.vue";

export default {

}
</script>

<style lang="scss">
.timeline {
    display: grid;
    grid-template-columns: 1fr min-content 1fr;
    gap: 5rem;
    list-style: none;

   &__today {
      grid-column: 2/3;
      grid-row: 2/8;
    }

    &__line {
        width: 15px;
        grid-column: 2/3;
        grid-row: 2/8;
        justify-self: center;
        margin-top: 4rem;
        border-radius: $border-radius;
        transition: all 0.2s ease;
        box-shadow: $box-shadow-outset-l;
        background-color: $color-background;
    }

    &__left {
      grid-column: 1/2;

      &--1 {
        grid-row: 2/3;
      }

      &--2 {
        grid-row: 4/5;
      }

      &--3 {
        grid-row: 6/7;
      }
    }

    &__right {
      grid-column: 3/4;

      &--1 {
        grid-row: 3/4;
      }

      &--2 {
        grid-row: 5/6;
      }

      &--3 {
        grid-row: 7/8;
      }
    }

    @media only screen and (max-width: 767px) {
      grid-template-columns: min-content 1fr;

      &__today {
        grid-column: 1/2;
        justify-self: left;
      }

      &__line {
        grid-column: 1/2;
      }

      &__left, &__right {
        grid-column: 2/3;
      }
    }
}
</style>
