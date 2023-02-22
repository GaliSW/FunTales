<template>
  <section class="modal_shadow">
    <div class="modal animate__animated animate__fadeInDown" id="modal06">
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
      <div class="sub_title">簡訊驗證</div>
      <div class="info">
        <div class="new_phone">
          <input type="text" placeholder="新手機號碼" id="new_phone" />
          <div @click="reSend">發送驗證碼</div>
        </div>
        <input
          type="text"
          name="account"
          id="account"
          placeholder="請輸入簡訊驗證碼"
          autocomplete="off"
        />

        <div>
          收到簡訊驗證碼後，請於30分鐘內完成加入。超過30分鐘，驗證碼即失效
        </div>
      </div>
      <div class="join" @click="join">加入完成</div>
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
    lastPage: "Modal02",
  });
};
const closeModal = () => {
  console.log("close");
  login.close();
};
const reSend = () => {
  login.changeMobile();
};
const join = () => {
  login.joinCheck("new");
};
</script>