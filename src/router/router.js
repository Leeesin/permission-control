import Vue from "vue";
import Router from "vue-router";
import Dashboard from "../views/dashboard.vue";
import Login from "../views/login.vue";

Vue.use(Router)

export const constantRouterMap = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        component: Dashboard,
        name: '首页',
    }
]
export default new Router({
    routes: constantRouterMap
})