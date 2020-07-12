import Vue from 'vue'
import vuex from 'vuex'
import Course from "./store/Course.js"
import Download from "./store/Download.js"
import Home from "./store/Home.js"
import Questions from "./store/Questions.js"
import Teachers from "./store/Teachers.js"
Vue.use(vuex)
var store=new vuex.Store({
	modules: {
		Course,
		Download,
		Home,
		Questions,
		Teachers
	}
})
export default store