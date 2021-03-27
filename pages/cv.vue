<template>
    <section>
        <Profile></Profile>
        <h1 class="mb-l">Professional journey</h1>
        <div class="timeline">
            <div class="timeline__line">
            </div>
            <div class="left left--1" data-aos="fade-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000">
                <h2 class="timeline__heading">ePages - UI Design</h2>
                <p class="timeline__text">I'm baby lumbersexual actually hot chicken quinoa copper mug biodiesel banjo. Live-edge mustache PBR&B cred, man braid polaroid retro craft beer before they sold out street art hexagon drinking vinegar 8-bit. IPhone stumptown offal, fanny pack green juice mumblecore neutra williamsburg ennui. Affogato thundercats jianbing edison bulb hexagon microdosing gentrify you probably haven't heard of them occupy keffiyeh asymmetrical etsy cloud bread cliche.</p>
            </div>
            <div class="right right--1" data-aos="fade-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000">
                <h2 class="timeline__heading">Dataport - Trainee Web Development</h2>
                <p class="timeline__text">I'm baby lumbersexual actually hot chicken quinoa copper mug biodiesel banjo. Live-edge mustache PBR&B cred, man braid polaroid retro craft beer before they sold out street art hexagon drinking vinegar 8-bit. IPhone stumptown offal, fanny pack green juice mumblecore neutra williamsburg ennui. Affogato thundercats jianbing edison bulb hexagon microdosing gentrify you probably haven't heard of them occupy keffiyeh asymmetrical etsy cloud bread cliche.</p>
            </div>
            <div class="left left--2" data-aos="fade-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000">
                <h2 class="timeline__heading">MYLILY - Frontend Design & Shop Admin</h2>
                <p class="timeline__text">I'm baby lumbersexual actually hot chicken quinoa copper mug biodiesel banjo. Live-edge mustache PBR&B cred, man braid polaroid retro craft beer before they sold out street art hexagon drinking vinegar 8-bit. IPhone stumptown offal, fanny pack green juice mumblecore neutra williamsburg ennui. Affogato thundercats jianbing edison bulb hexagon microdosing gentrify you probably haven't heard of them occupy keffiyeh asymmetrical etsy cloud bread cliche.</p>
            </div>
            <div data-aos="fade-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" class="right right--2">
                <h2 class="timeline__heading">FH Westküste - B. Sc. Management & Technology</h2>
                <p class="timeline__text">I'm baby lumbersexual actually hot chicken quinoa copper mug biodiesel banjo. Live-edge mustache PBR&B cred, man braid polaroid retro craft beer before they sold out street art hexagon drinking vinegar 8-bit. IPhone stumptown offal, fanny pack green juice mumblecore neutra williamsburg ennui. Affogato thundercats jianbing edison bulb hexagon microdosing gentrify you probably haven't heard of them occupy keffiyeh asymmetrical etsy cloud bread cliche.</p>
            </div>
            <div class="left left--3" data-aos="fade-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000">
                <h2 class="timeline__heading">Gymnasium Wentorf - Abitur</h2>
                <p class="timeline__text">I'm baby lumbersexual actually hot chicken quinoa copper mug biodiesel banjo. Live-edge mustache PBR&B cred, man braid polaroid retro craft beer before they sold out street art hexagon drinking vinegar 8-bit. IPhone stumptown offal, fanny pack green juice mumblecore neutra williamsburg ennui. Affogato thundercats jianbing edison bulb hexagon microdosing gentrify you probably haven't heard of them occupy keffiyeh asymmetrical etsy cloud bread cliche.</p>
            </div>
        </div>   
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
    gap: 30px;
}

.timeline__line {
    width: 15px;
    grid-column: 2/3;
    grid-row: 1/7;
    border-radius: $border-radius;
    transition: all 0.2s ease;
    box-shadow: $box-shadow-outset-l;
    background-color: $color-background;
}

.left {
    grid-column: 1/2;
}

.left--1 {
    grid-row: 1/2;
}

.left--2 {
    grid-row: 3/4;
}

.left--3 {
    grid-row: 5/6;
} 

.right {
    grid-column: 3/4;
}

.right--1 {
    grid-row: 2/3;
}

.right--2 {
    grid-row: 4/5;
}

.right--3 {
    grid-row: 6/7;
} 
</style>