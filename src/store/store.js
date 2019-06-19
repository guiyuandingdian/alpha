import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'
import router from '../router/index'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: '',
    checked: false,
    checkeds: false,
    user: {},
    loading: false,
    loadings: false,
    loadingss: false,
    list: {
      name: 123,
    }
  },
  getters: {
    GET_USER(state) {
      //先从state里面获取用户登录信息
      let user = state.user;
      //如果 state 里面获取不到，那么从localStorage里面获取
      if (!user) {
        user = JSON.parse(window.localStorage.getItem('user') || null)
      }
      return user;
    },
  },
  mutations: {


    editUser(state, user) {
      state.user = user;
    },

    // loding 动画
    loging(state) {
      state.loading = true
    },
    logings(state) {
      state.loadings = true
    },
    logingss(state) {
      state.loadingss = true
    }
  },
  actions: {
    //获取验证码
    phoneCode({ commit }, phone) {
      axios.post("/phoneCode", { phone }).then(res => {
        if (res.data.status == 1) {
          //成功
        }
      })
    },

    //注册账户
    loginUser({ commit }, ruleForm) {
      axios.post("/register", qs.stringify(ruleForm)).then(res => {
        if (src.status == 1) {
          localStorage.setItem(key, value);
        }
      })
      store.commit("loging")
    },

    //手机号登录
    logins({ commit }, logins) {
      axios.post("/login", qs.stringify(logins)).then(res => {
        console.log(res)
        localStorage.user = res.data.user
        store.commit("editUser", res.data.user)
        router.push("/Home")
      })
      store.commit("logings")
    },

    //账号密码登录
    Elogins({ commit }, login) {
      axios.post("/elogin", qs.stringify(login)).then(res => {
      })
      store.commit("logingss")
    }

    //获取个人信息


  }
})


export default store