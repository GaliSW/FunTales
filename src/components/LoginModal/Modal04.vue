<template>
  <section class="modal_shadow">
    <div class="modal animate__animated animate__fadeInDown" id="modal04">
      <div class="top_btn">
        <span @click="prev"
          ><img src="../../assets/images/back_btn.svg" alt=""
        /></span>
        <span @click="closeModal"
          ><img src="../../assets/images/close_btn.svg" alt=""
        /></span>
      </div>
      <div class="title">
        <img src="../../assets/images/FunDictionary.svg" alt="" />
        <!-- <span>&nbsp;|&nbsp;</span> -->
        <!-- <span>{{ title }}</span> -->
      </div>
      <div class="sub_title">忘記密碼</div>
      <div class="info">
        <form action="#">
          <input
            type="text"
            name="account"
            id="account"
            placeholder="帳號(信箱)"
            autocomplete="on"
          />

          <div>
            <img src="../../assets/images/alert.svg" alt="" />
            密碼會直接寄到您註冊的信箱
          </div>
        </form>
      </div>
      <div class="send">送出</div>
    </div>
  </section>
</template>
<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import { loginStore } from "../../store/login";
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
</script>