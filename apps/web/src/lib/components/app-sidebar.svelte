<script lang="ts">
	import {
		InboxIcon,
		Calendar1Icon,
		CalendarDaysIcon,
		HashIcon,
		ChartBarIcon,
		LogOutIcon,
		SettingsIcon,
		ChevronsUpDownIcon,
		SparklesIcon,
		BadgeCheckIcon,
		CreditCardIcon,
		BellIcon,
	} from '@lucide/svelte/icons'
	import Logo from '/static/logo.svg'
	import * as Sidebar from '$lib/components/ui/sidebar/index.js'
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js'
	import type { ComponentProps } from 'svelte'
	import * as Avatar from '$lib/components/ui/avatar/index.js'

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
	
	
	let user: {
		name: string;
		email: string;
		avatar: string;
	} = {
		name: 'John Doe',
		email: 'john.doe@example.com',
		avatar: 'https://github.com/shadcn.png',
	}

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props()
	const sidebar = Sidebar.useSidebar();
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
								<img src={Logo} alt="tue logo" />
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

	<Sidebar.Footer>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton>
					{#snippet child({ props })}
						<a href="/app/settings" {...props}>
							<SettingsIcon />
							<span>Settings</span>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
			
			<Sidebar.MenuItem>
				<DropdownMenu.Root>
				  <DropdownMenu.Trigger>
					{#snippet child({ props })}
					  <Sidebar.MenuButton size="lg"
						class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						{...props}>
						<Avatar.Root class="size-8 rounded-lg">
						  <Avatar.Image src={user.avatar} alt={user.name} />
						  <Avatar.Fallback class="rounded-lg">CN</Avatar.Fallback>
						</Avatar.Root>
						<div class="grid flex-1 text-left text-sm leading-tight">
						  <span class="truncate font-medium">{user.name}</span>
						  <span class="truncate text-xs">{user.email}</span>
						</div>
						<ChevronsUpDownIcon class="ml-auto size-4" />
					  </Sidebar.MenuButton>
					{/snippet}
				  </DropdownMenu.Trigger>
				  <DropdownMenu.Content
					class="w-(--bits-dropdown-menu-anchor-width) min-w-56 rounded-lg"
					side={sidebar.isMobile ? "bottom" : "right"}
					align="end"
					sideOffset={4}>
					<DropdownMenu.Label class="p-0 font-normal">
					  <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
						<Avatar.Root class="size-8 rounded-lg">
						  <Avatar.Image src={user.avatar} alt={user.name} />
						  <Avatar.Fallback class="rounded-lg">CN</Avatar.Fallback>
						</Avatar.Root>
						<div class="grid flex-1 text-left text-sm leading-tight">
						  <span class="truncate font-medium">{user.name}</span>
						  <span class="truncate text-xs">{user.email}</span>
						</div>
					  </div>
					</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.Group>
					  <DropdownMenu.Item>
						<SparklesIcon />
						Upgrade to Pro
					  </DropdownMenu.Item>
					</DropdownMenu.Group>
					<DropdownMenu.Separator />
					<DropdownMenu.Group>
					  <DropdownMenu.Item>
						<BadgeCheckIcon />
						Account
					  </DropdownMenu.Item>
					  <DropdownMenu.Item>
						<CreditCardIcon />
						Billing
					  </DropdownMenu.Item>
					  <DropdownMenu.Item>
						<BellIcon />
						Notifications
					  </DropdownMenu.Item>
					</DropdownMenu.Group>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>
					  <LogOutIcon />
					  Log out
					</DropdownMenu.Item>
				  </DropdownMenu.Content>
				</DropdownMenu.Root>
			  </Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Footer>
</Sidebar.Root>
