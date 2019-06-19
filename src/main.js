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
// axios.defaults.withCredentials = true;

// 请求超时时间
axios.defaults.timeout = 10000;


export function Post(url, data) {
  /*
   * 采用递归算法将参数中的      Array型       数据进行转化
   */
  function searchArray(data) {
    Object.keys(data).forEach((key) => {
      if ((typeof data[key]) === 'array') {
        data[key] = JSON.stringify(data[key]) // 这里必须使用内置JSON对象转换
      } else if ((typeof data[key]) === 'object') {
        searchArray(data[key])
      }
    })
  }
  searchArray(data); //递归转化Array
  let params = qs.stringify(data); //用qs模块转化参数
  return new Promise((resolve, reject) => {
    axios.post(url, params).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err);
    })
  })
}
export function Get(url, data) {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: data })
      .then(response => {
        console.log(response)
        resolve(response.data);
      }, err => {
        reject(err);
      })
  })
}

var vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})

