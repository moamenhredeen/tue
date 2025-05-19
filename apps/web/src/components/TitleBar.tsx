import  type { JSX, VoidProps } from 'solid-js'

export default function TitleBar(props: VoidProps): JSX.Element {

	return (
		<header class="bg-amber-300 p-4">
			<h1 class="text-2xl">Title Bar</h1>
		</header>
	)
}