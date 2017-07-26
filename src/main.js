// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import Hello from './components/Hello';
import About from './components/About';
import Param from './components/Param';
import Paramdetails from './components/Paramdetails';

Vue.use(VueRouter);

const routes = [{
	path: '/',
	component: Hello
}, {
	path: '/about',
	component: About
}, {
	path: '/param',
	component: Param
}, {
	path: '/paramdetails/:id',
	component: Paramdetails,
	name: 'Paramdetails'
}];

const router = new VueRouter({
	routes,
	mode: 'history'
});

router.beforeEach((to, from, next) => {
	//check if the path user is going to is our param path
	if (to.path === '/param') {
		//check if the user item is already set
		if (localStorage.getItem('user') == undefined) {
			//prompt for username
			var user = prompt('please enter your username');
			//prompt for password
			var pass = prompt('please enter your password');
			//check if th username and password given equals our preset details
			if (user === 'username' && pass === 'password') {
				//set the user item
				localStorage.setItem('user', user);
				//move to the route
				next();
			} else {
				//alert the username and pass is wrong
				alert('Wrong username and password, you do not have permission to access that route');
				//return, do not move to the route
				return;
			}

		}

	}

	next();
});

window.Event = new Vue({});

new Vue({
	el: '#app',
	template: '<App/>',
	components: {
		App
	},
	router
}).$mount('#app');
