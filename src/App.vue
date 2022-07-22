<template>
    <Header></Header>
    <main>
        <Navbar></Navbar>
        <Index></Index>
    </main>
</template>

<script setup>
import Header from '@/components/Layout/Header.vue'
import Navbar from '@/components/Layout/Navbar.vue'
import Index from '@/components/Pages/Index.vue'
import Collect from '@/components/Pages/Collect.vue'
import More from '@/components/Pages/More.vue'
import Tales from '@/components/Pages/Tales.vue'
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&family=Noto+Serif+TC:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&display=swap');


@import "@/assets/scss/style.css";

main {
    height: 100%;
    display: grid;
    grid-template-columns: 200px auto;
}

@media(max-width:1200px) {
    main {
        height: 100%;
        display: block;
    }
}
</style>
