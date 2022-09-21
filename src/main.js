import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'
// import './assets/css/fontawesome-all.min.css'

Vue.config.productionTip = false

const API_ENDPOINT = process.env.VUE_APP_AMIIBO_API
console.log(API_ENDPOINT);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
