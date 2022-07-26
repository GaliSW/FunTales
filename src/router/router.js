import { createWebHashHistory, createRouter } from "vue-router";
import Index from "@/components/pages/Index.vue";
import More from "@/components/pages/More.vue";
import Collect from "@/components/pages/Collect.vue";
import Tales from "@/components/pages/Tales.vue";

export const router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Index",
            component: Index,
        },
        {
            path: "/Category",
            name: "Category",
            component: More,
        },
        {
            path: "/MyFavorite",
            name: "MyFavorite",
            component: Collect,
        },
        {
            path: "/Tales",
            name: "Tales",
            component: Tales,
        },
    ],
});
