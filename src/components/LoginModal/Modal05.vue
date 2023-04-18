<template>
    <section class="modal_shadow">
        <div class="modal animate__animated animate__fadeInDown" id="modal05">
            <div class="top_btn">
                <span @click="prev"><img src="../../assets/images/back_btn.svg" alt="" /></span>
                <span @click="closeModal"><img src="../../assets/images/close_btn.svg" alt="" /></span>
            </div>
            <div class="title">
                <img src="@/assets/images/logo.png" alt="" />
                <!-- <span>&nbsp;|&nbsp;</span> -->
                <!-- <span>{{ title }}</span> -->
            </div>
            <div class="sub_title">簡訊驗證</div>
            <div class="info">
                <form action="#">
                    <input type="text" name="account" id="account" placeholder="請輸入簡訊驗證碼" autocomplete="off" />

                    <div>
                        收到簡訊驗證碼後，請於30分鐘內完成加入。超過30分鐘，驗證碼即失效
                    </div>
                </form>
            </div>
            <div class="join" @click="join">加入完成</div>
            <div class="update" @click="editNumber">修改手機號碼</div>
        </div>
    </section>
</template>
<script setup>
import { loginStore } from "../../store/login";
import { ref, reactive, computed, onMounted } from "vue";

const login = loginStore();

const prev = () => {
    login.back();
    login.$patch({
        lastPage: "Modal01",
    });
};
const closeModal = () => {
    login.close();
};

const editNumber = () => {
    login.$patch({
        page: "Modal06",
        lastPage: "Modal05",
    });
};
const join = () => {
    login.joinCheck("origin");
};
</script>