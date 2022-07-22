import { createWebHistory, createRouter } from "vue-router";
import Index from "../components/Pages/Index.vue";
// import Dictionary from "../components/Dictionary/Search.vue";
// import ThankYou from "../components/ThankYou.vue";

export const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Index",
            component: Index,
        },
    ],
});
