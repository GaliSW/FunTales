<template>
    <section class="modal_shadow">
        <div class="modal animate__animated animate__fadeInDown" id="modal01">
            <div class="close_btn" @click="closeModal">
                <!-- <span><img src="../assets/images/back_btn.svg" alt="" /></span> -->
                <span><img src="../../assets/images/close_btn.svg" alt="" /></span>
            </div>
            <div class="title">
                <img src="../../assets/images/FunDictionary.svg" alt="" />
                <!-- <span>&nbsp;|&nbsp;</span> -->
                <!-- <span>{{ title }}</span> -->
            </div>
            <div class="sub_title">加入會員享有完整功能</div>
            <div class="choose_blk">
                <div @click="toMail" class="mail_login">
                    <img src="../../assets/images/mail.svg" alt="" />
                    使用電子信箱加入
                </div>
                <div @click="toFb" class="mail_login">
                    <img src="../../assets/images/facebook-square.svg" alt="" />
                    使用Facebook加入
                </div>
                <!-- <div id="g_id_onload"
                    data-client_id="424336502494-0lqsgtdqhq1eq58dspl52uc13k168uon.apps.googleusercontent.com"
                    data-callback="handleCredentialResponse" data-auto_prompt="false"></div>
                <div class="g_id_signin" data-type="standar" data-size="large" data-theme="outline"
                    data-text="signup_with" data-shape="rectangular" data-logo_alignment="left" data-width="318">
                </div> -->
                <div id="google_signup" data-width="307"></div>
            </div>
            <div class="is_member" @click="toLogin">
                <p>已是會員&nbsp;立即登入</p>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import { loginStore } from "../../store/login";
const login = loginStore();


const closeModal = () => {
    login.close();
};

const toMail = () => {
    login.$patch({
        page: "Modal02",
        fb: false,
        lastPage: "Modal01",
    });
};
const toFb = () => {
    login.fbLogin();
};
const toLogin = () => {
    login.$patch({
        page: "Modal03",
        fb: false,
        lastPage: "Modal01",
    });
};
</script>