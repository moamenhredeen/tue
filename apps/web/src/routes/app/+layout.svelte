<script lang="ts">
	import AppSidebar from '$lib/components/app-sidebar.svelte'
	import { Provider, Trigger } from '$lib/components/ui/sidebar/index.js'

	let { children } = $props()
</script>

<Provider>
	<AppSidebar />
	<main class="w-full h-full p-4">
		<Trigger />
		{@render children?.()}
	</main>
</Provider>