<template>
    <div class="DrWord" v-cloak>
        <div class="close" @click="closeDic">
            <img src="@/assets/images/top_bar_close.svg" />
        </div>
        <div class="Dr_title">
            <div class="word">
                <h3>
                </h3>
                <h4>
                    {{ commonStore.baseForm[1] }}{{ commonStore.baseForm[2] }}
                </h4>
                <h5>{{ commonStore.baseForm[3] }}</h5>
            </div>
            <div class="collect" @click="commonStore.fnWordsCollect()">
                <div class="icon">
                    <i class="fas fa-heart" v-if="commonStore.isCollect"></i>
                    <i class="far fa-heart" v-else></i>
                </div>
                <p>
                    收藏
                </p>
            </div>
        </div>
        <div class="Dr_content">
            <div class="inner">
                <p v-if="commonStore.noWord" v-cloak>
                    無資料
                </p>
                <div v-for="(item, index) in commonStore.keyWordResult" v-cloak>
                    <p class="divider" v-if="index !== 'baseform'">
                        {{ item.attr }}
                    </p>
                    <ul v-if="index !== 'baseform'">
                        <li v-for="(item2, index) in item.text">
                            <span v-for="(item3, index) in item2">{{ item3 }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- 字典功能 -->
</template>
<script setup>
import { useCommonStore } from "@/store/common.js"

const commonStore = useCommonStore();

//關閉字典
const emit = defineEmits(["close-dic"])
const closeDic = () => {
    emit("close-dic")
}


//查詢已收錄字典
const getDrWordModal = (e) => {
    //api/Articla/CheckWords
    axios
        .get(
            `https://funday.asia/NewMylessonmobile/api/vocabulary?customer_id=${this.customer_id}&member_id=${this.member_id}&Enkeyword=${this.DrWord}&Chkeyword=`
        )
        .then((res) => {
            // console.log(res.data.En_word);
            if (res.data.En_word == "") {
                // console.log("n");
                $(".collect .icon .fas.fa-heart").hide();
                $(".collect .icon .far.fa-heart").show();
            } else {
                // console.log("y");
                $(".collect .icon .fas.fa-heart").show();
                $(".collect .icon .far.fa-heart").hide();
            }
        })
        .catch((error) => console.log(error));
}
//會員單字收錄
const fnWordsCollect = (e) => {
    //api/Article/WordsCollect
    if (!this.member_id) {
        // alert("請先登入");
        $("#myModal07").modal("show");
        return;
    }
    axios
        .get(
            `https://funday.asia/NewMylessonmobile/C/api/vocabulary/join?customer_id=${this.customer_id}&member_id=${this.member_id}&Enkeyword=${this.DrWord}&Chkeyword=`
        )
        .then((res) => {
            // alert(res.data.StateMessage);
            $(".collect .icon .fas.fa-heart").show();
            $(".collect .fas").show();
            $(".collect .icon .far.fa-heart").hide();
            $(".collect .far").hide();
        })
        .catch((error) => console.log(error));
}
//刪除單字
const deleteWord = ($event) => {
    //api/Article/WordsCollectSort 取得該單字的order
    //取得後再刪除
    //api/Article/DeleteWordsCollect  刪除

    // console.log($event);
    axios
        .get(
            `https://funday.asia/NewMylessonmobile/D/api/vocabulary/join?customer_id=${this.customer_id}&member_id=${this.member_id}&Enkeyword=${this.DrWord}&Chkeyword=`
        )
        .then((res) => {
            // alert(res.data.ReturnMessage);
            $(".collect .icon .fas.fa-heart").hide();
            $(".collect .fas").hide();
            $(".collect .icon .far.fa-heart").show();
            $(".collect .far").show();
        })
        .catch((error) => console.log(error));
}



</script>