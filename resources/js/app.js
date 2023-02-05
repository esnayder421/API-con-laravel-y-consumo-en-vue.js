require('./bootstrap');
import vue from 'vue'
window.Vue = vue


import App from './components/App.vue'


//importamos axios para las peticiones
import VueAxios from 'vue-axios';
import axios from 'axios';


//importamos y configuramos las rutas (vue-router)
import VueRouter from 'vue-router';
import { routes } from './routes'
import Vue from 'vue';
Vue.use(VueAxios, axios)
Vue.use(VueRouter)
const router = new VueRouter({
    mode:'history',
    routes: routes
})

const app = new Vue({
    el:'#app',
    router:router,
    render: h => h(App)
})





