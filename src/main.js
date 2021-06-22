import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './infrastructure/style/global.css'
import App from './application/App.vue'

new Vue({
    el: '#app',
    render: h => h(App)
})
