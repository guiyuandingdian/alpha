// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(ElementUI)
Vue.prototype.axios = axios;
Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'http://api.alphaeducation.net'


// 请求超时时间
axios.defaults.timeout = 10000;


axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization');
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  });

var vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})

