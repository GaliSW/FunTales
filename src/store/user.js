import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore({
    id: "user",
    state: () => ({
        isLogin: false,
        mid: "",
        cid: "",
        order: [],
        orderResault: [],
        orderList: "",
        token: "",
        chatUserId: 0,
        userPic: "",
        sex: "",
        level: "",
        name: "",
    }),

    actions: {
        logout() {
            this.$patch({
                isLogin: false,
            });
        },

        async login(user, password) {
            const userData = await apiLogin(user, password);

            this.$patch({
                isLogin: false,
                mid: "",
                cid: "",
            });
        },
        //取得單字庫
        async apiGetList(mid, cid) {
            await axios
                .get(
                    `https://funday.asia/NewMylessonMobile/api/WordCard?member_id=${mid}&customer_id=${cid}`
                )
                .then((res) => {
                    res.data.data.forEach((array) => {
                        this.order.push(
                            array[0]["En_word"].slice(0, 1).toUpperCase()
                        );
                        this.orderResault.push(array);

                        this.orderList += array[0]["En_word"]
                            .slice(0, 1)
                            .toUpperCase();
                    });
                });
            this.compare();
        },
        //單字庫比對
        compare() {
            const allLi = document.querySelectorAll(".alphabet ul li");

            allLi.forEach((item) => {
                if (this.orderList.indexOf(item.innerText) > -1) {
                    item.style.color = "#000";
                } else {
                    item.style.color = "#7f7f7f";
                }
            });
        },
    },
});
