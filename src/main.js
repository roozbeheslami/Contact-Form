// import $ from 'jquery';
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/sass/style.scss'

Vue.use(VueRouter)
Vue.config.productionTip = true

// var $ = require('jquery');
// var jQueryBridget = require('jquery-bridget');

const routes = [
	{
		path: '/',
		name: 'Contact',
		component: () => import('./components/Contact.vue')
	},
	{
		path: '*',
		redirect: '/'
	}
]

const router = new VueRouter({
	routes,
	mode: 'history',
	base: process.env.BASE_URL
})

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')