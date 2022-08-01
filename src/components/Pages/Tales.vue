<template>
    <section class="tales_top_pc">
        <div class="tales_book">
            <div class="tales_img">
                <img src="@/assets/images/list_img.svg" alt="">
            </div>
            <div class="tales_content">
                <div class="classify">
                    <img src="@/assets/images/tale_icon.png" alt="">
                    <span>安徒生童話 Andersen's Fairytales</span>
                </div>
                <div class="title">
                    <span class="en">Alice in Wonderland Chap 4-10 The Rabbit Sends in a Little Bill</span>
                    <span class="ch">愛麗絲夢遊仙境 第四章之十一</span>
                </div>
                <div class="content" id="font_para">
                    <div>
                        ”Nay, this is too much!” said the learned man. ”It is just as one takes it!” said the shadow.
                        ”It
                        will do you much good to travel! Will you be my shadow? You shall have everything free on the
                        journey!”
                    </div>
                    <div>
                        ”Nay, that is too bad!” said the learned man. ”But it is just so with the wZorld!” said the
                        shadow,
                        ”and so it will be!” and away it went again.
                        The learned man was not at all in the most enviable state; grief and torment followed him, and
                        what
                        he said about the true, and the good, and the beautiful, was, to most persons, like roses for a
                        cow!
                        He was quite ill at last.
                    </div>
                    <div>
                        ”You really look like a shadow!” said his friends to him; and the learned man trembled, for he
                        thought of it.
                        ”You must go to a watering-place!” said the shadow, who came and visited him. ”There is nothing
                        else
                        for it! I will take you with me for old acquaintance’ sake; I will pay the travelling expenses,
                        and
                        you
                    </div>
                    <div>
                        ”You really look like a shadow!” said his friends to him; and the learned man trembled, for he
                        thought of it.
                        ”You must go to a watering-place!” said the shadow, who came and visited him. ”There is nothing
                        else
                        for it! I will take you with me for old acquaintance’ sake; I will pay the travelling expenses,
                        and
                        you
                    </div>
                    <div>
                        ”You really look like a shadow!” said his friends to him; and the learned man trembled, for he
                        thought of it.
                        ”You must go to a watering-place!” said the shadow, who came and visited him. ”There is nothing
                        else
                        for it! I will take you with me for old acquaintance’ sake; I will pay the travelling expenses,
                        and
                        you
                    </div>
                </div>
            </div>
        </div>
        <div class="tales_bar">
            <div class="time_bar">
                <span>05:34</span>
                <div>
                    <div class="progress"></div>
                </div>
                <span>11:00</span>
            </div>
            <div class="control_bar">
                <div class="left" @click="fontChange">字型切換</div>
                <div class="center">
                    <img src="@/assets/images/prev.svg" alt="">
                    <img src="@/assets/images/play.svg" alt="">
                    <img src="@/assets/images/next.svg" alt="">
                </div>
                <div class="right">
                    <div class="like" @click="like">
                        <img src="@/assets/images/tale_heart_off.svg" alt="">
                        <!-- <img src="@/assets/images/tale_heart_on.svg" alt=""> -->
                        <span>收藏</span>
                    </div>
                    <div @click="share">
                        <img src="@/assets/images/share.svg" alt="">
                        <span>分享</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="tales_bottom_pc">
        <div class="others">
            <div class="title">
                <div>
                    <h1>其他集數</h1>
                    <span>more</span>
                </div>
            </div>
            <div class="list">
                <img src="@/assets/images/bookself.png" alt="">
                <ul>
                    <li>
                        <img src="@/assets/images/list_img.svg" alt="" @click="goTales">
                        <div class="tool_bar">
                            <span class="watch">3341次</span>
                            <span class="favorite">
                                <img src="@/assets/images/heart_off.svg" alt="">
                            </span>
                        </div>
                        <div class="book_name">
                            <span>
                                The Adventures of Tom Sawyer Chap6-3
                            </span>
                            <span>湯姆歷險記 第六章 之三</span>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/images/list_img.svg" alt="">
                        <div class="tool_bar">
                            <span class="watch">3341次</span>
                            <span class="favorite">
                                <img src="@/assets/images/heart_off.svg" alt="">
                            </span>
                        </div>
                        <div class="book_name">
                            <span>
                                The Adventures of Tom Sawyer Chap6-3
                            </span>
                            <span>湯姆歷險記 第六章 之三</span>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/images/list_img.svg" alt="">
                        <div class="tool_bar">
                            <span class="watch">3341次</span>
                            <span class="favorite">
                                <img src="@/assets/images/heart_off.svg" alt="">
                            </span>
                        </div>
                        <div class="book_name">
                            <span>
                                The Adventures of Tom Sawyer Chap6-3
                            </span>
                            <span>湯姆歷險記 第六章 之三</span>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/images/list_img.svg" alt="">
                        <div class="tool_bar">
                            <span class="watch">3341次</span>
                            <span class="favorite">
                                <img src="@/assets/images/heart_off.svg" alt="">
                            </span>
                        </div>
                        <div class="book_name">
                            <span>
                                The Adventures of Tom Sawyer Chap6-3
                            </span>
                            <span>湯姆歷險記 第六章 之三</span>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/images/list_img.svg" alt="">
                        <div class="tool_bar">
                            <span class="watch">3341次</span>
                            <span class="favorite">
                                <img src="@/assets/images/heart_off.svg" alt="">
                            </span>
                        </div>
                        <div class="book_name">
                            <span>
                                The Adventures of Tom Sawyer Chap6-3
                            </span>
                            <span>湯姆歷險記 第六章 之三</span>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/images/list_img.svg" alt="">
                        <div class="tool_bar">
                            <span class="watch">3341次</span>
                            <span class="favorite">
                                <img src="@/assets/images/heart_off.svg" alt="">
                            </span>
                        </div>
                        <div class="book_name">
                            <span>
                                The Adventures of Tom Sawyer Chap6-3
                            </span>
                            <span>湯姆歷險記 第六章 之三</span>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/images/list_img.svg" alt="" @click="goTales">
                        <div class="tool_bar">
                            <span class="watch">3341次</span>
                            <span class="favorite">
                                <img src="@/assets/images/heart_off.svg" alt="">
                            </span>
                        </div>
                        <div class="book_name">
                            <span>
                                The Adventures of Tom Sawyer Chap6-3
                            </span>
                            <span>湯姆歷險記 第六章 之三</span>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/images/list_img.svg" alt="" @click="goTales">
                        <div class="tool_bar">
                            <span class="watch">3341次</span>
                            <span class="favorite">
                                <img src="@/assets/images/heart_off.svg" alt="">
                            </span>
                        </div>
                        <div class="book_name">
                            <span>
                                The Adventures of Tom Sawyer Chap6-3
                            </span>
                            <span>湯姆歷險記 第六章 之三</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="others">
            <div class="title">
                <div>
                    <h1>其他故事</h1>
                    <span>others</span>
                </div>
            </div>
            <div class="list">
                <img src="@/assets/images/bookself.png" alt="">
                <ul>
                    <li>
                        <img src="@/assets/images/list_img.svg" alt="" @click="goTales">
                        <div class="tool_bar">
                            <span class="watch">3341次</span>
                            <span class="favorite">
                                <img src="@/assets/images/heart_off.svg" alt="">
                            </span>
                        </div>
                        <div class="book_name">
                            <span>
                                The Adventures of Tom Sawyer Chap6-3
                            </span>
                            <span>湯姆歷險記 第六章 之三</span>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/images/list_img.svg" alt="">
                        <div class="tool_bar">
                            <span class="watch">3341次</span>
                            <span class="favorite">
                                <img src="@/assets/images/heart_off.svg" alt="">
                            </span>
                        </div>
                        <div class="book_name">
                            <span>
                                The Adventures of Tom Sawyer Chap6-3
                            </span>
                            <span>湯姆歷險記 第六章 之三</span>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/images/list_img.svg" alt="">
                        <div class="tool_bar">
                            <span class="watch">3341次</span>
                            <span class="favorite">
                                <img src="@/assets/images/heart_off.svg" alt="">
                            </span>
                        </div>
                        <div class="book_name">
                            <span>
                                The Adventures of Tom Sawyer Chap6-3
                            </span>
                            <span>湯姆歷險記 第六章 之三</span>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/images/list_img.svg" alt="">
                        <div class="tool_bar">
                            <span class="watch">3341次</span>
                            <span class="favorite">
                                <img src="@/assets/images/heart_off.svg" alt="">
                            </span>
                        </div>
                        <div class="book_name">
                            <span>
                                The Adventures of Tom Sawyer Chap6-3
                            </span>
                            <span>湯姆歷險記 第六章 之三</span>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/images/list_img.svg" alt="">
                        <div class="tool_bar">
                            <span class="watch">3341次</span>
                            <span class="favorite">
                                <img src="@/assets/images/heart_off.svg" alt="">
                            </span>
                        </div>
                        <div class="book_name">
                            <span>
                                The Adventures of Tom Sawyer Chap6-3
                            </span>
                            <span>湯姆歷險記 第六章 之三</span>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/images/list_img.svg" alt="">
                        <div class="tool_bar">
                            <span class="watch">3341次</span>
                            <span class="favorite">
                                <img src="@/assets/images/heart_off.svg" alt="">
                            </span>
                        </div>
                        <div class="book_name">
                            <span>
                                The Adventures of Tom Sawyer Chap6-3
                            </span>
                            <span>湯姆歷險記 第六章 之三</span>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/images/list_img.svg" alt="" @click="goTales">
                        <div class="tool_bar">
                            <span class="watch">3341次</span>
                            <span class="favorite">
                                <img src="@/assets/images/heart_off.svg" alt="">
                            </span>
                        </div>
                        <div class="book_name">
                            <span>
                                The Adventures of Tom Sawyer Chap6-3
                            </span>
                            <span>湯姆歷險記 第六章 之三</span>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/images/list_img.svg" alt="" @click="goTales">
                        <div class="tool_bar">
                            <span class="watch">3341次</span>
                            <span class="favorite">
                                <img src="@/assets/images/heart_off.svg" alt="">
                            </span>
                        </div>
                        <div class="book_name">
                            <span>
                                The Adventures of Tom Sawyer Chap6-3
                            </span>
                            <span>湯姆歷險記 第六章 之三</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="tales_top_mb">
        <div class="title">
            <span class="en">Alice in Wonderland Chap 4-10 The Rabbit Sends in a Little Bill</span>
            <span class="ch">愛麗絲夢遊仙境 第四章之十一</span>
        </div>
        <div class="book">
            <img src="@/assets/images/list_img.svg" alt="">
        </div>
        <div class="content">
            <div>
                ”Nay, this is too much!” said the learned man. ”It is just as one takes it!” said the shadow.
                ”It
                will do you much good to travel! Will you be my shadow? You shall have everything free on the
                journey!”
            </div>
            <div>
                ”Nay, that is too bad!” said the learned man. ”But it is just so with the wZorld!” said the
                shadow,
                ”and so it will be!” and away it went again.
                The learned man was not at all in the most enviable state; grief and torment followed him, and
                what
                he said about the true, and the good, and the beautiful, was, to most persons, like roses for a
                cow!
                He was quite ill at last.
            </div>
            <div>
                ”You really look like a shadow!” said his friends to him; and the learned man trembled, for he
                thought of it.
                ”You must go to a watering-place!” said the shadow, who came and visited him. ”There is nothing
                else
                for it! I will take you with me for old acquaintance’ sake; I will pay the travelling expenses,
                and
                you
            </div>
            <div>
                ”You really look like a shadow!” said his friends to him; and the learned man trembled, for he
                thought of it.
                ”You must go to a watering-place!” said the shadow, who came and visited him. ”There is nothing
                else
                for it! I will take you with me for old acquaintance’ sake; I will pay the travelling expenses,
                and
                you
            </div>
            <div>
                ”You really look like a shadow!” said his friends to him; and the learned man trembled, for he
                thought of it.
                ”You must go to a watering-place!” said the shadow, who came and visited him. ”There is nothing
                else
                for it! I will take you with me for old acquaintance’ sake; I will pay the travelling expenses,
                and
                you
            </div>
        </div>
    </section>
    <section class="tool_bar_mb">
        <img src="@/assets/images/tale_heart_off.svg" alt="">
        <div>
            <img src="@/assets/images/prev.svg" alt="">
            <img src="@/assets/images/play.svg" alt="">
            <img src="@/assets/images/next.svg" alt="">
        </div>
        <img src="@/assets/images/share.svg" alt="" @click="share">
    </section>
    <div class="share_blk" v-if="shareStatus">
        <div class="share_top">
            <span>分享</span>
            <img src="@/assets/images/share_close.svg" alt="close" style="cursor: pointer" @click="share" />
        </div>
        <div class="share_center">
            <div class="share_wrapper">
                <div class="copy_icon">
                    <img @click="copyURL" src="@/assets/images/copy.svg" alt="" />
                    <p>複製連結</p>
                </div>
                <div>
                    <a :href="lineurl" title="FunMusic" target="_blank"><img src="@/assets/images/Line.svg"
                            alt="" /></a>
                    <p>Line</p>
                </div>
                <div>
                    <a :href="fburl"><img src="@/assets/images/FB.svg" alt="" /></a>
                    <p>FB</p>
                </div>
                <div>
                    <a :href="emailurl" target="_blank"><img src="@/assets/images/Gmail.svg" alt="" /></a>
                    <p>Gmail</p>
                </div>
                <div>
                    <a :href="linkedinurl" target="_blank" title="Share on LinkedIn"><img
                            src="@/assets/images/Linkedin.svg" alt="" /></a>
                    <p>Linkedin</p>
                </div>
            </div>
        </div>
        <div class="share_bottom">
            <input id="copyUrl" type="text" :value="URL" readonly unselectable="on" />
            <span @click="copyURL">複製</span>
        </div>
    </div>
</template>
<script setup>
import { useHeaderStore } from "@/store/header.js"
import { onMounted, onUnmounted, ref } from "vue";


//store
const header = useHeaderStore();

//data
const innerHeight = ref(0);
const shareStatus = ref(false);
const URL = ref(window.location.href);
header.nowPage = 2;
header.title = "";

onMounted(() => {
    window.addEventListener("resize", onResize);

    innerHeight.value = `height:${window.innerHeight - 120}px`;
})



const onResize = () => {
    if (window.innerWidth < 991) {
        document.getElementById("footer").style.display = "none"
    } else {
        document.getElementById("footer").style.display = "flex"
    }
    innerHeight.value = `height:${window.innerHeight - 120}px`;
};

const fontChange = () => {
    const para = document.getElementById("font_para");
    if (para.classList.contains("font")) {
        para.classList.remove("font");
    } else {
        para.classList.add("font");
    }
}

const share = () => {
    shareStatus.value = !shareStatus.value;
}

const copyURL = () => {
    var url = document.getElementById("copyUrl");
    url.select();
    document.execCommand("copy");
}

</script>