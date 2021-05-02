<template>
  <section class="intro">
    <h1 class="intro__title">
      Marvin Tandler
    </h1>
    <div class="intro__image"></div>
    <div id="intro__particles"></div>
  </section>
</template>

<script>
export default {
  mounted () {
   this.$particles()
  }
}
</script>

<style lang="scss">
.intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media only screen and (max-width: 1100px) {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 2fr 1fr 4fr 1fr;
    padding: 5vw;
  }

  &__title {
    margin-bottom: -3.2rem;
    position: relative;
    z-index: 2;

    @media only screen and (max-width: 1100px) {
      grid-column: 1/-1;
      grid-row: 1/2;
      margin: 0;
    }
  }

  &__image {
    min-height: 32rem;
    width: 56rem;
    background-image: url(../assets/images/another_ocean.jpg);
    margin-left: -8rem;
    box-shadow: $box-shadow-outset-l;

    @media only screen and (max-width: 1100px) {
      grid-column: 1/3;
      grid-row: 2/4;
      margin: 0;
      height: unset;
      width: unset;
    }
  }
}

#intro__particles {
  background-color: rgba(0,0,0,.7);
  height: 318px;
  width: 543px;
  margin-top: -24rem;
  margin-right: -16rem;
  box-shadow: $box-shadow-outset-l;

  @media only screen and (max-width: 1100px) {
    grid-column: 2/-1;
    grid-row: 3/-1;
    width: unset;
    height: unset;
    margin: 0;
  }
}
</style>
