import Vue from 'vue'
import App from './App.vue'
import elementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import obj from "./router/router.js";
import Cookies from 'js-cookie'
import store from "./store/index.js";
import "./utils/permission.js";

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$cookie = Cookies

Vue.use(elementUI)
new Vue({
  router: obj.routerInstance,
  store,
  render: h => h(App)
}).$mount('#app')




