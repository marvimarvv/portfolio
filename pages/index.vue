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

  &__title {
    margin-bottom: -3.2rem;
    position: relative;
    z-index: 2;
  }

  &__image {
    min-height: 32rem;
    width: 56rem;
    background-image: url(../assets/images/another_ocean.jpg);
    margin-left: -8rem;
    box-shadow: $box-shadow-outset-l;

    @media only screen and (max-width:767px) {
      height: 30vh;
      width: 83vw; 
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
}
</style>
