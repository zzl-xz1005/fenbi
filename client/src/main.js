import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import jquery from 'jquery'
import VDistpicker from 'v-distpicker'
import routes from "./router/routes"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css'
Vue.use(ElementUI)
Vue.component('v-distpicker', VDistpicker)//地区选择器
Vue.prototype.$axios=axios
Vue.prototype.$jquery=jquery
Vue.prototype.$routes=routes
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
