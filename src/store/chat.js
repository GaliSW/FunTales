import { defineStore } from "pinia";
import { ref } from "vue";
import { useUserStore } from "@/store/user";
import axios from "axios";

export const useChatStore = defineStore("chatStore", () => {
    const user = useUserStore();
    //data
    const messages = ref([]);
    const resentMessages = ref([]);
    const getMsgApi = "https://storyapi.funday.asia/api/Chats/1";
    const getRecentMsgApi =
        "https://storyapi.funday.asia/api/Chats/MostRecentMessage";
    const sendMsgApi = "https://storyapi.funday.asia/api/Chats/Message";
    //actions
    const getMessages = () => {
        axios.get(getMsgApi).then((res) => {
            messages.value = res.data.result.messages;
        });
    };

    const getRecentMessages = (id) => {
        axios.get(`${getRecentMsgApi}/${id}/5`).then((res) => {
            resentMessages.value = res.data.result;
        });
    };

    const sendMessages = (str) => {
        const json = JSON.stringify({
            roomId: "1",
            chatUserId: user.chatUserId,
            text: str,
        });
        axios
            .post(sendMsgApi, json, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {});
    };
    return {
        messages,
        resentMessages,
        getMessages,
        getRecentMessages,
        sendMessages,
    };
});
