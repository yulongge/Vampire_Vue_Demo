import Vue from 'vue';
import Router from 'vue-router';
//import HelloWorld from '@/components/HelloWorld';
//import Home from '@/page/home/home'

Vue.use(Router);

console.log('coming...')

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: resolve => require(['../page/home/home.vue'], resolve)
		},
		{
			path: '/hello',
			name: 'hello',
			//component: HelloWorld,
			component: resolve => require(['../components/HelloWorld.vue'], resolve)
		},
		{
			path: '/home',
			name: 'home',
			component: resolve => require(['../page/home/home.vue'], resolve)
		}
	],
});
