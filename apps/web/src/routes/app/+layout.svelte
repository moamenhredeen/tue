<script lang="ts">
	import AppSidebar from '$lib/components/app-sidebar.svelte'
	import * as Sidebar from '$lib/components/ui/sidebar/index.js'
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js'

	import { page } from '$app/state'
	import { Button } from '$lib/components/ui/button/index.js';
	import { SearchIcon } from '@lucide/svelte';
	import * as Command from '$lib/components/ui/command/index.js';
	import {
		CalculatorIcon,
		CalendarIcon,
		CreditCardIcon,
		SettingsIcon,
		SmileIcon,
		UserIcon
	} from '@lucide/svelte';

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
	
		let open = $state(false);

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			open = !open;
		}
	}
</script>

<svelte:document onkeydown={handleKeydown} />
<Command.Dialog bind:open>
	<Command.Input placeholder="Type a command or search..." />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		<Command.Group heading="Suggestions">
			<Command.Item>
				<CalendarIcon class="mr-2 size-4" />
				<span>Calendar</span>
			</Command.Item>
			<Command.Item>
				<SmileIcon class="mr-2 size-4" />
				<span>Search Emoji</span>
			</Command.Item>
			<Command.Item>
				<CalculatorIcon class="mr-2 size-4" />
				<span>Calculator</span>
			</Command.Item>
		</Command.Group>
		<Command.Separator />
		<Command.Group heading="Settings">
			<Command.Item>
				<UserIcon class="mr-2 size-4" />
				<span>Profile</span>
				<Command.Shortcut>⌘P</Command.Shortcut>
			</Command.Item>
			<Command.Item>
				<CreditCardIcon class="mr-2 size-4" />
				<span>Billing</span>
				<Command.Shortcut>⌘B</Command.Shortcut>
			</Command.Item>
			<Command.Item>
				<SettingsIcon class="mr-2 size-4" />
				<span>Settings</span>
				<Command.Shortcut>⌘S</Command.Shortcut>
			</Command.Item>
		</Command.Group>
	</Command.List>
</Command.Dialog>

<Sidebar.SidebarProvider>
	<AppSidebar />
	<Sidebar.Inset>
		<header class="flex h-16 shrink-0 items-center justify-between border-b gap-2 px-4">
			<div class="flex items-center gap-2">
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
			</div>
			<div class="px-2">
			<Button 
				variant="outline" 
				class="bg-muted shadow-none cursor-pointer"
				onclick={() => open = !open}>
				<SearchIcon/>
				Search
				<kbd class="bg-muted">
					<span class="text-xs">⌘</span>
					k
				</kbd>
			</Button>
			</div>
		</header>
		<main class="p-4 h-full w-full">
			{@render children()}
		</main>
	</Sidebar.Inset>
</Sidebar.SidebarProvider>
