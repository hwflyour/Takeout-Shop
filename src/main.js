// 入口js
import Vue from 'vue';
// @ts-ignore
import App from "./App.vue";
import router from '@/router'


Vue.config.productionTip = false
new Vue({
    el: '#app',
    render: h => h(App),
    router
})