import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/TextRecognition',
    name: 'Index',
    component: () => import('@/views/Index'),
    children: [
      {
        path: '/TextRecognition',
        name: 'TextRecognition',
        component: () => import('@/views/TextRecognition'),
        meta: {
          routeTitle: '文本识别',
          type: 0
        }
      },
      {
        path: '/TableAutoDR',
        component: () => import('@/views/TableAutoDR/TableAutoDR'),
        meta: {
          routeTitle: '表格自动检测识别',
          type: 0
        }
      },
      {
        path: '/TableRecognition',
        component: () => import('@/views/TableRecognition/TableRecognition'),
        meta: {
          routeTitle: '表格识别',
          type: 0
        }
      },
      {
        path: '/RlineTableRecognition',
        component: () => import('@/views/TableRecognition/RlineTableRecognition'),
        meta: {
          routeTitle: '实线表格识别',
          type: 0
        }
      }
    ]
  },
  {
    path: '/PersonalCenter',
    redirect: '/PersonalCenter/text',
    name: 'PersonalCenter',
    component: () => import('@/views/PersonalCenter/PersonalCenter'),
    meta: {
      routeTitle: '个人中心',
      type: 0
    },
    children: [
      {
        path: '/PersonalCenter',
        component: () => import('@/views/PersonalCenter/Text/Text'),
        meta: {
          routeTitle: '文本识别记录',
          type: 1
        }
      },
      {
        path: 'tableDR',
        component: () => import('@/views/PersonalCenter/TableDR/TableDR'),
        meta: {
          routeTitle: '表格记录1',
          type: 1
        }
      },
      {
        path: 'table',
        component: () => import('@/views/PersonalCenter/Table/Table'),
        meta: {
          routeTitle: '表格记录2',
          type: 1
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
