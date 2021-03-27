<template>
    <article class="profile mb-xl">
        <img src="" alt="" class="profile__picture">
        <blockquote class="profile__quotation">
            &ldquo; Super inspiring quotation &rdquo;
        </blockquote>
    </article>
</template>

<script>
export default {
    name: 'Profile'
}
</script>

<style lang="scss">
.profile {
    padding: 4rem;
    box-shadow: $box-shadow-inset;
    border-radius: $border-radius;

    &__quotation {
        font-size: 5rem;
    }
}
</style>