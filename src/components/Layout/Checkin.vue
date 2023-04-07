<template>
    <div id="checkin_pop">
        <div v-if="!finish" @click="checkin">
            <i class="fa-solid fa-circle-xmark" @click="commonStore.checkinPop = false"></i>
            <img src="@/assets/images/checkin/day1PC.png" alt=""
                v-if="commonStore.checkIndex === 1 && !commonStore.isCheck && commonStore.checkDevice == 'PC'">
            <img src="@/assets/images/checkin/day1MB.png" alt=""
                v-if="commonStore.checkIndex === 1 && !commonStore.isCheck && commonStore.checkDevice == 'MB'">
            <img src="@/assets/images/checkin/day1donePC.png" alt=""
                v-if="commonStore.checkIndex === 1 && commonStore.isCheck && commonStore.checkDevice == 'PC'">
            <img src="@/assets/images/checkin/day1doneMB.png" alt=""
                v-if="commonStore.checkIndex === 1 && commonStore.isCheck && commonStore.checkDevice == 'MB'">

            <img src="@/assets/images/checkin/day2PC.png" alt=""
                v-if="commonStore.checkIndex === 2 && !commonStore.isCheck && commonStore.checkDevice == 'PC'">
            <img src="@/assets/images/checkin/day2MB.png" alt=""
                v-if="commonStore.checkIndex === 2 && !commonStore.isCheck && commonStore.checkDevice == 'MB'">
            <img src="@/assets/images/checkin/day2donePC.png" alt=""
                v-if="commonStore.checkIndex === 2 && commonStore.isCheck && commonStore.checkDevice == 'PC'">
            <img src="@/assets/images/checkin/day2doneMB.png" alt=""
                v-if="commonStore.checkIndex === 2 && commonStore.isCheck && commonStore.checkDevice == 'MB'">

            <img src="@/assets/images/checkin/day3PC.png" alt=""
                v-if="commonStore.checkIndex === 3 && !commonStore.isCheck && commonStore.checkDevice == 'PC'">
            <img src="@/assets/images/checkin/day3MB.png" alt=""
                v-if="commonStore.checkIndex === 3 && !commonStore.isCheck && commonStore.checkDevice == 'MB'">
            <img src="@/assets/images/checkin/day3donePC.png" alt=""
                v-if="commonStore.checkIndex === 3 && commonStore.isCheck && commonStore.checkDevice == 'PC'">
            <img src="@/assets/images/checkin/day3doneMB.png" alt=""
                v-if="commonStore.checkIndex === 3 && commonStore.isCheck && commonStore.checkDevice == 'MB'">

            <img src="@/assets/images/checkin/day4PC.png" alt=""
                v-if="commonStore.checkIndex === 4 && !commonStore.isCheck && commonStore.checkDevice == 'PC'">
            <img src="@/assets/images/checkin/day4MB.png" alt=""
                v-if="commonStore.checkIndex === 4 && !commonStore.isCheck && commonStore.checkDevice == 'MB'">
            <img src="@/assets/images/checkin/day4donePC.png" alt=""
                v-if="commonStore.checkIndex === 4 && commonStore.isCheck && commonStore.checkDevice == 'PC'">
            <img src="@/assets/images/checkin/day4doneMB.png" alt=""
                v-if="commonStore.checkIndex === 4 && commonStore.isCheck && commonStore.checkDevice == 'MB'">

            <img src="@/assets/images/checkin/day5PC.png" alt=""
                v-if="commonStore.checkIndex === 5 && !commonStore.isCheck && commonStore.checkDevice == 'PC'">
            <img src="@/assets/images/checkin/day5MB.png" alt=""
                v-if="commonStore.checkIndex === 5 && !commonStore.isCheck && commonStore.checkDevice == 'MB'">
            <img src="@/assets/images/checkin/day5donePC.png" alt=""
                v-if="commonStore.checkIndex === 5 && commonStore.isCheck && commonStore.checkDevice == 'PC'">
            <img src="@/assets/images/checkin/day5doneMB.png" alt=""
                v-if="commonStore.checkIndex === 5 && commonStore.isCheck && commonStore.checkDevice == 'MB'">

            <img src="@/assets/images/checkin/day6PC.png" alt=""
                v-if="commonStore.checkIndex === 6 && !commonStore.isCheck && commonStore.checkDevice == 'PC'">
            <img src="@/assets/images/checkin/day6MB.png" alt=""
                v-if="commonStore.checkIndex === 6 && !commonStore.isCheck && commonStore.checkDevice == 'MB'">
            <img src="@/assets/images/checkin/day6donePC.png" alt=""
                v-if="commonStore.checkIndex === 6 && commonStore.isCheck && commonStore.checkDevice == 'PC'">
            <img src="@/assets/images/checkin/day6doneMB.png" alt=""
                v-if="commonStore.checkIndex === 6 && commonStore.isCheck && commonStore.checkDevice == 'MB'">

            <img src="@/assets/images/checkin/day7PC.png" alt=""
                v-if="commonStore.checkIndex === 7 && !commonStore.isCheck && commonStore.checkDevice == 'PC'">
            <img src="@/assets/images/checkin/day7MB.png" alt=""
                v-if="commonStore.checkIndex === 7 && !commonStore.isCheck && commonStore.checkDevice == 'MB'">
            <img src="@/assets/images/checkin/day7donePC.png" alt=""
                v-if="commonStore.checkIndex === 7 && commonStore.isCheck && commonStore.checkDevice == 'PC'">
            <img src="@/assets/images/checkin/day7doneMB.png" alt=""
                v-if="commonStore.checkIndex === 7 && commonStore.isCheck && commonStore.checkDevice == 'MB'">

        </div>
        <div v-else @click="checkin">
            <i class="fa-solid fa-circle-xmark" @click="commonStore.checkinPop = false"></i>
            <img src="@/assets/images/checkin/finishPC.png" alt="" v-if="commonStore.checkDevice == 'PC'">
            <img src="@/assets/images/checkin/finishMB.png" alt="" v-else>
        </div>
    </div>
</template>
<script setup>
import { useCommonStore } from "@/store/common.js"
import { loginStore } from "@/store/login";
import { useUserStore } from "@/store/user";
import { ref, onMounted } from 'vue';

const commonStore = useCommonStore();
const loginStatus = loginStore();
const user = useUserStore();

const finish = ref(false)

onMounted(async () => {
    await commonStore.fnCheckinRecord();
})

const checkin = async () => {
    if (!user.isLogin) {
        loginStatus.$patch({
            status: true,
        });
        return;
    }
    if (finish.value) {
        window.open("https://funday.asia/AD_reflink.asp?MZlink=plan-1&ad_id=2442");
        return;
    }
    if (commonStore.isCheck && commonStore.checkIndex == 7) {
        finish.value = true;
    } else if (commonStore.isCheck) {
        return;
    } else {
        await commonStore.fnCheckinUpdate();
        await commonStore.fnCheckinRecord();
    }
}
</script>