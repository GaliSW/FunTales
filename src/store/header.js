import { defineStore, acceptHMRUpdate } from "pinia";
import axios from "axios";

export const useHeaderStore = defineStore({
    id: "header",
    state: () => ({
        nowPage: 1,
        title: "",
    }),
});
