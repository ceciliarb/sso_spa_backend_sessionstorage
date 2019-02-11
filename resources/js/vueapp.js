import Vue from 'vue'
import router from './router'
import axios_keycloak from './axios_keycloak'
import store from './store'

import App from './components/App'

Vue.prototype.$axios = axios_keycloak

const app = new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    router,
    store,
});
