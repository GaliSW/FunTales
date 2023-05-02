import { defineStore, acceptHMRUpdate } from "pinia";
import { useUserStore } from "./user";
import { useRouter } from "vue-router";
import axios from "axios";
import { router } from "../router/router";
import { useCommonStore } from "@/store/common.js";

export const loginStore = defineStore({
    id: "login",
    state: () => ({
        router: useRouter(),
        page: "Modal01",
        lastPage: 0,
        status: false,
        fb: false,
        google: false,
    }),
    actions: {
        //* === Previous Modal ===
        async back() {
            await this.$patch({
                page: this.lastPage,
            });
        },

        //* ===  Close Modal ===
        close() {
            this.$patch({
                page: "Modal01",
                lastPage: 0,
                status: false,
            });
        },

        //* === Token check ===
        tokenCheck(token) {
            const user = useUserStore();
            const commonStore = useCommonStore();
            axios
                .get(
                    `https://webaspapi.funday.asia/api/User/Login?Token=${token}`
                )
                .then((res) => {
                    if (res.data.IsSuccess) {
                        user.mid = res.data.Content.Mindx;
                        user.cid = res.data.Content.Cindx;
                        user.userPic = res.data.Content.Pic;
                        user.sex = res.data.Content.Sex;
                        user.isLogin = true;
                        this.joinGroup(res.data.Content.Mindx);
                        sessionStorage.setItem("mid", res.data.Content.Mindx);
                        sessionStorage.setItem("cid", res.data.Content.Cindx);
                        localStorage.setItem("fdtk", token);
                        router.push({
                            path: "/",
                        });
                    } else {
                        return false;
                    }
                });
        },

        //* === Mail SignUp ===
        async mailSignUp() {
            const mail = document.getElementById("account").value;
            const regex =
                /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(mail)) {
                alert("信箱格式錯誤");
                return false;
            }
            const pass = document.getElementById("password").value;
            const MobileReg = /^(09)[0-9]{8}$/;
            if (pass == "") {
                alert("請填寫密碼");
                return false;
            } else if (!pass.match(MobileReg)) {
                alert("請輸入手機正確格式");
                return false;
            }
            const name = document.getElementById("name").value;
            if (name == "") {
                alert("請填寫中文姓名");
                return false;
            } else {
                var reg = /^[\u4E00-\u9FA5]+$/;
                if (!reg.test(name)) {
                    alert("請填寫中文姓名");
                    return false;
                }
            }
            const sexColumn = document.querySelector(
                "input[name='sex']:checked"
            );
            if (sexColumn == null) {
                alert("請選擇性別");
                return false;
            }
            const sex = sexColumn.value;
            let Adid = 61;
            if (sessionStorage.getItem("ADid")) {
                Adid = sessionStorage.getItem("ADid");
            }
            const json = JSON.stringify({
                ID: mail,
                realname: name,
                sex: sex,
                tel: pass,
                ADid: Adid,
            });
            await axios
                .post("https://funday.asia/api/Application.asp", json)
                .then((res) => {
                    if (res.data.StateId == 0) {
                        alert("此帳號已註冊，請進行登入");
                        this.$patch({
                            page: "Modal03",
                            lastPage: "Modal01",
                        });
                    } else {
                        sessionStorage.setItem("phone", pass);
                        this.$patch({
                            page: "Modal05",
                            lastPage: "Modal02",
                        });
                    }
                });
        },

        //* === Verify SMS Check ===
        joinCheck(status) {
            if (status == "origin") {
                const number = document.getElementById("account").value;
                const json = JSON.stringify({
                    chk: number,
                });
                axios
                    .post("https://funday.asia/api/JoinCheck.asp", json)
                    .then((res) => {
                        if (res.data.StateId == 0) {
                            alert("驗證碼錯誤");
                        } else {
                            alert("成功加入");
                            router.push({
                                name: "ThankYou",
                            });
                            this.$patch({
                                page: "Modal01",
                                lastPage: 0,
                                status: false,
                            });
                        }
                    });
            } else if (status == "new") {
                const number = document.getElementById("account").value;
                const json = JSON.stringify({
                    chk: number,
                });
                axios
                    .post("https://funday.asia/api/JoinCheck.asp", json)
                    .then((res) => {
                        if (res.data.StateId == 0) {
                            alert("驗證碼錯誤");
                        } else {
                            alert("成功加入");
                            router.push({
                                name: "ThankYou",
                            });
                            this.$patch({
                                page: "Modal01",
                                lastPage: 0,
                                status: false,
                            });
                        }
                    });
            }
        },

        //* === Change Phone Number ===
        changeMobile() {
            const newPhone = document.getElementById("new_phone").value;
            const oldPhone = sessionStorage.getItem("phone");
            const MobileReg = /^(09)[0-9]{8}$/;
            if (newPhone == "") {
                alert("請輸入手機號碼");
                return false;
            } else if (!newPhone.match(MobileReg)) {
                alert("請輸入手機正確格式");
                return false;
            } else {
                const json = JSON.stringify({
                    EditTel: newPhone,
                    Tel: oldPhone,
                });
                axios
                    .post("https://funday.asia/api/TelResend.asp", json)
                    .then((res) => {
                        sessionStorage.clearItem("phone");
                    });
            }
        },

        //* === Mail Login ===
        async mailLoginCheck() {
            const commonStore = useCommonStore();
            const user = useUserStore();
            const account = document.getElementById("account").value;
            const pass = document.getElementById("password").value;
            await axios
                .get(
                    `https://webaspapi.funday.asia/api/User/Login?ID=${account}&Password=${pass}`
                )
                .then(async (res) => {
                    if (res.data.IsSuccess) {
                        this.close();
                        user.mid = res.data.Content.Mindx;
                        user.cid = res.data.Content.Cindx;
                        user.userPic = res.data.Content.Pic;
                        user.sex = res.data.Content.Sex;
                        user.isLogin = true;
                        user.token = res.data.Content.Token;
                        sessionStorage.setItem("mid", res.data.Content.Mindx);
                        sessionStorage.setItem("cid", res.data.Content.Cindx);
                        sessionStorage.setItem("pic", res.data.Content.Pic);
                        sessionStorage.setItem("sex", res.data.Content.Sex);
                        localStorage.setItem("fdtk", res.data.Content.Token);
                        this.joinGroup(res.data.Content.Mindx);
                    } else {
                        alert("帳號或密碼錯誤");
                    }
                });
        },

        //* === LogOut ===
        logout() {
            sessionStorage.clear();
            localStorage.removeItem("fdtk");
            location.reload();
        },

        //* === FB SDK GetFbProfile ===
        GetFbProfile(fbLogin) {
            const vm = this;
            //取得用戶個資
            FB.api("/me", "GET", { fields: "id,email" }, function (user) {
                if (user.error) {
                    return false;
                } else {
                    sessionStorage.setItem("id", `FB${user.id}`);
                    sessionStorage.setItem("email", `${user.email}`);
                    vm.fbLoginCheck();
                }
            });
        },

        //* === FB SDK Login ===
        fbLogin(fbLogin) {
            const vm = this;
            FB.getLoginStatus(
                function (response) {
                    if (response.status == "connected") {
                        vm.GetFbProfile(fbLogin);
                    } else if (
                        response.status === "not_authorized" ||
                        response.status === "unknown"
                    ) {
                        //未授權或用戶登出FB網站才讓用戶執行登入動作
                        FB.login(function (response) {
                            if (response.status === "connected") {
                                vm.GetFbProfile(fbLogin);
                            } else {
                                alert("Facebook帳號無法登入");
                            }
                        });
                    }
                },
                { scope: "email" }
            );
        },

        //* === FB Login ===
        fbLoginCheck() {
            const vm = this;
            const user = useUserStore();
            const commonStore = useCommonStore();
            const id = sessionStorage.getItem("id");
            if (id == null) {
                alert("此Facebook帳號尚未註冊");
                vm.$patch({
                    page: "Modal02",
                    fb: true,
                    google: false,
                    lastPage: "Modal01",
                });
            } else {
                axios
                    .get(
                        `https://webaspapi.funday.asia/api/User/Login?FBID=${id}`
                    )
                    .then(async (res) => {
                        if (res.data.IsSuccess) {
                            vm.close();
                            sessionStorage.setItem(
                                "mid",
                                res.data.Content.Mindx
                            );
                            sessionStorage.setItem(
                                "cid",
                                res.data.Content.Cindx
                            );
                            sessionStorage.removeItem("id");
                            sessionStorage.removeItem("email");
                            user.mid = res.data.Content.Mindx;
                            user.cid = res.data.Content.Cindx;
                            localStorage.setItem(
                                "fdtk",
                                res.data.Content.Token
                            );
                            user.isLogin = true;
                            user.token = res.data.Content.Token;
                        } else {
                            alert("此Facebook帳號尚未註冊");
                            vm.$patch({
                                page: "Modal02",
                                fb: true,
                                google: false,
                                lastPage: "Modal01",
                            });
                        }
                    });
            }
        },

        //* === FB SignUp ===
        async fbSignUp() {
            const fbid = sessionStorage.getItem("id");
            const mail = sessionStorage.getItem("email");
            const pass = document.getElementById("password").value;
            const MobileReg = /^(09)[0-9]{8}$/;
            if (pass == "") {
                alert("請填寫密碼");
                return false;
            } else if (!pass.match(MobileReg)) {
                alert("請輸入手機正確格式");
                return false;
            }
            const name = document.getElementById("name").value;
            if (name == "") {
                alert("請填寫中文姓名");
                return false;
            } else {
                var reg = /^[\u4E00-\u9FA5]+$/;
                if (!reg.test(name)) {
                    alert("請填寫中文姓名");
                    return false;
                }
            }
            const sexColumn = document.querySelector(
                "input[name='sex']:checked"
            );
            if (sexColumn == null) {
                alert("請選擇性別");
                return false;
            }
            const sex = sexColumn.value;
            let Adid = 61;
            if (sessionStorage.getItem("ADid")) {
                Adid = sessionStorage.getItem("ADid");
            }
            const json = JSON.stringify({
                ID: fbid,
                FBFemail: mail,
                realname: name,
                sex: sex,
                tel: pass,
                ADid: Adid,
            });
            await axios
                .post("https://funday.asia/api/Application.asp", json)
                .then((res) => {
                    if (res.data.StateId == 0) {
                        alert("此帳號已註冊，請進行登入");
                        this.$patch({
                            page: "Modal03",
                            fb: false,
                            google: false,
                            lastPage: "Modal01",
                        });
                    } else {
                        sessionStorage.setItem("phone", pass);
                        this.$patch({
                            page: "Modal05",
                            lastPage: "Modal02",
                        });
                    }
                });
        },

        //* === google login ===
        async handleCredentialResponse(response) {
            const vm = this;
            const user = useUserStore();
            const commonStore = useCommonStore();
            const token = response.credential;
            var base64Url = token.split(".")[1];
            var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
            var jsonPayload = decodeURIComponent(
                atob(base64)
                    .split("")
                    .map(function (c) {
                        return (
                            "%" +
                            ("00" + c.charCodeAt(0).toString(16)).slice(-2)
                        );
                    })
                    .join("")
            );
            const data = await JSON.parse(jsonPayload);
            axios
                .post(
                    ` https://funday.asia/api/GoogleOAuth/IDCheck.asp?id=${data.sub}&name=${data.name}&email=${data.email}`
                )
                .then((res) => {
                    const state = res.data.State;
                    if (state === "0") {
                        sessionStorage.setItem("email", res.data.email);
                        sessionStorage.setItem("gid", res.data.id);
                        vm.$patch({
                            page: "Modal02",
                            fb: false,
                            google: true,
                            lastPage: "Modal01",
                        });
                    } else {
                        const id = res.data.id;
                        axios
                            .get(
                                `https://webaspapi.funday.asia/api/User/Login?GoogleID=${id}`
                            )
                            .then(async (res) => {
                                if (res.data.IsSuccess) {
                                    vm.close();
                                    sessionStorage.setItem(
                                        "mid",
                                        res.data.Content.Mindx
                                    );
                                    sessionStorage.setItem(
                                        "cid",
                                        res.data.Content.Cindx
                                    );
                                    sessionStorage.removeItem("id");
                                    sessionStorage.removeItem("email");
                                    user.mid = res.data.Content.Mindx;
                                    user.cid = res.data.Content.Cindx;
                                    localStorage.setItem(
                                        "fdtk",
                                        res.data.Content.Token
                                    );
                                    user.isLogin = true;
                                    user.token = res.data.Content.Token;
                                } else {
                                    alert("此Google帳號尚未註冊");
                                    vm.$patch({
                                        page: "Modal02",
                                        fb: false,
                                        google: true,
                                        lastPage: "Modal01",
                                    });
                                }
                            });
                    }
                });
        },

        //* === google signup ===
        async googleSignUp() {
            const mail = sessionStorage.getItem("email");
            const gid = sessionStorage.getItem("gid");
            const pass = document.getElementById("password").value;
            const MobileReg = /^(09)[0-9]{8}$/;
            if (pass == "") {
                alert("請填寫密碼");
                return false;
            } else if (!pass.match(MobileReg)) {
                alert("請輸入手機正確格式");
                return false;
            }
            const name = document.getElementById("name").value;
            if (name == "") {
                alert("請填寫中文姓名");
                return false;
            } else {
                var reg = /^[\u4E00-\u9FA5]+$/;
                if (!reg.test(name)) {
                    alert("請填寫中文姓名");
                    return false;
                }
            }
            const sexColumn = document.querySelector(
                "input[name='sex']:checked"
            );
            if (sexColumn == null) {
                alert("請選擇性別");
                return false;
            }
            const sex = sexColumn.value;
            let Adid = 61;
            if (sessionStorage.getItem("ADid")) {
                Adid = sessionStorage.getItem("ADid");
            }
            const json = JSON.stringify({
                ID: gid,
                FBFemail: mail,
                realname: name,
                sex: sex,
                tel: pass,
                ADid: Adid,
            });
            await axios
                .post("https://funday.asia/api/Application.asp", json)
                .then((res) => {
                    if (res.data.StateId === "0") {
                        alert(res.data.StateMessage);
                        this.$patch({
                            page: "Modal03",
                            fb: false,
                            google: false,
                            lastPage: "Modal01",
                        });
                    } else {
                        sessionStorage.setItem("phone", pass);
                        this.$patch({
                            page: "Modal05",
                            lastPage: "Modal02",
                        });
                    }
                });
        },

        joinGroup(mid) {
            const json = JSON.stringify({
                chatId: 1,
                userId: mid,
            });
            axios
                .post(
                    "https://storyapi.funday.asia/api/Chats/JoinGroup",
                    json,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then((res) => {
                    const user = useUserStore();
                    user.chatUserId = res.data.result.id;
                    sessionStorage.setItem("chatId", res.data.result.id);
                });
        },
    },
});
