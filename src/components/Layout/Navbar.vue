<template>
    <section class="navbar">
        <div class="navbar_wrapper">
            <ul class="nav_list">
                <li @click="findClass(1)">安徒生童話</li>
                <li @click="findClass(2)">格林童話</li>
                <li @click="findClass(3)">伊索寓言</li>
                <li @click="findClass(4)">世界名著</li>
            </ul>
            <div class="podcast" @click="podcast">
                <img src="@/assets/images/podcast_mb.svg" alt="">
                <img class="play" src="@/assets/images/podcast_play.svg" alt="">
                <span>前往Podcast收聽</span>
            </div>
            <div class="radio" @click="radioPlay">
                <img class="radio_bg" src="@/assets/images/radio_mb.svg" alt="">
                <img class="radio_gif" src="@/assets/images/radio.gif" alt="" v-if="radioStatus">
                <img class="radio_btn" src="@/assets/images/radio_play.svg" alt="" v-if="!radioStatus">
                <img class="radio_btn" src="@/assets/images/radio_pause.svg" alt="" v-if="radioStatus">
            </div>
            <div class="notification_wrapper">
                <transition-group appear tag="ul" class="notification" name="fade">
                    <li v-cloak class="animate__animated animate__fadeInLeft">
                        <div>
                            <img src="@/assets/images/head_default.svg" alt="">
                        </div>
                        <div>
                            <span class="male">Gary</span>
                            <div class="wrapper">
                                <p class="width">正在閱讀 The Goose That Laid the Golden Eggs</p>
                                <p class="first">
                                    正在閱讀 The Goose That Laid the Golden Eggs&nbsp;&nbsp;&nbsp;
                                </p>
                                <p class="second">
                                    正在閱讀 The Goose That Laid the Golden Eggs&nbsp;&nbsp;&nbsp;
                                </p>
                            </div>
                        </div>
                    </li>
                    <li v-cloak class="animate__animated animate__fadeInLeft">
                        <div>
                            <img src="@/assets/images/head_default.svg" alt="">
                        </div>
                        <div>
                            <span class="male">Gary</span>
                            <div class="wrapper">
                                <p class="width">正在閱讀 The Goose That Laid the Golden Eggs</p>
                                <p class="first">
                                    正在閱讀 The Goose That Laid the Golden Eggs&nbsp;&nbsp;&nbsp;
                                </p>
                                <p class="second">
                                    正在閱讀 The Goose That Laid the Golden Eggs&nbsp;&nbsp;&nbsp;
                                </p>
                            </div>
                        </div>
                    </li>
                    <li v-cloak class="animate__animated animate__fadeInLeft">
                        <div>
                            <img src="@/assets/images/head_default.svg" alt="">
                        </div>
                        <div>
                            <span class="male">Gary</span>
                            <div class="wrapper">
                                <p class="width">正在閱讀 The Goose That Laid the Golden Eggs</p>
                                <p class="first">
                                    正在閱讀 The Goose That Laid the Golden Eggs&nbsp;&nbsp;&nbsp;
                                </p>
                                <p class="second">
                                    正在閱讀 The Goose That Laid the Golden Eggs&nbsp;&nbsp;&nbsp;
                                </p>
                            </div>
                        </div>
                    </li>
                    <li v-cloak class="animate__animated animate__fadeInLeft">
                        <div>
                            <img src="@/assets/images/head_default.svg" alt="">
                        </div>
                        <div>
                            <span class="male">Gary</span>
                            <div class="wrapper">
                                <p class="width">正在閱讀 The Goose That Laid the Golden Eggs</p>
                                <p class="first">
                                    正在閱讀 The Goose That Laid the Golden Eggs&nbsp;&nbsp;&nbsp;
                                </p>
                                <p class="second">
                                    正在閱讀 The Goose That Laid the Golden Eggs&nbsp;&nbsp;&nbsp;
                                </p>
                            </div>
                        </div>
                    </li>
                    <li v-cloak class="animate__animated animate__fadeInLeft">
                        <div>
                            <img src="@/assets/images/head_default.svg" alt="">
                        </div>
                        <div>
                            <span class="female">Nina</span>
                            <div class="wrapper">
                                <p class="width">正在閱讀 The Goose That Laid the Golden Eggs</p>
                                <p class="first">
                                    正在閱讀 The Goose That Laid the Golden Eggs&nbsp;&nbsp;&nbsp;
                                </p>
                                <p class="second">
                                    正在閱讀 The Goose That Laid the Golden Eggs&nbsp;&nbsp;&nbsp;
                                </p>
                            </div>
                        </div>
                    </li>
                    <li v-cloak class="animate__animated animate__fadeInLeft">
                        <div>
                            <img src="@/assets/images/head_default.svg" alt="">
                        </div>
                        <div>
                            <span class="male">Gary</span>
                            <div class="wrapper">
                                <p class="width">正在閱讀 The Goose That Laid the Golden Eggs</p>
                                <p class="first">
                                    正在閱讀 The Goose That Laid the Golden Eggs&nbsp;&nbsp;&nbsp;
                                </p>
                                <p class="second">
                                    正在閱讀 The Goose That Laid the Golden Eggs&nbsp;&nbsp;&nbsp;
                                </p>
                            </div>
                        </div>
                    </li>
                    <li v-cloak class="animate__animated animate__fadeInLeft">
                        <div>
                            <img src="@/assets/images/head_default.svg" alt="">
                        </div>
                        <div>
                            <span class="male">Gary</span>
                            <div class="wrapper">
                                <p class="width">正在閱讀 The Goose That Laid the Golden Eggs</p>
                                <p class="first">
                                    正在閱讀 The Goose That Laid the Golden Eggs&nbsp;&nbsp;&nbsp;
                                </p>
                                <p class="second">
                                    正在閱讀 The Goose That Laid the Golden Eggs&nbsp;&nbsp;&nbsp;
                                </p>
                            </div>
                        </div>
                    </li>
                </transition-group>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from "vue"


// data
const emit = defineEmits([]);
const radioStatus = ref(false);


// method
const radioPlay = () => {
    radioStatus.value = !radioStatus.value;
}

const podcast = () => {
    emit("podcast")
}

const findClass = (index) => {
    const blk = document.getElementById(`class${index}`);
    window.scrollTo({
        top: blk.offsetTop - 50,
        behavior: "smooth"
    })
}

</script>