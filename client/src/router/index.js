import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/Download',
    name: 'Download',
    component: () => import('../views/Download.vue')
  },
  {
    path: '/Course',
    name: 'Course',
    component: () => import('../views/Course.vue')
  }, {
    path: '/Questions',
    name: 'Questions',
    component: () => import('../views/Questions.vue')
  }, {
    path: '/Teachers',
    name: 'Teachers',
    component: () => import('../views/Teachers.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
