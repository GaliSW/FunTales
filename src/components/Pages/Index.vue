<template>
    <section>
        <section class="index_top">
            <div class="banner">
                <div class="banner_left">
                    <div class="flag">安徒生童話</div>
                    <img src="@/assets/images/300X400.jpg" alt="">
                </div>
                <div class="banner_center">
                    <h1>The Goose That Laid the Golden Eggs</h1>
                    <div class="banner_para">
                        <p>
                            A man and his wife had the good fortune to possess a goose which laid a golden egg every
                            day.
                            Lucky though they were, they soon began to think they were not getting rich fast enough,and,
                            imagining the bird must be made of gold inside,they decided to kill it in order to secure
                            the
                            whole store of precious
                        </p>
                        <p>
                            A man and his wife had the good fortune to possess a goose which laid a golden egg every
                            day.
                            Lucky though they were, they soon began to think they
                        </p>
                        <p>
                            A man and his wife had the good fortune to possess a goose which laid a golden egg every
                            day.
                            Lucky though they were, they soon began to think they
                        </p>
                        <p>
                            A man and his wife had the good fortune to possess a goose which laid a golden egg every
                            day.
                            Lucky though they were, they soon began to think they
                        </p>
                    </div>
                    <div class="sound">
                        <img src="@/assets/images/sound_on.png" alt="">
                    </div>
                </div>
                <div class="banner_right">
                    <div class="banner_list">
                        <div class="switch_tab">
                            <span :class="{ active: tab == 0 }" @click="tab = 0">熱門排行</span>
                            <span :class="{ active: tab == 1 }" @click="tab = 1">熱門收藏</span>
                        </div>
                        <ul class="tab_list" id="hot_list" v-if="tab == 0">
                            <li>
                                <img src="@/assets/images/list_img.svg" alt="">
                                <div>
                                    <span>The Adventures of Tom Sawyer Chap6-3</span>
                                    <span>湯姆歷險記 第六章 之三</span>
                                </div>
                            </li>
                            <li>
                                <img src="@/assets/images/list_img.svg" alt="">
                                <div>
                                    <span>The Adventures of Tom Sawyer Chap6-3</span>
                                    <span>湯姆歷險記 第六章 之三</span>
                                </div>
                            </li>
                            <li>
                                <img src="@/assets/images/list_img.svg" alt="">
                                <div>
                                    <span>The Adventures of Tom Sawyer Chap6-3</span>
                                    <span>湯姆歷險記 第六章 之三</span>
                                </div>
                            </li>
                            <li>
                                <img src="@/assets/images/list_img.svg" alt="">
                                <div>
                                    <span>The Adventures of Tom Sawyer Chap6-3</span>
                                    <span>湯姆歷險記 第六章 之三</span>
                                </div>
                            </li>
                            <li>
                                <img src="@/assets/images/list_img.svg" alt="">
                                <div>
                                    <span>The Adventures of Tom Sawyer Chap6-3</span>
                                    <span>湯姆歷險記 第六章 之三</span>
                                </div>
                            </li>
                            <li>
                                <img src="@/assets/images/list_img.svg" alt="">
                                <div>
                                    <span>The Adventures of Tom Sawyer Chap6-3</span>
                                    <span>湯姆歷險記 第六章 之三</span>
                                </div>
                            </li>
                        </ul>
                        <ul class="tab_list" id="fav_list" v-else>
                            <li>
                                <img src="@/assets/images/300X400.jpg" alt="">
                                <div>
                                    <span>AAAAA</span>
                                    <span>大大大大大大大大</span>
                                </div>
                            </li>
                            <li>
                                <img src="@/assets/images/300X400.jpg" alt="">
                                <div>
                                    <span>AAAAA</span>
                                    <span>大大大大大大大大</span>
                                </div>
                            </li>
                            <li>
                                <img src="@/assets/images/300X400.jpg" alt="">
                                <div>
                                    <span>AAAAA</span>
                                    <span>大大大大大大大大</span>
                                </div>
                            </li>
                            <li>
                                <img src="@/assets/images/300X400.jpg" alt="">
                                <div>
                                    <span>AAAAA</span>
                                    <span>大大大大大大大大</span>
                                </div>
                            </li>
                            <li>
                                <img src="@/assets/images/300X400.jpg" alt="">
                                <div>
                                    <span>AAAAA</span>
                                    <span>大大大大大大大大</span>
                                </div>
                            </li>
                            <li>
                                <img src="@/assets/images/300X400.jpg" alt="">
                                <div>
                                    <span>AAAAA</span>
                                    <span>大大大大大大大大</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="index_bottom">
            <div class="classify" id="class1">
                <div class="classify_title">
                    <div>
                        <h1>安徒生童話</h1>
                        <span>Andersen's Fairytales</span>
                    </div>
                    <router-link to="/Category" class="more">
                        MORE
                    </router-link>
                </div>
                <div class="classify_list">
                    <img src="@/assets/images/bookself.png" alt="">
                    <ul>
                        <li>
                            <img src="@/assets/images/list_img.svg" alt="" @click="goTales">
                            <div class="tool_bar">
                                <span class="watch">3341次</span>
                                <span class="favorite">
                                    <img src="@/assets/images/heart_off.svg" alt="">
                                </span>
                            </div>
                            <div class="book_name">
                                <span>
                                    The Adventures of Tom Sawyer Chap6-3
                                </span>
                                <span>湯姆歷險記 第六章 之三</span>
                            </div>
                        </li>
                        <li>
                            <img src="@/assets/images/list_img.svg" alt="">
                            <div class="tool_bar">
                                <span class="watch">3341次</span>
                                <span class="favorite">
                                    <img src="@/assets/images/heart_off.svg" alt="">
                                </span>
                            </div>
                            <div class="book_name">
                                <span>
                                    The Adventures of Tom Sawyer Chap6-3
                                </span>
                                <span>湯姆歷險記 第六章 之三</span>
                            </div>
                        </li>
                        <li>
                            <img src="@/assets/images/list_img.svg" alt="">
                            <div class="tool_bar">
                                <span class="watch">3341次</span>
                                <span class="favorite">
                                    <img src="@/assets/images/heart_off.svg" alt="">
                                </span>
                            </div>
                            <div class="book_name">
                                <span>
                                    The Adventures of Tom Sawyer Chap6-3
                                </span>
                                <span>湯姆歷險記 第六章 之三</span>
                            </div>
                        </li>
                        <li>
                            <img src="@/assets/images/list_img.svg" alt="">
                            <div class="tool_bar">
                                <span class="watch">3341次</span>
                                <span class="favorite">
                                    <img src="@/assets/images/heart_off.svg" alt="">
                                </span>
                            </div>
                            <div class="book_name">
                                <span>
                                    The Adventures of Tom Sawyer Chap6-3
                                </span>
                                <span>湯姆歷險記 第六章 之三</span>
                            </div>
                        </li>
                        <li>
                            <img src="@/assets/images/list_img.svg" alt="">
                            <div class="tool_bar">
                                <span class="watch">3341次</span>
                                <span class="favorite">
                                    <img src="@/assets/images/heart_off.svg" alt="">
                                </span>
                            </div>
                            <div class="book_name">
                                <span>
                                    The Adventures of Tom Sawyer Chap6-3
                                </span>
                                <span>湯姆歷險記 第六章 之三</span>
                            </div>
                        </li>
                        <li>
                            <img src="@/assets/images/list_img.svg" alt="">
                            <div class="tool_bar">
                                <span class="watch">3341次</span>
                                <span class="favorite">
                                    <img src="@/assets/images/heart_off.svg" alt="">
                                </span>
                            </div>
                            <div class="book_name">
                                <span>
                                    The Adventures of Tom Sawyer Chap6-3
                                </span>
                                <span>湯姆歷險記 第六章 之三</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="classify" id="class2">
                <div class="classify_title">
                    <div>
                        <h1>格林童話</h1>
                        <span>Grimm's Fairy Tales</span>
                    </div>
                    <router-link to="/Category" class="more">
                        MORE
                    </router-link>
                </div>
                <div class="classify_list">
                    <img src="@/assets/images/bookself.png" alt="">
                    <ul>
                        <li>
                            <img src="@/assets/images/list_img.svg" alt="">
                            <div class="tool_bar">
                                <span class="watch">3341次</span>
                                <span class="favorite">
                                    <img src="@/assets/images/heart_off.svg" alt="">
                                </span>
                            </div>
                            <div class="book_name">
                                <span>
                                    The Adventures of Tom Sawyer Chap6-3
                                </span>
                                <span>湯姆歷險記 第六章 之三</span>
                            </div>
                        </li>
                        <li>
                            <img src="@/assets/images/list_img.svg" alt="">
                            <div class="tool_bar">
                                <span class="watch">3341次</span>
                                <span class="favorite">
                                    <img src="@/assets/images/heart_off.svg" alt="">
                                </span>
                            </div>
                            <div class="book_name">
                                <span>
                                    The Adventures of Tom Sawyer Chap6-3
                                </span>
                                <span>湯姆歷險記 第六章 之三</span>
                            </div>
                        </li>
                        <li>
                            <img src="@/assets/images/list_img.svg" alt="">
                            <div class="tool_bar">
                                <span class="watch">3341次</span>
                                <span class="favorite">
                                    <img src="@/assets/images/heart_off.svg" alt="">
                                </span>
                            </div>
                            <div class="book_name">
                                <span>
                                    The Adventures of Tom Sawyer Chap6-3
                                </span>
                                <span>湯姆歷險記 第六章 之三</span>
                            </div>
                        </li>
                        <li>
                            <img src="@/assets/images/list_img.svg" alt="">
                            <div class="tool_bar">
                                <span class="watch">3341次</span>
                                <span class="favorite">
                                    <img src="@/assets/images/heart_off.svg" alt="">
                                </span>
                            </div>
                            <div class="book_name">
                                <span>
                                    The Adventures of Tom Sawyer Chap6-3
                                </span>
                                <span>湯姆歷險記 第六章 之三</span>
                            </div>
                        </li>
                        <li>
                            <img src="@/assets/images/list_img.svg" alt="">
                            <div class="tool_bar">
                                <span class="watch">3341次</span>
                                <span class="favorite">
                                    <img src="@/assets/images/heart_off.svg" alt="">
                                </span>
                            </div>
                            <div class="book_name">
                                <span>
                                    The Adventures of Tom Sawyer Chap6-3
                                </span>
                                <span>湯姆歷險記 第六章 之三</span>
                            </div>
                        </li>
                        <li>
                            <img src="@/assets/images/list_img.svg" alt="">
                            <div class="tool_bar">
                                <span class="watch">3341次</span>
                                <span class="favorite">
                                    <img src="@/assets/images/heart_off.svg" alt="">
                                </span>
                            </div>
                            <div class="book_name">
                                <span>
                                    The Adventures of Tom Sawyer Chap6-3
                                </span>
                                <span>湯姆歷險記 第六章 之三</span>
                            </div>
                        </li>


                    </ul>
                </div>
            </div>
            <div class="classify" id="class3">
                <div class="classify_title">
                    <div>
                        <h1>伊索寓言</h1>
                        <span>Aesop's Fables</span>
                    </div>
                    <router-link to="/Category" class="more">
                        MORE
                    </router-link>
                </div>
                <div class="classify_list">
                    <img src="@/assets/images/bookself.png" alt="">
                    <ul>
                        <li>
                            <img src="@/assets/images/list_img.svg" alt="">
                            <div class="tool_bar">
                                <span class="watch">3341次</span>
                                <span class="favorite">
                                    <img src="@/assets/images/heart_off.svg" alt="">
                                </span>
                            </div>
                            <div class="book_name">
                                <span>
                                    The Adventures of Tom Sawyer Chap6-3
                                </span>
                                <span>湯姆歷險記 第六章 之三</span>
                            </div>
                        </li>
                        <li>
                            <img src="@/assets/images/list_img.svg" alt="">
                            <div class="tool_bar">
                                <span class="watch">3341次</span>
                                <span class="favorite">
                                    <img src="@/assets/images/heart_off.svg" alt="">
                                </span>
                            </div>
                            <div class="book_name">
                                <span>
                                    The Adventures of Tom Sawyer Chap6-3
                                </span>
                                <span>湯姆歷險記 第六章 之三</span>
                            </div>
                        </li>
                        <li>
                            <img src="@/assets/images/list_img.svg" alt="">
                            <div class="tool_bar">
                                <span class="watch">3341次</span>
                                <span class="favorite">
                                    <img src="@/assets/images/heart_off.svg" alt="">
                                </span>
                            </div>
                            <div class="book_name">
                                <span>
                                    The Adventures of Tom Sawyer Chap6-3
                                </span>
                                <span>湯姆歷險記 第六章 之三</span>
                            </div>
                        </li>
                        <li>
                            <img src="@/assets/images/list_img.svg" alt="">
                            <div class="tool_bar">
                                <span class="watch">3341次</span>
                                <span class="favorite">
                                    <img src="@/assets/images/heart_off.svg" alt="">
                                </span>
                            </div>
                            <div class="book_name">
                                <span>
                                    The Adventures of Tom Sawyer Chap6-3
                                </span>
                                <span>湯姆歷險記 第六章 之三</span>
                            </div>
                        </li>
                        <li>
                            <img src="@/assets/images/list_img.svg" alt="">
                            <div class="tool_bar">
                                <span class="watch">3341次</span>
                                <span class="favorite">
                                    <img src="@/assets/images/heart_off.svg" alt="">
                                </span>
                            </div>
                            <div class="book_name">
                                <span>
                                    The Adventures of Tom Sawyer Chap6-3
                                </span>
                                <span>湯姆歷險記 第六章 之三</span>
                            </div>
                        </li>
                        <li>
                            <img src="@/assets/images/list_img.svg" alt="">
                            <div class="tool_bar">
                                <span class="watch">3341次</span>
                                <span class="favorite">
                                    <img src="@/assets/images/heart_off.svg" alt="">
                                </span>
                            </div>
                            <div class="book_name">
                                <span>
                                    The Adventures of Tom Sawyer Chap6-3
                                </span>
                                <span>湯姆歷險記 第六章 之三</span>
                            </div>
                        </li>


                    </ul>
                </div>
            </div>
            <div class="classify" id="class4">
                <div class="classify_title">
                    <div>
                        <h1>世界名著</h1>
                        <span>World Literature</span>
                    </div>
                    <router-link to="/Category" class="more">
                        MORE
                    </router-link>
                </div>
                <div class="classify_list">
                    <img src="@/assets/images/bookself.png" alt="">
                    <ul>
                        <li>
                            <img src="@/assets/images/list_img.svg" alt="">
                            <div class="tool_bar">
                                <span class="watch">3341次</span>
                                <span class="favorite">
                                    <img src="@/assets/images/heart_off.svg" alt="">
                                </span>
                            </div>
                            <div class="book_name">
                                <span>
                                    The Adventures of Tom Sawyer Chap6-3
                                </span>
                                <span>湯姆歷險記 第六章 之三</span>
                            </div>
                        </li>
                        <li>
                            <img src="@/assets/images/list_img.svg" alt="">
                            <div class="tool_bar">
                                <span class="watch">3341次</span>
                                <span class="favorite">
                                    <img src="@/assets/images/heart_off.svg" alt="">
                                </span>
                            </div>
                            <div class="book_name">
                                <span>
                                    The Adventures of Tom Sawyer Chap6-3
                                </span>
                                <span>湯姆歷險記 第六章 之三</span>
                            </div>
                        </li>
                        <li>
                            <img src="@/assets/images/list_img.svg" alt="">
                            <div class="tool_bar">
                                <span class="watch">3341次</span>
                                <span class="favorite">
                                    <img src="@/assets/images/heart_off.svg" alt="">
                                </span>
                            </div>
                            <div class="book_name">
                                <span>
                                    The Adventures of Tom Sawyer Chap6-3
                                </span>
                                <span>湯姆歷險記 第六章 之三</span>
                            </div>
                        </li>
                        <li>
                            <img src="@/assets/images/list_img.svg" alt="">
                            <div class="tool_bar">
                                <span class="watch">3341次</span>
                                <span class="favorite">
                                    <img src="@/assets/images/heart_off.svg" alt="">
                                </span>
                            </div>
                            <div class="book_name">
                                <span>
                                    The Adventures of Tom Sawyer Chap6-3
                                </span>
                                <span>湯姆歷險記 第六章 之三</span>
                            </div>
                        </li>
                        <li>
                            <img src="@/assets/images/list_img.svg" alt="">
                            <div class="tool_bar">
                                <span class="watch">3341次</span>
                                <span class="favorite">
                                    <img src="@/assets/images/heart_off.svg" alt="">
                                </span>
                            </div>
                            <div class="book_name">
                                <span>
                                    The Adventures of Tom Sawyer Chap6-3
                                </span>
                                <span>湯姆歷險記 第六章 之三</span>
                            </div>
                        </li>
                        <li>
                            <img src="@/assets/images/list_img.svg" alt="">
                            <div class="tool_bar">
                                <span class="watch">3341次</span>
                                <span class="favorite">
                                    <img src="@/assets/images/heart_off.svg" alt="">
                                </span>
                            </div>
                            <div class="book_name">
                                <span>
                                    The Adventures of Tom Sawyer Chap6-3
                                </span>
                                <span>湯姆歷險記 第六章 之三</span>
                            </div>
                        </li>


                    </ul>
                </div>
            </div>
            <div class="classify" id="others">
                <div class="classify_title">
                    <div>
                        <h1>其他</h1>
                        <span>Others</span>
                    </div>
                </div>
                <div class="classify_list">
                    <div class="podcast" @click="podcast">
                        <img src="@/assets/images/podcast_mb.svg" alt="">
                        <div>
                            <img src="@/assets/images/podcast_play.svg" alt="">
                            前往Podcast收聽
                        </div>
                    </div>
                    <div class="radio" @click="radioPlay">
                        <img class="radio_bg" src="@/assets/images/radio_mb.svg" alt="">
                        <img class="radio_gif" src="@/assets/images/radio.gif" alt="" v-if="radioStatus">
                        <div>
                            <img class="radio_btn" src="@/assets/images/radio_play.svg" alt="" v-if="!radioStatus">
                            <img class="radio_btn" src="@/assets/images/radio_pause.svg" alt="" v-if="radioStatus">
                            FUNDAY廣播
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script setup>
import { useHeaderStore } from "@/store/header.js"
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted } from "vue"

//router
const router = useRouter();

//store
const header = useHeaderStore();

// data
const emit = defineEmits([]);
const radioStatus = ref(false);
const tab = ref(0)
header.nowPage = 1;
header.title = "";



// method
const radioPlay = () => {
    radioStatus.value = !radioStatus.value;
}

const podcast = () => {
    emit("podcast")
}

const goTales = () => {
    router.push({
        name: "Tales",
    });
}
</script>