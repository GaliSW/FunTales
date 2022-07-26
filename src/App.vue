<template>
    <div id="bg">
    </div>
    <Header></Header>
    <main>
        <Navbar @podcast="podcast"></Navbar>
        <router-view></router-view>
    </main>
    <footer>
        © 2021 Brainstorm Digital Communications Corp. All rights reserved.Privacy Policy
    </footer>
    <Podcast v-if="podcastStatus" @podcast="podcast"></Podcast>
</template>

<script setup>
import Header from '@/components/Layout/Header.vue';
import Navbar from '@/components/Layout/Navbar.vue';
import Index from '@/components/Pages/Index.vue';
import Collect from '@/components/Pages/Collect.vue';
import More from '@/components/Pages/More.vue';
import Tales from '@/components/Pages/Tales.vue';
import Podcast from '@/components/Layout/Podcast.vue';
import { ref } from "vue";

const podcastStatus = ref(false);

const podcast = () => {
    podcastStatus.value = !podcastStatus.value;
}

</script>


<style>
@import "@/assets/scss/style.css";



main {
    height: 100%;
    padding-top: 50px;
    display: grid;
    grid-template-columns: 200px auto;
}

@media(max-width:1200px) {
    main {
        height: 100%;
        display: block;
    }
}

footer {
    background-color: #000;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 40px;
}
</style>
