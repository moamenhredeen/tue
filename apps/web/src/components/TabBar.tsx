import type {JSX} from 'solid-js'
import { A } from '@solidjs/router'

export default function TabBar(): JSX.Element {
	return (
		<ul class="flex justify-around bg-zinc-50 shadow p-4">
			<li>
				<A class="block p-2" href="/">Home</A>
			</li>
			<li>
				<A class="block p-2" href="/profile">Profile</A>
			</li>
			<li>
				<A class="block p-2" href="/settings">Settings</A>
			</li>
		</ul>
	)
}