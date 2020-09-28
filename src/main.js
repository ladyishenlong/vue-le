import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueRouter from 'vue-router';

import home from '@/components/home'
import user from "@/components/user";

Vue.prototype.$axios = axios;
axios.defaults.baseURL='http://localhost:8992/';






Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter);

//路由跳转路径
let router = new VueRouter({
    routes: [
        {path: '/home', component: home},
        {path: '/user', component: user}
    ]
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
}).$mount('#app')
