<template>
    <article class="card">
        <img height="360" width="640" src="../assets/images/fusspflege.png" class="card__image" alt="Screenshot Seite Fußpflege Heike Tandler">
        <div class="card__body">
            <h2 class="mb-s">{{heading}}</h2>
            <ul class="card__list mb-l">
                <li v-for="item in items" :key="item.bulletpoint">
                    {{item.bulletpoint}}
                </li>
            </ul>
            <a class="btn" href="https://fusspflegetandler.de" target="blank">Visit site</a>
        </div>
    </article>
</template>

<script>
export default {
    name: 'Card',
    props: ['heading'],
    data (){
        return {
            items: [
            { bulletpoint: 'No CSS Framework' },
            { bulletpoint: 'Sass' },
            { bulletpoint: 'NPM' },
            { bulletpoint: 'Brilliant Page Speed Score' },
            { bulletpoint: 'On Scroll Animations' }
            ]
        }
    }
}
</script>


<style lang="scss">
.card {
    position: relative;
    box-shadow: $box-shadow-outset-l;
    transition: all 0.2s ease;
    background-color: #e6e7ee;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border: 0.0625rem solid #D1D9E6;
    border-radius: $border-radius;

    &__image {
        max-width: 100%;
        height: auto;
        border-top-left-radius: 0.55rem;
        border-top-right-radius: 0.55rem;
    }

    &__body {
        flex: 1 1 auto;
        padding: 3rem 1.5rem;
    }

    &__list {
        padding-left: .5rem;
        list-style-position: inside;
    }
}
</style>
