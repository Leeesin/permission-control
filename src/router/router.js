import Vue from "vue";
import Router from "vue-router";
import home from "../views/home.vue";
import login from "../views/login.vue";
import admin from "../views/admin.vue";
import editor from "../views/editor.vue";

Vue.use(Router)

const constantRouterMap = [
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
        path: '/home',
        component: home,
        name: 'home',
        children: [
            {
                path: 'admin',
                component: admin,
                name: 'admin',
                meta: { role: ['admin'] }, //页面需要的权限
            },
            {
                path: 'editor',
                component: editor,
                name: 'editor',
                meta: { role: ['editor'] }, //页面需要的权限
            },
            { path: '*', redirect: '/404', hidden: true }
        ]
    },
]
const asyncRouterMap = [
    {
        path: 'admin',
        component: admin,
        name: 'admin',
        meta: { role: ['admin'] }, //页面需要的权限
    },
    {
        path: 'editor',
        component: editor,
        name: 'editor',
        meta: { role: ['editor'] }, //页面需要的权限
    }
]

const routerInstance = new Router({
    routes: constantRouterMap
})


const obj = {
    routerInstance,
    asyncRouterMap
}
export default obj
