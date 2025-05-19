import { JSX, ParentProps, Show } from 'solid-js'
import { createSignal, Match, Switch } from 'solid-js'
import TabBar from './TabBar'
import TitleBar from './TitleBar'

export default function Layout(props: ParentProps): JSX.Element {

	const [isMobile, setIsMobile] = createSignal(false);

	const resizeObserver = new ResizeObserver((entries) => {
		if (entries[0].contentRect.width < 768 && !isMobile()) {
			setIsMobile(true);
		} else if (entries[0].contentRect.width >= 768 && isMobile()){
			setIsMobile(false);
		}
	});

	resizeObserver.observe(document.body);

	return (
		<div class="min-h-screen flex flex-col">
			<TitleBar />
			<Switch>
				<Match when={isMobile()}>
					<h1>Is Mobile</h1>
				</Match>
				<Match when={!isMobile()}>
					<h1>Is not Mobile</h1>
				</Match>
			</Switch>
			<main class="flex-1">
				{props.children}
			</main>
			<Show when={isMobile()}>
				<TabBar />
			</Show>
		</div>
	)
}