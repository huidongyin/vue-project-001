import Vue from 'vue';
import VueRouter from 'vue-router';
import login from './views/login';
import userView from './views/user/userView';
//4.router.js
Vue.use(VueRouter);

const routes = [
    {path:"/",redirect:"/login",component:login},
    {path:"/login",component:login},
    {path:"/user",component:userView},
]
const router = new VueRouter({routes});

export default router;