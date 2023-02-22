<template>
    <section class="modal_shadow">
        <div class="modal animate__animated animate__fadeInDown" id="modal03">
            <div class="top_btn">
                <span @click="prev"><img src="../../assets/images/back_btn.svg" alt="" /></span>
                <span @click="closeModal"><img src="../../assets/images/close_btn.svg" alt="" /></span>
            </div>
            <div class="title">
                <img src="../../assets/images/FunDictionary.svg" alt="" />
                <!-- <span>&nbsp;|&nbsp;</span>
        <span>{{ title }}</span> -->
            </div>
            <div class="info">
                <form action="#">
                    <input type="text" name="account" id="account" placeholder="帳號(信箱)" autocomplete="on" />
                    <input type="password" name="password" id="password" placeholder="手機(密碼)" autocomplete="on" />
                    <div @click="remember">
                        <img src="../../assets/images/uncheck.svg" alt="" v-if="!isRemember" />
                        <img src="../../assets/images/checked.svg" alt="" v-else />
                        記住我
                    </div>
                </form>
            </div>
            <div class="login_mail" @click="mailLogin">登入</div>
            <div class="login_fb" @click="fbLogin">使用Facebook登入</div>
            <div id="google_login"></div>
            <div class="terms" @click="toForgot">忘記密碼&nbsp;?</div>
        </div>
    </section>
</template>
<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import { loginStore } from "../../store/login";
const login = loginStore();

const isRemember = ref(false);
const remember = () => {
    isRemember.value = !isRemember.value;
    const a = document.getElementById("account").value;
    const p = document.getElementById("password").value;
    if (sessionStorage.getItem("a")) {
        sessionStorage.clear("a", "p");
    } else {
        sessionStorage.setItem("a", a);
        sessionStorage.setItem("p", p);
    }
};
onMounted(() => {
    window.google.accounts.id.renderButton(
        document.getElementById("google_login"),
        { theme: "outline", size: "large", width: "330px" }
    );

    const a = document.getElementById("account");
    const p = document.getElementById("password");
    if (sessionStorage.getItem("a")) {
        a.value = sessionStorage.getItem("a");
        p.value = sessionStorage.getItem("p");
        isRemember.value = true;
    }
});
const prev = () => {
    login.back();
};
const closeModal = () => {
    login.close();
};
const mailLogin = () => {
    login.mailLoginCheck();
};
const fbLogin = () => {
    login.fbLogin();
};
const toForgot = () => {
    login.$patch({
        page: "Modal04",
        fb: false,
        lastPage: "Modal03",
    });
};
</script>