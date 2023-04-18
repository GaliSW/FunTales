<template>
    <section class="collect_blk">
        <div class="classify" id="class1">
            <div class="classify_title">
                <div>
                    <h1>我的收藏</h1>
                    <span>My bookmark Fairytales</span>
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
import { useCommonStore } from "@/store/common.js"
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref, onUnmounted } from "vue";


//store
const header = useHeaderStore();
const commonStore = useCommonStore();
const router = useRouter();

const canGetNext = ref(true)

onMounted(() => {
    window.addEventListener("scroll", onBottom)
    header.nowPage = 3;
    header.title = "我的收藏";
    commonStore.getCategory(9996, header.title)
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
        await commonStore.addCategory(9996, header.title);
        canGetNext.value = true;
    }
}


const goTales = (id) => {
    router.push({
        name: "Tales",
        query: {
            id: id
        },
    });
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
</script>