<template>
    <section class="more_blk">
        <div class="classify" id="class1">
            <div class="classify_title">
                <div>
                    <h1>{{ header.title }}</h1>
                    <span>{{ enTitle }}</span>
                </div>
            </div>
            <div class="classify_list">
                <div class="classify_wrapper" v-for="(item, index) in commonStore.categoryList">
                    <img :src="item.Pic" alt="" @click="goTales(item.Id)">
                    <div class="tool_bar">
                        <span class="watch"> {{ item.Clicks }} 次</span>
                        <span class="favorite">
                            <div :class="{ off: item.Bookmark === '0' }" @click="like(item.Id, $event)"></div>
                        </span>
                    </div>
                    <div class="book_name" @click="goTales(item.Id)">
                        <span>
                            {{ item.eTitle }}
                        </span>
                        <span>{{ item.cTitle }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { useHeaderStore } from "@/store/header.js"
import { useRouter, useRoute } from "vue-router";
import { useCommonStore } from "@/store/common.js"
import { onMounted, ref, onUnmounted } from "vue";


//store
const header = useHeaderStore();
const router = useRouter();
const route = useRoute();
const commonStore = useCommonStore();

header.nowPage = 3;

const enTitle = ref("")
const canGetNext = ref(true)

onMounted(() => {
    window.addEventListener("scroll", onBottom)
    commonStore.categoryList = [];
    switch (Number(route.query.id)) {
        case 13:
            header.title = "安徒生童話";
            enTitle.value = "Andersen's Fairytales"
            break;
        case 9:
            header.title = "格林童話";
            enTitle.value = "Grimm's Fairytales"
            break;
        case 10:
            header.title = "伊索寓言";
            enTitle.value = "Aesop's Fables"
            break;
        case 24:
            header.title = "世界名著";
            enTitle.value = "World Literature"
            break;
    }
    commonStore.getCategory(route.query.id, header.title)
})

onUnmounted(() => {
    window.removeEventListener("scroll", onBottom)
})

const onBottom = async () => {
    if (!canGetNext.value) return;
    // if (window.innerWidth < 1200) return;
    const h = document.body.scrollHeight; //網頁的高度
    const c = document.documentElement.scrollTop; //滾動條距離網頁頂部的高度
    const wh = window.innerHeight; //頁面可視化區域高度
    if (Math.ceil(wh + c) >= h) {
        canGetNext.value = false;
        await commonStore.addCategory(route.query.id, header.title);
        canGetNext.value = true;
    }
}


const like = async (id, e) => {
    const el = e.target;
    await commonStore.fnLike(id).then(() => {
        if (el.classList.contains("off")) {
            el.classList.remove("off");
        } else {
            el.classList.add("off");
        }
    });
}


const goTales = (id) => {
    router.push({
        name: "Tales",
        query: {
            id: id
        },
    });
}

</script>