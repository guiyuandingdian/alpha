import Vue from 'vue'
import Router from 'vue-router'
import Index from '../index/Index.vue'
import BeforeEach from './beforeEach'
import Login from '../Login/login.vue'
import Registered from '../Login/Registered.vue'
import Indexs from '../index/Indexs'
import AlphaJs from '../index/AlphaJs'
import AlphaTdjs from '../index/AlphaTdjs'
import Xmlc from '../index/Xmlc'
import Hdgk from '../index/Hdgk'
import APIB from '../index/APIB'
import A_Level from '../index/A_Level'
import Yxph from '../index/Yxpm'
import Cgal from '../index/Cgal'
import AlphaFwys from '../index/AlphaFwys'


// 个人中心

import Home from '../home/Home'
import Bzlc from '../home/Bzlc'
import Sqcd from '../home/Sqcd'
import Ypgb from '../home/Ypgb'
import Xycj from '../home/Xycj'
import Bhcj from '../home/Bhcj'
import Hd from '../home/Hd'
import Xzxx from '../home/Xzxx'
import Wdzx from '../home/Wdzx'
import Ws from '../home/Ws'
import Rlkb from '../home/Rlkb'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: '/indexs',
      children: [
        {
          path: 'AlphaJs',
          name: 'ALPHA项目介绍',
          component: AlphaJs,
        },
        {
          path: 'AlphaFwys',
          name: 'ALPHA服务优势',
          component: AlphaFwys,
        },
        {
          path: 'AlphaTdjs',
          name: 'ALPHA团队介绍',
          component: AlphaTdjs,
        },
        {
          path: 'Xmlc',
          name: '项目流程',
          component: Xmlc,
        },
        {
          path: 'Hdgk',
          name: '活动概览',
          component: Hdgk,
        },
        {
          path: 'APIB',
          name: 'AP&IB',
          component: APIB,
        },
        {
          path: 'A_Level',
          name: 'A-Level',
          component: A_Level,
        },
        {
          path: 'Yxph',
          name: '院校排名',
          component: Yxph,
        },
        {
          path: 'Cgal',
          name: '成功案例',
          component: Cgal,
        }
      ]
    },
    {
      path: '/Indexs',
      name: '首页',
      component: Indexs,
    },
    {
      path: '/Login',
      name: '登录',
      component: Login
    },
    {
      path: '/Registered',
      name: '注册',
      component: Registered
    },
    {
      path: '/Home',
      name: '个人中心',
      component: Home,
      redirect: '/Home/Bzlc',
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: 'Bzlc',
          component: Bzlc,
          meta: {
            title: '步骤流程'
          }
        },
        {
          path: 'Sqcd',
          component: Sqcd,
          meta: {
            title: '申请清单'
          }
        }, 
        {
          path: 'Ypgb',
          component: Ypgb,
          meta:{
            title:'预评估表_Pre－Assessment Form'
          }
        },
        {
          path: 'Rlkb',
          component: Rlkb,
          meta:{
            title:'日历看板'
          }
        },
        {
          path: 'Xycj',
          component: Xycj,
          meta:{
            title:'学业成绩'
          }
        },
        {
          path: 'Bhcj',
          component: Bhcj,
          meta:{
            title:'标化成绩'
          }
        },
        {
          path: 'Hd',
          component: Hd,
          meta: {
            title: '活动'
          }
        },
        {
          path: 'Xzxx',
          component: Xzxx,
          meta: {
            title: '选择学校'
          }
        },
        {
          path: 'Wdzx',
          component: Wdzx,
          meta: {
            title: '我的择校'
          }
        },
        {
          path: 'Ws',
          component: Ws,
          meta: {
            title: '文书'
          }
        },
      ]
    }
  ]
})

router.beforeEach(BeforeEach)

export default router
