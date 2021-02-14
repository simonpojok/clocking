require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';

import router from "./Router";
import store from "./Store";
import App from './App.vue'

Vue.use(VueRouter)

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {App}
})

