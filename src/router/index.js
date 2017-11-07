import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/page/home/home'

Vue.use(Router);

export default new Router({
  routes: [
	{
      path: '/order',
      name: 'order',
      component: Home,
    },
	{
      path: '/hello',
      name: 'Hello',
      component: HelloWorld,
    },
  ],
});
