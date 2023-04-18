<template>
    <section class="navbar">
        <div class="navbar_wrapper">
            <ul class="nav_list">
                <li @click="findClass(1, 13)">安徒生童話</li>
                <li @click="findClass(2, 9)">格林童話</li>
                <li @click="findClass(3, 10)">伊索寓言</li>
                <li @click="findClass(4, 24)">世界名著</li>
            </ul>
            <div class="podcast" @click="podcast">
                <img src="@/assets/images/podcast_mb.svg" alt="">
                <img class="play" src="@/assets/images/podcast_play.svg" alt="">
                <span>前往Podcast收聽</span>
            </div>
            <div class="radio" @click="fnRadio">
                <img class="radio_bg" src="@/assets/images/radio_mb.svg" alt="">
                <img class="radio_gif" src="@/assets/images/radio.gif" alt="" v-if="radioStatus">
                <img class="radio_btn" src="@/assets/images/radio_play.svg" alt="" v-if="!radioStatus">
                <img class="radio_btn" src="@/assets/images/radio_pause.svg" alt="" v-if="radioStatus">
                <audio id="Fun_audio" :src="stream"></audio>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from "vue"
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
// data
const emit = defineEmits([]);
const radioStatus = ref(false);
const radio = ref(false);
const stream = ref();


// method
const podcast = () => {
    emit("podcast")
}

const findClass = (index, id) => {
    if (route.name !== "Index") {
        router.push({
            name: "Category",
            query: {
                id: id,
            },
        });
        return;
    }
    const blk = document.getElementById(`class${index}`);
    window.scrollTo({
        top: blk.offsetTop - 50,
        behavior: "smooth"
    })
}


const fnRadio = () => {
    const audio = document.getElementById("Fun_audio");
    if (radioStatus.value) {
        stream.value = "";
        radioStatus.value = false;
        audio.pause();
    } else {
        stream.value = "https://s1.phx.icastcenter.com:9008/stream";
        radioStatus.value = true;
        setTimeout(() => {
            audio.play();
        }, 1000);
    }
}
</script>