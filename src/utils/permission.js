import Router from "../router/router.js";
import Cookies from 'js-cookie'

let { routerInstance, asyncRouterMap } = Router


const promise = new Promise(function (resolve, reject) {
    // routerInstance.addRoutes(asyncRouterMap)
    // resolve(routerInstance)
});


promise.then(res => {

    // routerInstance.beforeEach((to, from, next) => {

    //     let whiteList = ['login', 'home', 'test']

    //     if (whiteList.includes(to.name)) {
    //         next()
    //     }
    //     else {
    //         let needPermission = to.meta.role
    //         let myPermission = Cookies.get('Token')
    //         needPermission.includes(myPermission) ? havePermission(to, from, next) : noPermission(to, from, next)
    //     }
    // })

    // let havePermission = function (to, from, next) {
    //     next()
    // }
    // let noPermission = function (to, from, next) {
    //     alert('无权限')
    //     next('/login')
    // }

})





