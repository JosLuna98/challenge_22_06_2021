import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/result',
		name: 'Result',
		component: () => import('../views/Result.vue')
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
