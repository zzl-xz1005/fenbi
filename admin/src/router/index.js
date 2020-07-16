import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Adminall',
    name: 'Adminall',
    component: () => import('../views/Adminall.vue'),
	//重定向
	redirect:"/Adminall/FenbiuserAdd",
	// 下载页面的子路由
	children:[{
		path: 'FenbiuserAdd',
		name: 'FenbiuserAdd',
		component: () => import('../views/Fenbiuser/FenbiuserAdd.vue')
	},
	{
		path: 'FenbiuserEdit',
		name: 'FenbiuserEdit',
		component: () => import('../views/Fenbiuser/FenbiuserEdit.vue')
	},
	{
		path: 'CourseAdd',
		name: 'CourseAdd',
		component: () => import('../views/Course/CourseAdd.vue')
	},
	{
		path: 'CourseEdit',
		name: 'CourseEdit',
		component: () => import('../views/Course/CourseEdit.vue')
	},
	{
		path: 'TeachersAdd',
		name: 'TeachersAdd',
		component: () => import('../views/Teachers/TeachersAdd.vue')
	},
	
	{
		path: 'TeachersEdit',
		name: 'TeachersEdit',
		component: () => import('../views/Teachers/TeachersEdit.vue')
	},
	{
		path: '*',
		name: 'FenbiuserAdd',
		component: () => import('../views/Fenbiuser/FenbiuserAdd.vue')
	}
	]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
