import Vue from "vue";
import Vuex from "vuex";

import currentUser from "./modules/current-user";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        currentUser
    }
})
