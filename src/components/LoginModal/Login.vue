<template>
    <keep-alive>
        <component :is="page" v-show="login.status"></component>
    </keep-alive>
</template>
<script setup>
import Modal01 from "./Modal01.vue";
import Modal02 from "./Modal02.vue";
import Modal03 from "./Modal03.vue";
import Modal04 from "./Modal04.vue";
import Modal05 from "./Modal05.vue";
import Modal06 from "./Modal06.vue";
import Modal07 from "./Modal07.vue";
import { loginStore } from "@/store/login";

import { markRaw, reactive, ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import { storeToRefs } from "pinia";

const login = loginStore();
const page = ref(null);

onMounted(() => {
    modal(login.page);
});

const subscribe = login.$subscribe((mutation, state) => {
    modal(login.page);
});

const modal = (tab) => {
    const modals = {
        Modal01,
        Modal02,
        Modal03,
        Modal04,
        Modal05,
        Modal06,
        Modal07,
    };
    page.value = markRaw(modals[tab]);
};
</script>