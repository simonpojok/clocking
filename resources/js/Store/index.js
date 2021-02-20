import Vue from 'vue';
import Vuex from 'vuex';
import auth from "./modules/auth";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        auth
    },
    state: {
        count: 0
    },
    mutations: {
        INCREMENT(state) {
            state.count++;
        }
    },
    actions: {}
})

export default store;
