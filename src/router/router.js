import {
    createWebHashHistory,
    createWebHistory,
    createRouter,
} from "vue-router";
import Index from "@/components/pages/Index.vue";
import More from "@/components/pages/More.vue";
import Collect from "@/components/pages/Collect.vue";
import Tales from "@/components/pages/Tales.vue";

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition && to.meta.keepAlive) {
        return savedPosition;
    }
    return { left: 0, top: 0 };
};

export const router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(),
    scrollBehavior,
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
