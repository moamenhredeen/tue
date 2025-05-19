import type { RouteDefinition } from '@solidjs/router'
import { Router } from '@solidjs/router'
import { render } from 'solid-js/web';
import { lazy } from 'solid-js'

import './index.css';



const routes: RouteDefinition[] = [
	{
		path: "/",
		info: {
			name: "Home",
		},
		component: lazy(() => import('./pages/Home'))
	},
	{
		path: "/about",
		info: {
			name: "About",
		},
		component: lazy(() => import('./pages/About'))
	},
	{
		path: "/settings",
		info: {
			name: "Settings",
		},
		component: lazy(() => import('./pages/Settings'))
	},
	{
		path: "/profile",
		info: {
			name: "Profile",
		},
		component: lazy(() => import('./pages/Profile'))
	},
]

const root = document.getElementById('root');
render(() => <Router>{routes}</Router>, root!);