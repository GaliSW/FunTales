<template>
    <section class="modal_shadow">
        <div class="modal animate__animated animate__fadeInDown" id="modal02">
            <div class="top_btn">
                <span @click="prev"><img src="../../assets/images/back_btn.svg" alt="" /></span>
                <span @click="closeModal"><img src="../../assets/images/close_btn.svg" alt="" /></span>
            </div>
            <div class="title">
                <img src="@/assets/images/logo.png" alt="" />
                <!-- <span>&nbsp;|&nbsp;</span>
        <span>{{ title }}</span> -->
            </div>
            <div class="sub_title" v-if="login.fb">加入FUNDAY</div>
            <div class="info">
                <form action="#">
                    <input type="text" name="account" id="account" placeholder="帳號(信箱)" autocomplete="on"
                        v-if="!login.fb" />
                    <input type="password" name="password" id="password" placeholder="手機(密碼)" autocomplete="on" />
                    <p>請填寫正確手機號碼以取得簡訊驗證碼，完成加入</p>
                    <div>
                        <input type="text" name="name" id="name" placeholder="中文姓名" autocomplete="on" />
                        <div>
                            <input type="radio" id="male" name="sex" value="1" />

                            <label for="male" @click="sexClick(1)">
                                <img class="male_checked" src="../../assets/images/radio_checked.svg" alt=""
                                    v-show="sex == 1" />
                                <img class="male_uncheck" src="../../assets/images/radio_uncheck.svg" alt=""
                                    v-show="sex !== 1" />
                                男
                            </label>
                            <input type="radio" id="female" name="sex" value="0" />

                            <label for="female" @click="sexClick(0)">
                                <img class="female_checked" src="../../assets/images/radio_checked.svg" alt=""
                                    v-show="sex == 0" />
                                <img class="female_uncheck" src="../../assets/images/radio_uncheck.svg" alt=""
                                    v-show="sex !== 0" />

                                女
                            </label>
                        </div>
                    </div>
                </form>
            </div>
            <div class="join_btn" :class="{ fb_join: login.fb }" @click="join">
                加入
            </div>
            <div class="terms">
                加入即代表同意NEWS的服務
                <a href="#" @click="terms">條款與隱私權</a>
            </div>
        </div>
    </section>
</template>
<script setup>
import { loginStore } from "../../store/login";
import { ref, reactive, computed, onMounted } from "vue";
const login = loginStore();

const sex = ref(-1);
const sexClick = (s) => {
    sex.value = s;
};
const prev = () => {
    login.back();
};
const closeModal = () => {
    login.close();
};

const terms = () => {
    login.$patch({
        page: "Modal07",
        lastPage: "Modal02",
    });
};

const join = () => {
    if (login.google) {
        login.googleSignUp();
    } else if (login.fb) {
        login.fbLogin();
    } else {
        login.mailSignUp()
    }
};
</script>