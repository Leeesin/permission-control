import Vue from "vue";
import Router from "vue-router";
import login from "../views/login.vue";
import admin from "../views/admin.vue";
import editor from "../views/editor.vue";
import test from "../views/test.vue";

import home from "./home.js";

Vue.use(Router)

let constantRouterMap = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: login,
        name: 'login'
    },

    {
        path: '/test',
        component: test,
        name: 'test'
    }
]

const asyncRouterMap = [
    {
        path: '/admin',
        component: admin,
        name: 'admin',
        meta: { role: ['admin'] }, //页面需要的权限
    },
    {
        path: '/editor',
        component: editor,
        name: 'editor',
        meta: { role: ['editor'] }, //页面需要的权限
    }
]

constantRouterMap.push(...home)

console.log(constantRouterMap, 'constantRouterMap');


const routerInstance = new Router({
    routes: constantRouterMap
})


const obj = {
    routerInstance,
    asyncRouterMap
}
export default obj
