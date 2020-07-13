import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
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
	redirect: '/Course/CourseNav0',
	component: () => import('../views/Course.vue'),
	children: [{
		path: 'CourseNav0',
		name: 'CourseNav0',
		component: () => import('@/views/course/CourseBox0.vue')
	},
	{
		path: 'CourseNav1',
		name: 'CourseNav1',
		component: () => import('@/views/course/CourseBox1.vue')
	},
	{
		path: 'CourseNav2',
		name: 'CourseNav2',
		component: () => import('@/views/course/CourseBox2.vue')
	},
	{
		path: 'CourseNav3',
		name: 'CourseNav3',
		component: () => import('@/views/course/CourseBox3.vue')
	},
	{
		path: 'CourseNav4',
		name: 'CourseNav4',
		component: () => import('@/views/course/CourseBox4.vue')
	},
	{
		path: 'CourseNav5',
		name: 'CourseNav5',
		component: () => import('@/views/course/CourseBox5.vue')
	},
	{
		path: 'CourseNav6',
		name: 'CourseNav6',
		component: () => import('@/views/course/CourseBox6.vue')
	},
	{
		path: 'CourseNav7',
		name: 'CourseNav7',
		component: () => import('@/views/course/CourseBox7.vue')
	}, {
		path: 'CourseNav8',
		name: 'CourseNav8',
		component: () => import('@/views/course/CourseBox8.vue')
	},
	{
		path: 'CourseNav9',
		name: 'CourseNav9',
		component: () => import('@/views/course/CourseBox9.vue')
	},
	{
		path: 'CourseNav10',
		name: 'CourseNav10',
		component: () => import('@/views/course/CourseBox10.vue')
	},
	{
		path: 'CourseNav11',
		name: 'CourseNav11',
		component: () => import('@/views/course/CourseBox11.vue')
	},
	{
		path: 'CourseNav12',
		name: 'CourseNav12',
		component: () => import('@/views/course/CourseBox12.vue')
	}
]
},
{
	path: '/Questions',
	name: 'Questions',
	component: () => import('../views/Questions.vue')
},
{
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
