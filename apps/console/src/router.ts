import { createRouter, createWebHistory } from 'vue-router'
import LoginView from './views/LoginView.vue'
import SignupView from './views/SignupView.vue'
import SidebarLayout from './views/SidebarLayout.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/login',
			component: LoginView,
		},
		{
			path: '/signup',
			component: SignupView,
		},
		{
			path: '/dashboard',
			component: SidebarLayout,
		},
		{
			path: '/:pathMatch(.*)',
			redirect: '/login',
		},
	],
})

export default router
