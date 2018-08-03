import main from "../components/layout/main.vue";
import admin from "./admin.js";
import editor from "./editor.js";


const routes = [
    {
        path: '/home',
        component: main,
        children: [

        ]
    }
]
routes[0].children.push(...admin)
routes[0].children.push(...editor)

export default routes 