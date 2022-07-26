<template>
    <header>
        <div class="left">
            <!-- <router-link :to="'/'">
            </router-link> -->
            <a id="logo" href="#">
                <span class="img rotateX" id="logoImg"><img src="../../assets/images/FunTale_logo.svg"
                        alt="FUNDAY" /></span>
                <span class="logo_text rotateX none" id="logoText">
                    <div>童話學英文</div>
                </span>
            </a>
            <input type="checkbox" id="img" />
            <div id="logo_mb">
                <label for="img">
                    <img src="../../assets/images/FunTale_logo.svg" alt="" />
                    <img src="../../assets/images/logo_arrow.svg" alt="" />
                </label>
            </div>
            <div class="subWeb">
                <a href="https://music.funday.asia" target="_blank">FunMusic</a>
                <a href="https://map.funday.asia" target="_blank">FunMap</a>
                <a href="https://tube.funday.asia" target="_blank">FunTube</a>
                <a href="https://tube.funday.asia" target="_blank">FunDic</a>
                <a href="https://funday.asia" target="_blank">FunDay</a>
            </div>
        </div>
        <div class="right_pc_login">
            <span>免費加入</span> <img src="../../assets/images/join.svg" alt="" />
        </div>
        <!-- <div class="right_pc_logout">
            <img src="../../assets/images/logout.svg" alt="" />
        </div> -->
        <div class="right_mb">
            <img src="../../assets/images/login.svg" alt="" />
        </div>
    </header>
    <div class="notification_wrapper_mobile">
        <div class="notification_mobile animate__animated">
            <img src="@/assets/images/head_default.svg" alt="">
            <span v-cloak class="male">Gary</span>
            <div class="wrapper" v-cloak>
                <p class="width">正在閱讀 The Goose That Laid the Golden Eggs&nbsp;&nbsp;&nbsp;</p>
                <p class="first">正在閱讀 The Goose That Laid the Golden Eggs&nbsp;&nbsp;&nbsp;</p>
                <p class="second">正在閱讀 The Goose That Laid the Golden Eggs&nbsp;&nbsp;&nbsp;</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted } from "@vue/runtime-core";

import { toRefs } from "vue";

// const loginStatus = loginStore();
// const user = useUserStore();
// const status = computed(() => user.isLogin);
onMounted(() => {
    const logoImg = document.getElementById("logoImg");
    const logoText = document.getElementById("logoText");
    setInterval(() => {
        if (logoImg.classList.contains("none")) {
            logoImg.classList.remove("none");
            logoText.classList.add("none");
        } else {
            logoImg.classList.add("none");
            logoText.classList.remove("none");
        }
    }, 6000);
})

const login = () => {
    loginStatus.$patch({
        status: true,
    });
};
const logout = () => {
    loginStatus.logout();
};
</script>