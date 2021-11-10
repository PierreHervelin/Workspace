import Vue from 'vue'
import App from './App.vue'
import { router } from './router'

export const DUMMY_TOKEN=process.env. ID_DUMMY

new Vue({
    router,
    render:h=>h(App)
}).$mount('#app')