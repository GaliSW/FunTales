import { defineStore } from "pinia";
import { ref } from "vue";
import { useUserStore } from "@/store/user";
import { loginStore } from "@/store/login";
import axios from "axios";

export const useCommonStore = defineStore("CommonStore", () => {
    //store
    const user = useUserStore();
    const loginStatus = loginStore();

    //index data
    const defaultData = ref([]);
    const banner = ref([]);
    const category = ref([]);
    const hotBook = ref([]);
    const hotClick = ref([]);
    const cateWorld = ref([]);
    const cateAesop = ref([]);
    const cateGrimm = ref([]);
    const cateAndersen = ref([]);

    //tales data
    const talesContent = ref([]);
    const talesInfo = ref([]);
    const talesOthers = ref([]);
    const otherStory = ref([]);
    const otherEpisode = ref([]);

    //status data
    const isClick = ref(false);
    const isCount = ref(false);

    //dictionary data
    const word = ref("");
    const baseForm = ref([]);
    const keyWordResult = ref({});
    const isCollect = ref(false);
    const noWord = ref(false);

    //category data (包含我的收藏)
    const page = ref(1);
    const categoryList = ref([]);

    //checkin data
    const checkinPop = ref(false);
    const isCheck = ref(false);
    const checkIndex = ref(0);
    const checkDevice = ref();

    //get index data
    const getIndexData = () => {
        return new Promise((resolve, reject) => {
            axios
                .get(
                    `https://funday.asia/api/storyWeb/defaultList.asp?member_id=${user.mid}`
                )
                .then((res) => {
                    category.value = res.data.Category;
                    hotBook.value = res.data["Hot Bookmark"];
                    hotClick.value = res.data["Hot Click"];
                    cateWorld.value = res.data["世界名著"].slice(0, 6);
                    cateGrimm.value = res.data["格林童話"].slice(0, 6);
                    cateAndersen.value = res.data["安徒生童話"].slice(0, 6);
                    cateAesop.value = res.data["伊索寓言"].slice(0, 6);
                    banner.value = res.data.Banner[0];
                });
        });
    };

    //get tales data
    const getTalesData = (id, cateId) => {
        axios
            .get(
                `https://funday.asia/api/storyWeb/StoryJson.asp?indx=${id}&member_id=${user.mid}`
            )
            .then((res) => {
                talesInfo.value = res.data.info;
                talesContent.value = res.data.data;
                talesOthers.value = res.data.others;
                getOthersTales(id);
            });
    };

    //get others tales data
    const getOthersTales = (id) => {
        //其他集數
        axios
            .get(
                `https://funday.asia/api/storyWeb/ClassifyPg.asp?PG=1&CategoryId=9995&member_id=${user.mid}&StoryId=${id}`
            )
            .then((res) => {
                otherEpisode.value = res.data["其它集數"].slice(0, 8);
            });
        //其他故事
        axios
            .get(
                `https://funday.asia/api/storyWeb/ClassifyPg.asp?PG=1&CategoryId=9997&member_id=${user.mid}&StoryId=${id}`
            )
            .then((res) => {
                otherStory.value = res.data["其它故事"].slice(0, 8);
            });
    };

    //get category data
    const getCategory = (id, cate) => {
        page.value = 1;
        axios
            .get(
                `https://funday.asia/api/storyWeb/ClassifyPg.asp?PG=${page.value}&CategoryId=${id}&member_id=${user.mid}`
            )
            .then((res) => {
                const arr = res.data[cate];
                categoryList.value = arr;
                page.value++;
                addCategory(id, cate);
            });
    };

    //get myFav data
    const getMyfav = (id, cate) => {
        page.value = 1;
        axios
            .get(
                `https://funday.asia/api/storyWeb/ClassifyPg.asp?PG=${page.value}&CategoryId=9996&member_id=${user.mid}`
            )
            .then((res) => {
                console.log(res);
                // const arr = res.data[cate];
                // categoryList.value = arr;
                // page.value++;
                // addCategory(id, cate);
            });
    };

    const addCategory = (id, cate) => {
        return new Promise((resolve, reject) => {
            axios
                .get(
                    `https://funday.asia/api/storyWeb/ClassifyPg.asp?PG=${page.value}&CategoryId=${id}&member_id=${user.mid}`
                )
                .then((res) => {
                    if (res.data[cate].length === 0) return;
                    const arr = res.data[cate];
                    arr.forEach((el) => {
                        categoryList.value.push(el);
                    });
                    page.value++;
                    resolve();
                });
        });
    };
    //like action
    const fnLike = (id) => {
        return new Promise((resolve, reject) => {
            if (!user.isLogin) {
                loginStatus.$patch({
                    status: true,
                });
                return;
            }
            if (isClick.value) return;
            isClick.value = true;
            axios
                .post(
                    `https://funday.asia/api/storyWeb/Behavior.asp?member_id=${user.mid}&ref_id=${id}&action=favorite`
                )
                .then((res) => {
                    console.log(res, id);
                    isClick.value = false;
                    resolve();
                });
        });
    };

    //click action 點擊計算
    const fnCount = (id) => {
        axios
            .post(
                `https://funday.asia/api/storyWeb/Behavior.asp?member_id=${user.mid}&ref_id=${id}&action=click`
            )
            .then((res) => {
                console.log(res);
                if (res.data.State == 1) {
                    isCount.value = true;
                }
            });
    };

    //dictionary get words
    const getWords = (str, md5str) => {
        return new Promise((resolve, reject) => {
            if (!user.isLogin) {
                loginStatus.$patch({
                    status: true,
                });
                return;
            }
            noWord.value = false;
            baseForm.value = "";
            keyWordResult.value = "";
            axios
                .get(
                    `https://funday.asia/api/dr.eye.asp?keyword=${str}&Fundaykey=${md5str}`
                )
                .then((res) => {
                    if (res.data.baseform == undefined) {
                        noWord.value = true;
                        resolve();
                        return;
                    }
                    baseForm.value = res.data.baseform.text;
                    keyWordResult.value = res.data;
                    let keys = Object.keys(res.data);
                    let re = /@/gi;
                    let re2 = /,/gi;

                    for (var i = 0; i < keys.length; i++) {
                        let fixWord = [];
                        for (
                            var j = 0;
                            j < res.data[keys[i]].text.length;
                            j++
                        ) {
                            fixWord.push(
                                keyWordResult.value[keys[i]].text[j]
                                    .toString()
                                    .replace(re, "")
                                    .replace(re2, " ")
                            );
                        }
                        keyWordResult.value[keys[i]].text = fixWord;
                    }
                    collectCheck(str);
                    word.value = str;
                    resolve();
                });
        });
    };

    //查詢已收錄字典
    const collectCheck = (str) => {
        axios
            .get(
                `https://funday.asia/NewMylessonmobile/api/vocabulary?customer_id=${user.cid}&member_id=${user.mid}&Enkeyword=${str}&Chkeyword=`
            )
            .then((res) => {
                if (res.data.En_word == "") {
                    isCollect.value = false;
                } else {
                    isCollect.value = true;
                }
            });
    };

    //會員單字收錄
    const fnWordsCollect = () => {
        //api/Article/WordsCollect
        const status = isCollect.value ? "D" : "C";
        axios
            .get(
                `https://funday.asia/NewMylessonmobile/${status}/api/vocabulary/join?customer_id=${user.cid}&member_id=${user.mid}&Enkeyword=${word.value}&Chkeyword=`
            )
            .then((res) => {
                isCollect.value = !isCollect.value;
            });
    };

    //打卡活動 檢查打卡
    const fnCheckinRecord = () => {
        return new Promise((resolve, reject) => {
            axios
                .get(
                    `https://funday.asia/api/StoryWeb/checkin.asp?mindx=${user.mid}`
                )
                .then((res) => {
                    console.log(res);
                    checkIndex.value = Number(res.data.checkinC);
                    checkDevice.value = res.data.device;
                    if (res.data.checkinToday == 0) {
                        isCheck.value = false;
                        checkIndex.value++;
                    } else {
                        isCheck.value = true;
                    }
                    resolve();
                });
        });
    };

    //打卡活動 打卡
    const fnCheckinUpdate = () => {
        return new Promise((resolve, reject) => {
            axios
                .get(
                    `https://funday.asia/api/StoryWeb/checkin.asp?mindx=${user.mid}&tg=U`
                )
                .then((res) => {
                    console.log(res);
                    checkIndex.value = Number(res.data.checkinC);
                    checkDevice.value = res.data.device;
                    isCheck.value = false;
                    resolve();
                });
        });
    };

    return {
        defaultData,
        banner,
        category,
        cateAesop,
        cateAndersen,
        cateGrimm,
        cateWorld,
        hotBook,
        hotClick,
        talesInfo,
        talesContent,
        talesOthers,
        getIndexData,
        fnLike,
        getTalesData,
        getWords,
        fnWordsCollect,
        fnCount,
        getOthersTales,
        baseForm,
        keyWordResult,
        isCollect,
        word,
        noWord,
        isCount,
        otherEpisode,
        otherStory,
        categoryList,
        getCategory,
        addCategory,
        getMyfav,
        fnCheckinRecord,
        fnCheckinUpdate,
        checkinPop,
        isCheck,
        checkIndex,
        checkDevice,
    };
});
