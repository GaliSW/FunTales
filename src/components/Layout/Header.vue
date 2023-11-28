<template>
    <header>
        <div class="modal-1" v-if="modal == 1">
            <div class="left">
                <router-link :to="'/'" id="logo">
                    <span class="img rotateX" id="logoImg"><img src="../../assets/images/logo.png" alt="FUNDAY" /></span>
                    <span class="logo_text rotateX none" id="logoText">
                        <div>童話學英文</div>
                    </span>
                </router-link>
                <input type="checkbox" id="img" />
                <div id="logo_mb">
                    <label for="img">
                        <img src="../../assets/images/logo.png" alt="" />
                        <img src="../../assets/images/logo_arrow.svg" alt="" />
                    </label>
                </div>
                <div class="subWeb">
                    <a href="#" @click="redirect(0)">FunMusic</a>
                    <a href="#" @click="redirect(1)">FunTube</a>
                    <a href="#" @click="redirect(2)">FunRadio</a>
                    <a href="#" @click="redirect(3)">FunDictionary</a>
                    <a href="#" @click="redirect(4)">FunDay</a>
                    <a href="#" @click="redirect(5)" class="more_service">更多會員服務</a>
                </div>
            </div>
            <div class="right">
                <div class="collect" @click="toMyfav">
                    <img src="@/assets/images/collect.svg" alt="" />
                    <span>我的收藏</span>
                </div>

                <div class="right_pc_login" @click="login()" v-if="!status">
                    <span>免費加入</span> <img src="../../assets/images/join.svg" alt="" />
                </div>
                <div class="right_mb" v-if="!status">
                    <img src="../../assets/images/login.svg" alt="" @click="login()" />
                </div>
                <div class="right_pc_logout" v-else @click="logout()">
                    <img src="../../assets/images/logout.svg" alt="" />
                </div>
            </div>
        </div>
        <div class="modal-2" v-if="modal == 2">
            <div class="left">
                <router-link :to="'/'" id="logo">
                    <span class="img rotateX" id="logoImg"><img src="../../assets/images/logo.png" alt="FUNDAY" /></span>
                    <span class="logo_text rotateX none" id="logoText">
                        <div>童話學英文</div>
                    </span>
                </router-link>
                <div class="subWeb">
                    <a href="#" @click="redirect(0)">FunMusic</a>
                    <a href="#" @click="redirect(1)">FunTube</a>
                    <a href="#" @click="redirect(2)">FunRadio</a>
                    <a href="#" @click="redirect(3)">FunDictionary</a>
                    <a href="#" @click="redirect(4)">FunDay</a>
                    <a href="#" @click="redirect(5)" class="more_service">更多會員服務</a>
                </div>
            </div>
            <div class="right">
                <div @click="toMyfav" class="collect">
                    <img src="@/assets/images/collect.svg" alt="" />
                    <span>我的收藏</span>
                </div>

                <div class="right_pc_login" v-if="!status" @click="login()">
                    <span>免費加入</span> <img src="../../assets/images/join.svg" alt="" />
                </div>
                <div class="right_mb" v-if="!status" @click="login()">
                    <img src="../../assets/images/login.svg" alt="" />
                </div>
                <div class="right_pc_logout" v-else @click="logout()">
                    <img src="../../assets/images/logout.svg" alt="" />
                </div>
            </div>
        </div>
        <div class="modal-3" v-if="modal == 3">
            <div class="left">
                <router-link :to="'/'" id="logo">
                    <span class="img rotateX" id="logoImg"><img src="../../assets/images/logo.png" alt="FUNDAY" /></span>
                    <span class="logo_text rotateX none" id="logoText">
                        <div>童話學英文</div>
                    </span>
                </router-link>
                <div class="subWeb">
                    <a href="#" @click="redirect(0)">FunMusic</a>
                    <a href="#" @click="redirect(1)">FunTube</a>
                    <a href="#" @click="redirect(2)">FunRadio</a>
                    <a href="#" @click="redirect(3)">FunDictionary</a>
                    <a href="#" @click="redirect(4)">FunDay</a>
                    <a href="#" @click="redirect(5)" class="more_service">更多會員服務</a>
                </div>
            </div>
            <div class="right">
                <div @click="toMyfav" class="collect">
                    <img src="@/assets/images/collect.svg" alt="" />
                    <span>我的收藏</span>
                </div>

                <div class="right_pc_login" v-if="!status" @click="login()">
                    <span>免費加入</span> <img src="../../assets/images/join.svg" alt="" />
                </div>
                <div class="right_mb" v-if="!status" @click="login()">
                    <img src="../../assets/images/login.svg" alt="" />
                </div>
                <div class="right_pc_logout" @click="logout()" v-else>
                    <img src="../../assets/images/logout.svg" alt="" />
                </div>
            </div>
            <div class="back" @click="back">
                <img src="@/assets/images/return.svg" alt="">
            </div>
            <div class="title">{{ header.title }}</div>
        </div>
    </header>
    <div id="program_pop" v-if="programPop">
        <div>
            <i class="fa-solid fa-circle-xmark" @click="programPop = false"></i>
            <img src="@/assets/images/checkin/awardPC.png" alt="" class="pc">
            <img src="@/assets/images/checkin/awardMB.png" alt="" class="mb">
        </div>
    </div>
</template>

<script setup>

import { computed, onMounted, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useHeaderStore } from "@/store/header.js";
import { useCommonStore } from "@/store/common.js"
import { loginStore } from "@/store/login";
import { useUserStore } from "@/store/user";



//store
const header = useHeaderStore();
const loginStatus = loginStore();
const user = useUserStore();
const commonStore = useCommonStore();
const token = computed(() => `?fdtk=${user.token}`);
const ADid = ref("");

//router
const router = useRouter();

//data
const modal = computed(() => header.nowPage);
const status = computed(() => user.isLogin);
const programPop = ref(false)

onMounted(() => {
    user.token = localStorage.getItem("fdtk");
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
    if (sessionStorage.getItem("ADid")) {
        ADid.value = sessionStorage.getItem("ADid")
    }
    window.onload = () => {
        window.google.accounts.id.initialize({
            client_id:
                "424336502494-0lqsgtdqhq1eq58dspl52uc13k168uon.apps.googleusercontent.com",
            callback: loginStatus.handleCredentialResponse,
        });
        window.google.accounts.id.renderButton(
            document.getElementById("google_signup"),
            { theme: "outline", size: "large", width: "307px" }
        );
    }
})

const back = () => {
    history.back();
}
const login = () => {
    loginStatus.$patch({
        status: true,
    });
};
const logout = () => {
    loginStatus.logout();
};

const toMyfav = () => {
    if (!user.isLogin) {
        loginStatus.$patch({
            status: true,
        });
        return;
    }
    router.push({
        name: "MyFavorite",
    });
}

const ckeckin = () => {
    if (!user.isLogin) {
        loginStatus.$patch({
            status: true,
        });
        return;
    } else {
        commonStore.checkinPop = true;
    }
}


const redirect = (number) => {
    switch (number) {
        case 0:
            if (user.token) {
                window.open(`https://music.funday.asia?fdtk=${user.token}`);
            } else if (ADid.value !== "") {
                window.open(`https://music.funday.asia/adLanding.html?ADid=${ADid.value}`)
            } else {
                window.open("https://music.funday.asia")
            }
            break;
        case 1:
            if (user.token) {
                window.open(`https://tube.funday.asia?fdtk=${user.token}`);
            } else if (ADid.value !== "") {
                window.open(`https://tube.funday.asia/adLanding.html?ADid=${ADid.value}`)
            } else {
                window.open("https://tube.funday.asia")
            }
            break;
        case 2:
            if (user.token) {
                window.open(`https://funradio.funday.asia?fdtk=${user.token}`);
            } else if (ADid.value !== "") {
                window.open(`https://funradio.funday.asia/adLanding.html?ADid=${ADid.value}`)
            } else {
                window.open("https://funradio.funday.asia")
            }
            break;
        case 3:
            if (user.token) {
                window.open(`https://dic.funday.asia?fdtk=${user.token}`);
            } else if (ADid.value !== "") {
                window.open(`https://dic.funday.asia?ADid=${ADid.value}`)
            } else {
                window.open("https://dic.funday.asia")
            }
            break;
        case 4:
            if (user.token) {
                window.open(`https://funday.asia/api/SSO.asp?fdtk=${user.token}`);
            } else if (ADid.value !== "") {
                window.open(`https://funday.asia/AD_reflink.asp?ad_id=${ADid.value}`)
            } else {
                window.open("https://funday.asia")
            }
            break;
        case 5:
            if (user.token) {
                window.open(`https://funday.asia/api/SSOGOLink.asp?fdtk=${user.token}&Path=Subscription`);
            } else if (ADid.value !== "") {
                window.open(`https://funday.asia/subscription/2023?ad_id=${ADid.value}`)
            } else {
                window.open("https://funday.asia/subscription/2023/")
            }
            break;
    }
}
</script>