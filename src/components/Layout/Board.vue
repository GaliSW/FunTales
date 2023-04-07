<template>
    <div class="message_board_blk" id="message_board" :class="{ boardOn: board }" :style="isBottom">
        <div class="message_blur" @click="fnBoardToggle"></div>
        <div class="board_close" :class="{ remove: board }" @click="fnBoardToggle">
            <div v-for="(item, index) in chatStore.resentMessages">
                <div class="head" v-show="boardNow == index">
                    <div class="userHead">
                        <img v-show="item.fileName !== null" v-cloak :src="item.picture" alt=""
                            class="animate__animated animate__flipInX" />
                        <img v-show="item.fileName == null" src="@/assets/images/board/head_default.svg" alt=""
                            class="animate__animated animate__flipInX" />
                    </div>
                </div>
                <div v-show="boardNow == index" class="animate__animated animate__tada name">
                    <span :class="[item.sex == 1 ? 'male' : 'female']">{{ item.name }}</span>
                </div>
                <div class="text animate__animated animate__flipInX" v-show="boardNow == index">
                    <span class="text_wrapper">
                        <p class="width">{{ item.text }}</p>
                        <p class="first">
                            {{ item.text }}&nbsp;&nbsp;&nbsp;
                        </p>
                        <p class="second">
                            {{ item.text }}&nbsp;&nbsp;&nbsp;
                        </p>
                    </span>
                </div>
            </div>
            <img class="toggle" src="@/assets/images/board/board_close.svg" alt="" />
        </div>

        <div class="board_open" :class="{ open_blk: board }">
            <div class="content" :class="{ add: board }">
                <ul id="content_blk">
                    <li v-for="(item, index) in chatStore.messages">
                        <img v-if="item.fileName !== null" :src="item.picture" alt="" />
                        <img v-else src="@/assets/images/board/head_default.svg" alt="" />
                        <div>
                            <span :class="[item.sex == 1 ? 'male' : 'female']">{{ item.name }}</span>
                            {{ item.text }}
                        </div>
                    </li>
                </ul>
            </div>
            <div class="send_bar">
                <img class="userPic" src="@/assets/images/board/head_default.svg" alt="" v-if="userStore.userPic == ''" />
                <img class="userPic" :src="userStore.userPic" alt="" v-else />
                <div>
                    <input type="text" id="userMessage" @keyup.enter="send" placeholder="說點什麼..." />
                    <img @click="emoji = !emoji" class="emoji" src="@/assets/images/board/emoji.svg" alt="" />
                    <img @click="send" class="send_mobile" src="@/assets/images/board/send.svg" alt="" />
                </div>

                <img class="send_desktop" @click="send" src="@/assets/images/board/send.svg" alt="" />
                <img @click="fnBoardToggle" class="toggle" src="@/assets/images/board/board_open.svg" alt="" />
            </div>
            <div class="emoji_blk" :class="{ emoji_open: emoji }">
                <div class="emoji_wrapper">
                    <ul class="emoji_page1">
                        <li @click="addEmoji($event)">&#128512;</li>
                        <li @click="addEmoji($event)">&#128513;</li>
                        <li @click="addEmoji($event)">&#128514;</li>
                        <li @click="addEmoji($event)">&#128515;</li>
                        <li @click="addEmoji($event)">&#128516;</li>
                        <li @click="addEmoji($event)">&#128517;</li>
                        <li @click="addEmoji($event)">&#128518;</li>
                        <li @click="addEmoji($event)">&#128519;</li>
                        <li @click="addEmoji($event)">&#128520;</li>
                        <li @click="addEmoji($event)">&#128521;</li>
                        <li @click="addEmoji($event)">&#128522;</li>
                        <li @click="addEmoji($event)">&#128523;</li>
                        <li @click="addEmoji($event)">&#128524;</li>
                        <li @click="addEmoji($event)">&#128525;</li>
                        <li @click="addEmoji($event)">&#128526;</li>
                        <li @click="addEmoji($event)">&#128527;</li>
                        <li @click="addEmoji($event)">&#128528;</li>
                        <li @click="addEmoji($event)">&#128529;</li>
                        <li @click="addEmoji($event)">&#128530;</li>
                        <li @click="addEmoji($event)">&#128531;</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useChatStore } from "@/store/chat.js"
import { useUserStore } from "@/store/user.js"
import { loginStore } from "@/store/login";
import * as signalR from "@aspnet/signalr";
import { onMounted, ref, onUnmounted } from 'vue';

const chatStore = useChatStore();
const userStore = useUserStore();
const loginStatus = loginStore();


const connection = ref("")
const board = ref(false);
const emoji = ref(false);
const boardNow = ref(0);
const alert = ref("");
const isBottom = ref("bottom:0px");

const chatUrl = "https://storyapi.funday.asia/chathub";

onMounted(() => {
    window.addEventListener("scroll", onBottom);

    //class socket
    connection.value = new signalR.HubConnectionBuilder().withUrl(chatUrl).build();
    connection.value.start().then(() => {
        connection.value.invoke("JoinRoom", "1")
        chatStore.getMessages();
        chatStore.getRecentMessages(2)
    })

    connection.value.on("RecieveGroupMessage", (e) => {
        chatStore.getRecentMessages(userStore.chatUserId)
        chatStore.getMessages()
    });

    //當前留言板顯示訊息
    setInterval(() => {
        if (boardNow.value < chatStore.resentMessages.length - 1) {
            boardNow.value++
        } else {
            boardNow.value = 0;
        }
    }, 5000);
})

onUnmounted(() => {
    window.removeEventListener("scroll", onBottom)
})

const fnBoardToggle = () => {
    if (board.value) {
        document.body.style.overflowY = "scroll";
    } else {
        document.body.style.overflowY = "hidden";
        fnBoardOpen();
    }
    board.value = !board.value;
    emoji.value = false;
}


//留言板開啟時滾動至最底
const fnBoardOpen = () => {
    const scroll = document.querySelector(".board_open .content");
    scroll.scrollTo(0, scroll.scrollHeight);
}

//當前留言板顯示訊息
const fnBoardMessage = () => {
    if (this.boardNow < this.boardContent.length - 1) {
        this.boardNow++;
    } else {
        this.boardNow = 0;
    }
}

//訊息加入貼圖
const addEmoji = (evt) => {
    const input = document.getElementById("userMessage");

    const emoji = evt.target.innerHTML;
    const prefix = input.value.substring(0, input.selectionStart);
    const suffix = input.value.substring(input.selectionEnd);
    input.value = prefix + emoji + suffix;
}

//送出訊息與過濾
const send = () => {
    if (!userStore.isLogin) {
        login();
        return;
    }
    const input = document.getElementById("userMessage");

    // 超過限制的字數
    const maxChars = 200;
    if (input.value.length > maxChars) {
        input.style.outline = "1px solid #E84149";
        input.style.boxShadow = " 0px 0px 0px 4px rgb(232, 65, 73,0.1)";
        alert("超過字數限制")
        return false;
    } else if (input.value.length == 0) {
        // 未填寫內容
        input.style.borderRadius = "100px";
        input.style.boxShadow = " 0px 0px 0px 4px rgb(232, 65, 73,0.5)";
        input.setAttribute("placeholder", "請填寫內容");
        input.classList.add("input_change");
        return false;
    } else {
        input.style.boxShadow = " 0px 0px 0px 0px";
        input.classList.remove("input_change");
        input.setAttribute("placeholder", "請說點什麼");
        input.style.outline = "none";
    }

    let text; // 過濾後的文字

    // === 過濾前後空格 ===
    text = input.value.replace(/(^[\s]*)|([\s]*$)/g, "");

    //send api
    chatStore.sendMessages(text);

    input.value = "";
    const scroll = document.querySelector(".board_open .content");
    scroll.scrollTo(0, scroll.scrollHeight);
}

const onBottom = () => {
    // if (window.innerWidth < 1200) return;
    const h = document.body.scrollHeight; //網頁的高度
    const c = document.documentElement.scrollTop; //滾動條距離網頁頂部的高度
    const wh = window.innerHeight; //頁面可視化區域高度
    if (Math.ceil(wh + c) >= h - 40) {
        isBottom.value = "bottom:40px"
    } else {
        isBottom.value = "bottom:0px"
    }
}


const login = () => {
    loginStatus.$patch({
        status: true,
    });
};

</script>