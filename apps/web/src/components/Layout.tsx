import { JSX, ParentProps, Show } from 'solid-js'
import { createSignal, Match, Switch } from 'solid-js'
import TabBar from './TabBar'
import TitleBar from './TitleBar'

export default function Layout(props: ParentProps<{title: string}>): JSX.Element {

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
			<header class="fixed top-0 w-full bg-white z-10">
				<TitleBar title={props.title} />
			</header>
			<main class="absolute top-32 h-full w-full">
				{props.children}
			</main>
			<Show when={isMobile()}>
				<footer class="fixed bottom-0 w-full">
					<TabBar  />
				</footer>
			</Show>
		</div>
	)
}