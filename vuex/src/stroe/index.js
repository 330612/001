import Vue from 'vue';
import Vuex from 'vuex';
//vuex日志插件，可以记录每一步mutation
import createLogger from 'vuex/dist/logger';
import number from './modules/number'

Vue.use(Vuex);


const store = new Vuex.Store({
    modules: {
        number
    },
    state: {
        a: 100,
        b: 200
    },
    plugins: [createLogger()]
});

export default store;
