<script lang="ts">
	import AppSidebar from '$lib/components/app-sidebar.svelte'
	import * as Sidebar from '$lib/components/ui/sidebar/index.js'
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js'

	import { page } from '$app/state'

	let { children } = $props()
	let breadcrumbItems: { name: string, url: string }[] = $derived.by(() => {
		const segments = page.url.pathname.split('/').splice(1)
		let total = ''
		const items = []
		for (const segment of segments) {
			total += `/${segment}`
			items.push({ name: segment, url: total })
		}
		return items
	})
</script>

<Sidebar.SidebarProvider>
	<AppSidebar />
	<Sidebar.Inset>
		<header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
			<Sidebar.Trigger class="-ml-1" />
			<Sidebar.Separator orientation="vertical" class="mr-2 data-[orientation=vertical]:h-4" />
			<Breadcrumb.Root>
				<Breadcrumb.List>
					{#each breadcrumbItems as segment, index (segment)}
						{#if index > 0}
							<Breadcrumb.Separator class="hidden md:block" />
						{/if}
						<Breadcrumb.Item class="hidden md:block">
							<Breadcrumb.Link href={segment.url}>{segment.name}</Breadcrumb.Link>
						</Breadcrumb.Item>
					{/each}
				</Breadcrumb.List>
			</Breadcrumb.Root>
		</header>
		<main class="p-4 h-full w-full">
			{@render children()}
		</main>
	</Sidebar.Inset>
</Sidebar.SidebarProvider>
