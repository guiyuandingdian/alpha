import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex);
const state = {
    checked: false,
    checkeds: false,
    user: {},
    loading:true,
    
}
const getters = {
    setUser: state => {
        return state.user
    }
}
const mutations = {
    editUser(state, arg) {
        state.name = arg;
    }
}
const actions = {
    loginUser (context) {
        axios({
          method: 'post',
          url: '/user',
          data: context.state.user
        })
      }
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
