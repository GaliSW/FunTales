<template>
    <section>
        <section class="index_top">
            <div class="banner">
                <div class="banner_left">
                    <div class="flag">{{ commonStore.banner.Category }}</div>
                    <div v-show="skeleton" class="skeleton"></div>
                    <img :src="commonStore.banner.Pic" alt="" class="thumbnail" v-show="!skeleton"
                        @click="goTales(commonStore.banner.Id)">
                </div>
                <div class="banner_center">
                    <h1>{{ commonStore.banner.Title }}</h1>
                    <div class="banner_para">
                        <div v-for="(item, index) in commonStore.banner.data" :data-start="item.clock"
                            :class="{ active: nowParaClass === item.clock }">
                            <span v-for="(el, i) in item.Econtent.split(' ')" @click="fnSearchWord(el, $event)">
                                {{ el.replace("“", "''").replace("”", "''") }}&nbsp;</span>
                        </div>
                    </div>
                    <div></div>
                    <div class="sound" @click="playAudio">
                        <i class="fa-solid fa-circle-pause" v-if="audio"></i>
                        <i class="fa-solid fa-circle-play" v-else></i>
                    </div>
                    <audio :src="commonStore.banner.Video" id="audioFile"></audio>
                </div>
                <div class="banner_right">
                    <div class="banner_list">
                        <div class="switch_tab">
                            <span :class="{ active: tab == 0 }" @click="tab = 0">熱門排行</span>
                            <span :class="{ active: tab == 1 }" @click="tab = 1">熱門收藏</span>
                        </div>
                        <ul class="tab_list" id="hot_list" v-if="tab == 0">
                            <li v-for="(item, index) in commonStore.hotClick" @click="goTales(item.Id, 24)">
                                <img :src="item.Pic" alt="">
                                <div>
                                    <span class="en">{{ item.eTitle }}</span>
                                    <span class="ch">{{ item.cTitle }}</span>
                                    <span class="count_view">{{ item.Clicks }}次</span>
                                </div>
                            </li>
                        </ul>
                        <ul class="tab_list" id="fav_list" v-else>
                            <li v-for="(item, index) in commonStore.hotBook" @click="goTales(item.Id, 24)">
                                <img :src="item.Pic" alt="">
                                <div>
                                    <span class="en">{{ item.eTitle }}</span>
                                    <span class="ch">{{ item.cTitle }}</span>
                                    <span class="count_fav">{{ item.Bookmark }}次</span>
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
                    <div class="more" @click="toCategory(13)">
                        MORE
                    </div>
                </div>
                <div class="classify_list">
                    <img src="@/assets/images/bookself.png" alt="">
                    <ul>
                        <li v-for="(item, index) in commonStore.cateAndersen">
                            <img :src="item.Pic" alt="" @click="goTales(item.Id, 13)">
                            <div class="tool_bar">
                                <span class="watch">{{ item.Clicks }}次</span>
                                <span class="favorite">
                                    <div :class="{ off: item.Bookmark === '0' }" @click="like(item.Id, $event)"></div>
                                </span>
                            </div>
                            <div class="book_name" @click="goTales(item.Id, 13)">
                                <span>
                                    {{ item.eTitle }}
                                </span>
                                <span>{{ item.cTitle }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="classify" id="class2">
                <div class="classify_title">
                    <div>
                        <h1>格林童話</h1>
                        <span>Grimm's Fairytales</span>
                    </div>
                    <div class="more" @click="toCategory(9)">
                        MORE
                    </div>
                </div>
                <div class="classify_list">
                    <img src="@/assets/images/bookself.png" alt="">
                    <ul>
                        <li v-for="(item, index) in commonStore.cateGrimm">
                            <img :src="item.Pic" alt="" @click="goTales(item.Id, 9)">
                            <div class="tool_bar">
                                <span class="watch">{{ item.Clicks }}次</span>
                                <span class="favorite">
                                    <div :class="{ off: item.Bookmark === '0' }" @click="like(item.Id, $event)"></div>
                                </span>
                            </div>
                            <div class="book_name" @click="goTales(item.Id, 9)">
                                <span>
                                    {{ item.eTitle }}
                                </span>
                                <span>{{ item.cTitle }}</span>
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
                    <div class="more" @click="toCategory(10)">
                        MORE
                    </div>
                </div>
                <div class="classify_list">
                    <img src="@/assets/images/bookself.png" alt="">
                    <ul>
                        <li v-for="(item, index) in commonStore.cateAesop">
                            <img :src="item.Pic" alt="" @click="goTales(item.Id, 10)">
                            <div class="tool_bar">
                                <span class="watch">{{ item.Clicks }}次</span>
                                <span class="favorite">
                                    <div :class="{ off: item.Bookmark === '0' }" @click="like(item.Id, $event)"></div>
                                </span>
                            </div>
                            <div class="book_name" @click="goTales(item.Id, 10)">
                                <span>
                                    {{ item.eTitle }}
                                </span>
                                <span>{{ item.cTitle }}</span>
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
                    <div class="more" @click="toCategory(24)">
                        MORE
                    </div>
                </div>
                <div class="classify_list">
                    <img src="@/assets/images/bookself.png" alt="">
                    <ul>
                        <li v-for="(item, index) in commonStore.cateWorld">
                            <img :src="item.Pic" alt="" @click="goTales(item.Id, 24)">
                            <div class="tool_bar">
                                <span class="watch">{{ item.Clicks }}次</span>
                                <span class="favorite">
                                    <div :class="{ off: item.Bookmark === '0' }" @click="like(item.Id, $event)"></div>
                                </span>
                            </div>
                            <div class="book_name" @click="goTales(item.Id, 24)">
                                <span>
                                    {{ item.eTitle }}
                                </span>
                                <span>{{ item.cTitle }}</span>
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
    <Dictionary v-show="DrWordModal" @close-dic="closeDic"></Dictionary>
    <Board></Board>
</template>

<script setup>
import Dictionary from "@/components/layout/Dictionary.vue"
import { useHeaderStore } from "@/store/header.js"
import { useCommonStore } from "@/store/common.js"
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted } from "vue"
import Board from "@/components/layout/Board.vue"

//router
const router = useRouter();

//store
const header = useHeaderStore();
const commonStore = useCommonStore();

// data
const emit = defineEmits([]);
const radioStatus = ref(false);
const tab = ref(0);
const audio = ref(false);
const interval = ref("");
const nowParaClass = ref(0);
const skeleton = ref(true);
const DrWordModal = ref(false);




onMounted(() => {
    commonStore.getIndexData();
    header.nowPage = 1;
    header.title = "";
    const classImg = document.querySelectorAll(".thumbnail");
    classImg.forEach((item) => {
        item.addEventListener("load", () => {
            setTimeout(() => {
                skeleton.value = false;
            }, 500)
        })
    })
})


// method
const radioPlay = () => {
    radioStatus.value = !radioStatus.value;
}

const podcast = () => {
    emit("podcast")
}

const goTales = (id, cateId) => {
    router.push({
        name: "Tales",
        query: {
            id: id,
            category: cateId
        },
    });
}

const playAudio = () => {
    const audioEl = document.getElementById("audioFile");
    if (audio.value) {
        audioEl.pause();
        clearInterval(interval.value)
    } else {
        var eles = document.querySelectorAll("[data-start]");
        var arr = Array.prototype.slice.call(eles);
        audioEl.play();
        interval.value = setInterval(() => {
            const nowTime = audioEl.currentTime.toFixed(0);
            const nowPara = arr.find(x => x.getAttribute("data-start") == nowTime);
            if (nowPara) {
                nowParaClass.value = nowPara.getAttribute("data-start");
                document.querySelector(".banner_para").scrollTo({
                    top: nowPara.offsetTop - 150,
                    behavior: "smooth"
                })
            }
        }, 1000)
    }
    audio.value = !audio.value;
}

const toCategory = (id) => {
    router.push({
        name: "Category",
        query: {
            id: id,
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


//搜尋單字
const fnSearchWord = async (target, evt) => {
    if (document.querySelector(".select") !== null) {
        document.querySelector(".select").classList.remove("select");
    }
    evt.target.classList.add("select");
    const str = target
        .replace(".", "")
        .replace("?", "")
        .replace("!", "")
        .replace(";", "")
        .replace("’", "'")
        .replace(")", "")
        .replace("(", "")
        .replace('"', "")
        .replace("--", "")
        .replace("-", "")
        .replace("；", "")
        .replace("“", "")
        .replace("”", "")
        .replace(",", "");

    const md5str = md5(`${str}|Funday1688`);

    await commonStore.getWords(str, md5str);
    DrWordModal.value = true;
    document.querySelector(".Dr_title .word h3").innerHTML = str;

    const blkHeight = evt.pageY + 430;
    const windowHeight = window.innerHeight;
    const adjust = blkHeight - (blkHeight - windowHeight);
    if (window.innerWidth > 991) {
        document.querySelector(".DrWord").style.left = `${evt.pageX - 300
            }px`;
        if (blkHeight < windowHeight) {
            document.querySelector(".DrWord").style.top = `${evt.pageY + 20
                }px`;
        } else {
            document.querySelector(".DrWord").style.top =
                adjust - 420 + "px";
        }
    }
}

const closeDic = () => {
    DrWordModal.value = false;
    if (document.querySelector(".select") !== null) {
        document.querySelector(".select").classList.remove("select");
    }
}
</script>