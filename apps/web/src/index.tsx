import type { RouteDefinition } from '@solidjs/router'
import { Router } from '@solidjs/router'
import { render } from 'solid-js/web';
import { lazy } from 'solid-js'

import './index.css';



const routes: RouteDefinition[] = [
	{
		path: "/",
		component: lazy(() => import('./pages/Actionable'))
	},
	{
		path: "/calendar",
		component: lazy(() => import('./pages/Calendar'))
	},
	{
		path: "/inbox",
		component: lazy(() => import('./pages/Inbox'))
	},
]

const root = document.getElementById('root');
render(() => <Router>{routes}</Router>, root!);