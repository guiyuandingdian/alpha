import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'
import router from '../router/index'
import jsHelper from '../assets/set'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: '',
    checked: false,
    checkeds: false,
    loading: false,
    loadings: false,
    loadingss: false,
    List: {
      "basic": //基本信息
      {
        "name": "张三",//姓名
        "enname": "", //英文名
        "sex": "2", //姓名
        "birthday": "1996-2-5", //出生年月日
        "country": "中华人民共和国", //国籍
        "city": '濮阳市', //城市
        "inschool": "象牙山小学", //所在学校
        "system": "全日制", //课程体制
        "ingrade": '9', //在读年级
        "finishyear": "2018", //毕业年份
        "phone": "", //电话
        "email": "189190@qq.com" //邮箱
      },
      "aca": //学业信息
      {
        "d_country": "", //意向留学国家
        "d_school": "", //梦校
        "d_major": "", //意向留学专业
        "insubjects": "", //在读科目
        "nowranking": "", //目前成绩排名
        "nowgpa": "" //目前GPA
      },
      "back": //学生背景
      {
        "honor": "", //荣誉及奖项
        "active": "",  //课外活动
        "hobby": "" //个人爱好
      },
      "que": { //Student Questionnaire
        "an_one": "", //问题1
        "an_two": "",//问题2
        "an_three": "",//问题3
        "an_four": ""//问题4
      },
      "stand": { //标化成绩
        "tdate": "", //TOEFL／IELTS 考试日期
        "tscore": "", //TOEFL／IELTS 考试总分
        "tread": "", //TOEFL／IELTS 阅读
        "twriting": "", //TOEFL／IELTS 写作
        "tspeak": "", //TOEFL／IELTS 口语
        "tlisten": "", //TOEFL／IELTS 听力
        "sdate": "", //SAT 考试日期
        "sscore": "", //SAT 考试总分
        "sread": "", //SAT 阅读与语法
        "smath": "", //SAT 数学
        "swriting": "", //SAT 作文成绩
        "adate": "", //ACT 考试日期
        "ascore": "", //ACT 考试总分
        "aenglish": "", //ACT 英语成绩
        "amath": "",//ACT 数学成绩
        "ascience": "", //ACT 科学成绩
        "aread": "", //ACT 阅读成绩
        "awriting": "" //ACT 写作成绩
      },
      "sw": [], //SAT-2 成绩显示
      "res": [] //顾问反馈
    },
  },
  getters: {
    GET_USER(state) {
      //先从state里面获取用户登录信息
      let user = state.user;
      //如果 state 里面获取不到，那么从localStorage里面获取
      if (!user) {
        user = JSON.parse(window.localStorage.getItem('user') || "")
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
    },
    tlogingss(state) {
      state.loadings = false
    },
    tlogingss(state) {
      state.loadingss = false
    },
    settoken(value){
      var curTime = +604800;
      localStorage.setItem("token",{value,time:curTime});
  },
    deltoken(state) {
      state.token = ''
      sessionStorage.removeItem('token')
    },
  },
  actions: {
    //获取验证码
    phoneCode({ commit }, phone) {
      axios.post("/phoneCode", { phone }).then(res => {
        if (res.data.status == 1) {
          //成功
        } else if (res.data.status == 1) {
          alert('请重新获取')
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
      store.commit("logings")
      axios.post("/login", logins).then(res => {
        if (res.data.status == 1) {
          var token = res.data.user
          store.commit("settoken",token);
          router.push("/Home")
        }else{
          alert(res.data.message)
          store.commit("tlogings")
        }
      })

    },

    //账号密码登录
    Elogins({ commit }, login) {
      store.commit("logingss")
      axios.post("/elogin", qs.stringify(login)).then(res => {
        if (res.data.status == 1) {
          var token = res.data.user
          jsHelper.localStorage.set("token",token,168)
          router.push("/Home")
        } else {
          store.commit("tlogingss")
        }
      })
    },

    //获取个人信息
    Predict({ commit }) {
      axios.post("/Predict").then(res => {
        if (res.data.status == 1) {
          console.log(res)
        } else {
          store.commit("deltoken");
        }
      })
    },


    // 提交学业成绩
    Predict_xy({ commit }) {
      axios.post("/Predict").then(res => {
        if (res.data.status == 1) {
          console.log(res)
        } else {
          store.commit("deltoken");
        }
      })
    }

  }
})


export default store
