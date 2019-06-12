// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "babel-polyfill"
import store from './store/store'


const baseUrlAddr = 'http://localhost:8085'
Vue.prototype.baseUrlAddr = baseUrlAddr;
Vue.prototype.axios = axios;
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(ElementUI)


axios.defaults.baseURL = baseUrlAddr
axios.defaults.withCredentials=true;
axios.interceptors.response.use(response => {
  if (response.status == 200) {
    return response.data;
  }
  return { code: response.status, msg: "网络连接错误：" + response.status };
});


var vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})

