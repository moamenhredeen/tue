<script lang="ts">
	import { InboxIcon, Calendar1Icon, CalendarDaysIcon, HashIcon, ChartBarIcon } from '@lucide/svelte/icons'
	import Logo from '/static/logo.svg'
	import * as Sidebar from '$lib/components/ui/sidebar/index.js'
	import type { ComponentProps } from 'svelte'

	// Menu items.
	const items = [
		{
			title: 'Overview',
			url: '/app/dashboard',
			icon: ChartBarIcon,
		},
		{
			title: 'Inbox',
			url: '/app/inbox',
			icon: InboxIcon,
		},
		{
			title: 'Today',
			url: '/app/today',
			icon: Calendar1Icon,
		},
		{
			title: 'Upcoming',
			url: '/app/upcoming',
			icon: CalendarDaysIcon,
		},
	]
	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props()
</script>


<Sidebar.Root {...restProps} bind:ref>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="lg">
					{#snippet child({ props })}
						<a href="##" {...props}>
							<div
								class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
							>
								<img src={Logo} alt="tue logo">
							</div>
							<div class="grid flex-1 text-left text-sm leading-tight">
								<span class="truncate font-medium">Tue</span>
								<span class="truncate text-xs">task manager</span>
							</div>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>

	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.Menu>
				{#each items as item (item.title)}
					<Sidebar.MenuItem>
						<Sidebar.MenuButton>
							{#snippet child({ props })}
								<a href={item.url} {...props}>
									<item.icon />
									<span>{item.title}</span>
								</a>
							{/snippet}
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>
				{/each}
			</Sidebar.Menu>
		</Sidebar.Group>


		<Sidebar.Group>
			<Sidebar.GroupLabel>Projects</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each items as item (item.title)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton>
								{#snippet child({ props })}
									<a href={item.url} {...props}>
										<HashIcon />
										<span>{item.title}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
</Sidebar.Root>
