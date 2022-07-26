<template>
    <div class="podcast_pop">
        <div class="pop_close" @click="podcast">
            <img src="@/assets/images/share_close.svg" alt="" />
        </div>
        <h1>前往收聽 Podcast</h1>
        <h2>
            二十一世紀的生活壓力大，事業、家庭兩頭燒，在這個亂世之中，該如何找到身心的平衡與健康呢？
        </h2>
        <div class="link_blk">
            <a target="_blank"
                href="https://podcasts.apple.com/ee/podcast/funday-%E6%96%B0%E7%94%9F%E6%B4%BB/id1577312960">
                <img src="@/assets/images/applePodcast.svg" alt="" />ApplePodcast
            </a>
            <a target="_blank" href="https://player.soundon.fm/p/c7cf00a8-6987-4144-bc86-ca558d03bab2">
                <img src="@/assets/images/soundon.svg" alt="" />SoundOn
            </a>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
const emit = defineEmits(['podcast'])
const podcast = () => {
    emit("podcast")
}

</script>