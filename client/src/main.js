import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import routes from "./router/routes"
Vue.prototype.$axios=axios
Vue.prototype.$routes=routes
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
