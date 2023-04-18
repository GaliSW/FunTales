<template>
    <main class="thanks"></main>
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";
import { onMounted, onUnmounted } from "vue";

//router
const router = useRouter();

onMounted(() => {
    setTimeout(() => {
        router.push({
            path: "/",
        });
    }, 3000);
    document.body.classList.add("init")
});
onUnmounted(() => {
    document.body.classList.remove("init")
})
</script>
<style>
.init {
    background-image: none;
}

.init main {
    display: flex;
    margin: 0;
}

.init header,
.init footer,
.init .navbar {
    display: none;
}




.thanks {
    background-image: url(https://funday.asia/subscription/ad/FUNDAY_pc_buy_page_popup_welcome2.jpg);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: calc(100vh - 50px);
    width: 100%;
}

@media (max-width: 991px) {
    .thanks {
        background-image: url(https://funday.asia/subscription/ad/FUNDAY_mb_buy_page_popup_welcome2.jpg);
    }
}
</style>