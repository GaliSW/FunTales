<template>
    <div id="bg">
    </div>
    <Header></Header>
    <Login></Login>
    <main :class="{ block: nowPage == 2 }">
        <Navbar @podcast="podcast" v-if="header.nowPage !== 2"></Navbar>
        <router-view @podcast="podcast"></router-view>
    </main>
    <footer v-if="nowPage !== 2">
        © 2021 Brainstorm Digital Communications Corp. All rights reserved.Privacy Policy
    </footer>
    <Podcast v-if="podcastStatus" @podcast="podcast"></Podcast>
</template>

<script setup>
import Header from '@/components/layout/Header.vue';
import Navbar from '@/components/layout/Navbar.vue';
import Index from '@/components/pages/Index.vue';
import Collect from '@/components/pages/Collect.vue';
import More from '@/components/pages/More.vue';
import Tales from '@/components/pages/Tales.vue';
import Podcast from '@/components/layout/Podcast.vue';
import Login from "./components/LoginModal/Login.vue";
import { ref } from "vue";
import { useHeaderStore } from "@/store/header.js"
import { useUserStore } from "@/store/user.js";
import { onMounted } from "vue";
import { computed } from '@vue/reactivity';
//store
const header = useHeaderStore();
const userStore = useUserStore();
//data
const podcastStatus = ref(false);

const nowPage = computed(() => header.nowPage);

const podcast = () => {
    podcastStatus.value = !podcastStatus.value;
}

onMounted(() => {
    if (sessionStorage.getItem('mid')) {
        userStore.mid = sessionStorage.getItem('mid')
        userStore.cid = sessionStorage.getItem('cid')
        userStore.userPic = sessionStorage.getItem('pic')
        userStore.sex = sessionStorage.getItem('sex')
        userStore.chatUserId = sessionStorage.getItem('chatId')
        userStore.isLogin = true;
    }
})

</script>


<style>
@import "@/assets/scss/style.css";



main {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 200px auto;
    min-height: calc(100vh - 40px);
}

.block {
    display: block;
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
