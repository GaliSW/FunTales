<template>
    <section class="tales_top_pc">
        <div class="tales_book">
            <div class="tales_img">
                <img :src="commonStore.talesInfo.photo_url" alt="">
            </div>
            <div class="tales_content">
                <div class="classify">
                    <img src="@/assets/images/tale_icon.png" alt="">
                    <span>{{ commonStore.talesInfo.Category_cName }}&nbsp;{{ eName }}</span>
                </div>
                <div class="title">
                    <span class="en">{{ commonStore.talesInfo.eTitle }}</span>
                    <span class="ch">{{ commonStore.talesInfo.cTitle }}</span>
                </div>
                <div class="content" id="font_para">
                    <div v-for="(item, index) in commonStore.talesContent" :data-start="item.clock"
                        :class="{ active: nowParaClass === item.clock }">
                        <span v-for="(el, i) in item.Econtent.split(' ')" @click="fnSearchWord(el, $event)">
                            {{ el.replace("“", "''").replace("”", "''") }}&nbsp;</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="tales_bar">
            <div class="time_bar">
                <span>{{ time }}</span>
                <div>
                    <div class="progress" :style="nowProgress"></div>
                </div>
                <span>{{ endTime }}</span>
            </div>
            <div class="control_bar">
                <div class="left" @click="fontChange">字型切換</div>
                <div class="center">
                    <img src="@/assets/images/prev.svg" alt="" @click="goTales(commonStore.talesOthers.previous_id)">
                    <div @click="playAudio(commonStore.talesInfo.indx)">
                        <i class="fa-sharp fa-solid fa-circle-pause" v-if="audio"></i>
                        <i class="fa-sharp fa-solid fa-circle-play" v-else></i>
                    </div>
                    <img src="@/assets/images/next.svg" alt="" @click="goTales(commonStore.talesOthers.next_id)">
                </div>
                <audio :src="commonStore.talesInfo.urls" id="audioFile"></audio>
                <div class="right">
                    <div class="like" @click="toplike(commonStore.talesInfo.indx)">
                        <div id="favorite" :class="{ off: commonStore.talesInfo.Bookmark === '0' }"></div>
                        <span>收藏</span>
                    </div>
                    <div @click="share">
                        <img src="@/assets/images/share.svg" alt="">
                        <span>分享</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="tales_bottom_pc">
        <div class="others" v-if="commonStore.otherEpisode.length >= 1">
            <div class="title">
                <div>
                    <h1>其他集數</h1>
                    <span>more</span>
                </div>
            </div>
            <div class="list">
                <img src="@/assets/images/bookself.png" alt="">
                <ul>
                    <li v-for="(item, index) in commonStore.otherEpisode">
                        <img :src="item.Pic" alt="" @click="goTales(item.Id)">
                        <div class="tool_bar">
                            <span class="watch">
                                {{ item.Clicks }}
                                次
                            </span>
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
                    </li>
                </ul>
            </div>
        </div>
        <div class="others">
            <div class="title">
                <div>
                    <h1>其他故事</h1>
                    <span>others</span>
                </div>
            </div>
            <div class="list">
                <img src="@/assets/images/bookself.png" alt="">
                <ul>
                    <li v-for="(item, index) in commonStore.otherStory">
                        <img :src="item.Pic" alt="" @click="goTales(item.Id)">
                        <div class="tool_bar">
                            <span class="watch">
                                {{ item.Clicks }}
                                次
                            </span>
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
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="tales_top_mb">
        <div class="title">
            <span class="en">{{ commonStore.talesInfo.eTitle }}</span>
            <span class="ch">{{ commonStore.talesInfo.cTitle }}</span>
        </div>
        <div class="book">
            <img :src="commonStore.talesInfo.photo_url" alt="">
        </div>
        <div class="content">
            <div v-for="(item, index) in commonStore.talesContent" :data-start="item.clock"
                :class="{ active: nowParaClass === item.clock }">
                <span v-for="(el, i) in item.Econtent.split(' ')" @click="fnSearchWord(el, $event)">
                    {{ el.replace("“", "''").replace("”", "''") }}&nbsp;</span>
            </div>
        </div>
    </section>
    <section class="tool_bar_mb">
        <div class="like" @click="toplike(commonStore.talesInfo.indx)">
            <div id="favorite_mb" :class="{ off: commonStore.talesInfo.Bookmark === '0' }"></div>
        </div>
        <div>
            <img src="@/assets/images/prev.svg" alt="" @click="goTales(commonStore.talesOthers.previous_id)">
            <div @click="playAudio(commonStore.talesInfo.indx)">
                <i class="fa-sharp fa-solid fa-circle-pause" v-if="audio"></i>
                <i class="fa-sharp fa-solid fa-circle-play" v-else></i>
            </div>
            <img src="@/assets/images/next.svg" alt="" @click="goTales(commonStore.talesOthers.next_id)">
        </div>
        <img src="@/assets/images/share.svg" alt="" @click="share">
    </section>
    <div class="share_blk" v-if="shareStatus">
        <div class="share_top">
            <span>分享</span>
            <img src="@/assets/images/share_close.svg" alt="close" style="cursor: pointer" @click="share" />
        </div>
        <div class="share_center">
            <div class="share_wrapper">
                <div class="copy_icon">
                    <img @click="copyURL" src="@/assets/images/copy.svg" alt="" />
                    <p>複製連結</p>
                </div>
                <div>
                    <a :href="shareUrl.line" title="FunMusic" target="_blank"><img src="@/assets/images/Line.svg"
                            alt="" /></a>
                    <p>Line</p>
                </div>
                <div>
                    <a :href="shareUrl.fb"><img src="@/assets/images/FB.svg" alt="" /></a>
                    <p>FB</p>
                </div>
                <div>
                    <a :href="shareUrl.gmail" target="_blank"><img src="@/assets/images/Gmail.svg" alt="" /></a>
                    <p>Gmail</p>
                </div>
                <div>
                    <a :href="shareUrl.linkedin" target="_blank" title="Share on LinkedIn"><img
                            src="@/assets/images/Linkedin.svg" alt="" /></a>
                    <p>Linkedin</p>
                </div>
            </div>
        </div>
        <div class="share_bottom">
            <input id="copyUrl" type="text" :value="URL" readonly unselectable="on" />
            <span @click="copyURL">複製</span>
        </div>
    </div>
    <Dictionary v-show="DrWordModal" @close-dic="closeDic"></Dictionary>
</template>
<script setup>
import Dictionary from "@/components/layout/Dictionary.vue"
import { useHeaderStore } from "@/store/header.js"
import { useCommonStore } from "@/store/common.js"
import { useUserStore } from "@/store/user";
import { loginStore } from "@/store/login";
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref, computed, reactive, onUnmounted, onBeforeMount } from "vue";


//store
const header = useHeaderStore();
const router = useRouter();
const route = useRoute();
const commonStore = useCommonStore();
const loginStatus = loginStore();
const user = useUserStore();

//data
const shareStatus = ref(false);
const URL = ref(window.location.href);
header.nowPage = 2;
header.title = "";
const canplay = ref(false);
const audio = ref(false);
const interval = ref("");
const nowParaClass = ref(0);
const nowProgress = ref("width:0");
const time = ref("00:00");
const endTime = ref("00:00")
const DrWordModal = ref(false);
const shareUrl = reactive({
    fb: "",
    line: "",
    gmail: "",
    linkedin: ""
})

const eName = computed(() => {
    switch (commonStore.talesInfo.Category_id) {
        case '13':
            return "Andersen's Fairytales"
        case '9':
            return "Grimm's Fairytales"
        case '10':
            return "Aesop's Fables"
        case '24':
            return "World Literature"
    }
})

onMounted(() => {
    commonStore.getTalesData(route.query.id)
    commonStore.isCount = false;
    if (location.href.indexOf("ADid") > -1) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const ADid = urlParams.get("ADid");
        if (ADid) {
            sessionStorage.setItem("ADid", ADid);
        }
    } else {
        if (window.innerWidth > 1200) {
            const audio = document.getElementById("audioFile");
            audio.addEventListener("canplaythrough", firstLoad)
        }
    }
})

onUnmounted(() => {
    const audio = document.getElementById("audioFile");
    audio.removeEventListener("canplay", firstLoad)
})

const firstLoad = () => {
    if (canplay.value) return;
    const audio = document.getElementById("audioFile");
    const m = Math.floor((audio.duration) / 60);
    const s = Math.ceil((audio.duration) % 60);
    const minute = m > 9 ? m : `0${m}`;
    const second = s > 9 ? s : `0${s}`;
    endTime.value = `${minute}:${second}`;
    playAudio(commonStore.talesInfo.indx)
    audio.value = true;
    canplay.value = true
}

const fontChange = () => {
    const para = document.getElementById("font_para");
    if (para.classList.contains("font")) {
        para.classList.remove("font");
    } else {
        para.classList.add("font");
    }
}

const share = () => {
    shareStatus.value = !shareStatus.value;
    const path = window.location.href;
    shareUrl.fb = `javascript: void(window.open('http://www.facebook.com/share.php?u='.concat(encodeURIComponent('${path}'))));`;
    //*Line
    shareUrl.line = `https://social-plugins.line.me/lineit/share?url=${path}`;
    //*email
    shareUrl.gmail = `mailto:?to=&subject=FunMusic&body=${path}`;
    //*Linkedin
    shareUrl.linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${path}`;
}

const copyURL = () => {
    var url = document.getElementById("copyUrl");
    url.select();
    document.execCommand("copy");
}

const playAudio = (id) => {
    if (!user.isLogin) {
        loginStatus.$patch({
            status: true,
        });
        return;
    }
    if (!commonStore.isCount) {
        commonStore.fnCount(id);
    }
    const audioEl = document.getElementById("audioFile");
    if (audio.value) {
        audioEl.pause();
        audio.value = false;
        clearInterval(interval.value)
    } else {
        var eles = document.querySelectorAll("[data-start]");
        var arr = Array.prototype.slice.call(eles);
        audioEl.play();
        interval.value = setInterval(() => {
            //timer
            const m = Math.floor((audioEl.currentTime) / 60);
            const s = Math.ceil((audioEl.currentTime) % 60);
            const minute = m > 9 ? m : `0${m}`;
            const second = s > 9 ? s : `0${s}`;
            time.value = `${minute}:${second}`;

            //progress bar
            const nowTime = audioEl.currentTime.toFixed(0);
            const progress = nowTime / audioEl.duration * 100;
            nowProgress.value = `width:${progress}%`

            //change para
            const nowPara = arr.find(x => x.getAttribute("data-start") == nowTime);
            if (nowPara) {
                nowParaClass.value = nowPara.getAttribute("data-start");
                document.getElementById("font_para").scrollTo({
                    top: nowPara.offsetTop - 200,
                    behavior: "smooth"
                })
            }

            //audio ended
            audioEl.onended = () => {
                clearInterval(interval.value);
                goTales(commonStore.talesOthers.next_id);
            }
        }, 1000)
        audio.value = true;
    }
}


const goTales = (id) => {
    router.push({
        name: "Tales",
        query: {
            id: id,
        },
    });
}

const toplike = async (id) => {
    let el;
    if (window.innerWidth > 991) {
        el = document.getElementById("favorite");
    } else {
        el = document.getElementById("favorite_mb");
    }
    await commonStore.fnLike(id).then(() => {
        if (el.classList.contains("off")) {
            el.classList.remove("off");
        } else {
            el.classList.add("off");
        }
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