<template>
  <section>
    <h1 class="mb-m">My skill set</h1>
    <ul class="skills">
      <li class="skills__list-item">
        <figure class="skills__row">
          <div class="skills__icon skills__icon--1" aria-label="Skills icon with animated patricles">
            <div class="skills__icon__particle skills__icon--1__particle--1 animate fade delay-03"></div>
            <div class="skills__icon__particle skills__icon--1__particle--2 animate fade delay-18"></div>
            <div class="skills__icon__particle skills__icon--1__particle--3 animate fade delay-36"></div>
            <div class="skills__icon__particle skills__icon--1__particle--4 animate fade delay-24"></div>
            <div class="skills__icon__particle skills__icon--1__particle--5 animate fade delay-09"></div>
            <div class="skills__icon__particle skills__icon--1__particle--6 animate fade delay-42"></div>
            <div class="skills__icon__particle skills__icon--1__particle--7 animate fade delay-12"></div>
            <div class="skills__icon__particle skills__icon--1__particle--8 animate fade delay-06"></div>
          </div>
          <figcaption class="skills__text">
            <h2 class="skills__heading mb-s">HTML & CSS - Standards for the win!</h2>
            <p class="skills__paragraph">
              I have a passion for writing semantic HTML and modern CSS. Writing clean, short and understandable code with the standards at our hands has some
              serious benefits for various reasons. One of them is improving accessibility so that the experiences we create are inclusive and take into account people's different abilities.
              Another advantage is that the more standard compliant you are working, the less you make yourself dependent on third party solutions. Plus, your code is executable on all the major web platforms
              (as you know that is not always the case but we are getting there). There are still so many more reasons like SEO, maintainability and so on...
            </p>
          </figcaption>
        </figure>
      </li>
      <li class="skills__list-item">
          <figure class="skills__row">
            <div class="skills__icon skills__icon--2" aria-label="Skills icon with animated patricles">
              <div class="skills__icon__particle skills__icon--1__particle--1 animate fade delay-03"></div>
            </div>
            <figcaption class="skills__text">
              <h2 class="skills__heading mb-s">Designing</h2>
              <p class="skills__paragraph">
                For me, designing is about a lot of different aspects of the final product. Having aesthetically pleasing visuals, delighting the user
                and guiding him are the key elements that drive my designs. Design is not just about how it looks though. To have a satisfying user experience, it is important to
                implement known behavioral patterns into the product and to not overburden the user with complexity.
              </p>
            </figcaption>
          </figure>
      </li>
      <li class="skills__list-item">
        <div class="skills__icon skills__icon--3" aria-label="Skills icon with animated patricles">
          <figure class="skills__row">
            <figcaption class="skills__text">
              <h2 class="skills__heading mb-s">Jamstack & Wordpress</h2>
              <p class="skills__paragraph">
                As a frontend designer, I am also keen on implementing my designs and make them a reality. For implementation I like to try out
                things to see if they fit my workflow and deliver clean code & performance. I have experience in working with Wordpress and currently I am trying out Nuxt.js by building
                this website. In the future I am looking forward to get more into design systems and Next.js.
              </p>
            </figcaption>
          </figure>
        </div>
      </li><li class="skills__list-item">
        <div class="skills__icon skills__icon--4" aria-label="Skills icon with animated patricles">
          <figure class="skills__row">
            <figcaption class="skills__text">
              <h2 class="skills__heading mb-s">Accessibility</h2>
              <p class="skills__paragraph">
                Being the one that is creating the user experience also means making sure that everyone gets to enjoy it no matter his/her/their abilities.
                Creating the most fanciest website has no use if you limit the audience that is able to use it. This is why it is important to me to use techniques
                that make sure we don't exclude people from digital experiences. Paying attention to contrast, writing semantic HTML and making sure the keyboard navigation is working
                as it should are a few things that can already cover a lot of the do's there are for creating inclusive experiences but are often overlooked.
              </p>
            </figcaption>
          </figure>
        </div>
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
  display: flex;
  flex-direction: column;

  &__list-item {
    list-style: none;
  }

  &__row {
    display: flex;
    gap: 6rem;

    @media (max-width: 767px) {
      flex-direction: column;
    }
  }

  &__icon {
    flex-basis: 33.3%;
    position: relative;
    min-height: 30vh;
    aspect-ratio: 1/1;
    align-self: flex-start;

    @media (max-width: 767px) {
      align-self: center;
    }

    &__particle {
      position: absolute;
      aspect-ratio: 1/1;
      border-radius: 50%;
      background-color: $color-primary;
      filter: blur(15px);
    }

    &--1__particle {
      &--1 {
        top: 5%;
        left: 5%;
        width: 15%;
      }

      &--2 {
        top: 71%;
        left: 35%;
        width: 15%;
      }

      &--3 {
        top: 81%;
        left: 75%;
        width: 5%;
      }

      &--4 {
        top: 41%;
        left: 80%;
        width: 25%;
      }

      &--5 {
        top: 61%;
        left: 55%;
        width: 8%;
      }

      &--6 {
        top: 11%;
        left: 65%;
        width: 12%;
      }

      &--7 {
        top: 11%;
        left: 25%;
        width: 14%;
      }

      &--8 {
        top: 71%;
        left: 5%;
        width: 15%;
      }
    }
  }

  &__text {
    flex-basis: 75ch;
    flex-shrink: 1;
  }

  &__paragraph {
    &::first-letter {
      font-size: 300%;
      line-height: 100%;
      font-family: monospace;
      color: $color-primary;
    }
  }
}


/* ==========================================================================
Animation System by Neale Van Fleet from Rogue Amoeba (modified) https://css-tricks.com/a-handy-little-system-for-animated-entrances-in-css/
========================================================================== */
.animate {
  animation-duration: 3s;
  animation-delay: 0.5s;
  animation-name: animate-fade;
  animation-timing-function: cubic-bezier(.26, .53, .74, 1.48);
  animation-fill-mode: backwards;
}

/* Fade In */
.animate.fade {
  animation-name: animate-fade;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes animate-fade {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

/* Animation Delays */
.delay-03 {
  animation-delay: 0.3s;
}
.delay-06 {
  animation-delay: 0.6s;
}
.delay-09 {
  animation-delay: 0.9s;
}
.delay-12 {
  animation-delay: 1.2s;
}
.delay-15 {
  animation-delay: 1.5;
}
.delay-18 {
  animation-delay: 1.8s;
}
.delay-21 {
  animation-delay: 2.1s;
}
.delay-24 {
  animation-delay: 2.4s;
}
.delay-27 {
  animation-delay: 2.7s;
}
.delay-30 {
  animation-delay: 3s;
}
.delay-33 {
  animation-delay: 3.3s;
}
.delay-36 {
  animation-delay: 3.6s;
}
.delay-39 {
  animation-delay: 3.9s;
}
.delay-42 {
  animation-delay: 4.2s;
}
.delay-45 {
  animation-delay: 4.5s;
}

@media screen and (prefers-reduced-motion: reduce) {
  .animate {
    animation: none !important;
  }
}
</style>
