import Router from "../router/router.js";
import Cookies from 'js-cookie'
import { PassThrough } from "stream";

console.log(routerInstance);

let { routerInstance } = Router

routerInstance.beforeEach((to, from, next) => {
    let whiteList = ['login', 'home']
    if (whiteList.includes(to.name)) {
        next()
    }
    else {
        let needPermission = to.meta.role
        let myPermission = Cookies.get('Token')
        // debugger
        needPermission.includes(myPermission) ? havePermission(to, from, next) : noPermission(to, from, next)
    }

})

let havePermission = function (to, from, next) {
    next()
}
let noPermission = function (to, from, next) {
    alert('无权限')
    routerInstance.push('/login')
}