import { createRouter, createWebHashHistory } from "vue-router";

import Home from '../views/Home.vue'
import ResumeZh from "../views/Resume.cn.vue"
import Resume from "../views/Resume.vue"
import ComponentsView from "../views/Components.vue"

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/components",
        name: "components",
        component: ComponentsView
    },
    {
        path: "/zh/cv",
        name: "zh-cv",
        component: ResumeZh,
    },
    {
        path: "/en/cv",
        name: "cv",
        component: Resume,
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})