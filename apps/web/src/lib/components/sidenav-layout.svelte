<script lang="ts">
	import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
	import { Separator } from "$lib/components/ui/separator/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import Command from "@lucide/svelte/icons/command";
	import NavMain from '$lib/components/nav-main.svelte'
	import NavProjects from '$lib/components/nav-projects.svelte'
	import NavSecondary from '$lib/components/nav-secondary.svelte'
	import NavUser from '$lib/components/nav-user.svelte'

	let { children, data } = $props();
</script>

<Sidebar.Provider>
	<Sidebar.Root variant="inset">
		<Sidebar.Header>
			<Sidebar.Menu>
				<Sidebar.MenuItem>
					<Sidebar.MenuButton size="lg">
						{#snippet child({ props })}
							<a href="##" {...props}>
								<div
									class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
								>
									<Command class="size-4" />
								</div>
								<div class="grid flex-1 text-left text-sm leading-tight">
									<span class="truncate font-semibold">Acme Inc</span>
									<span class="truncate text-xs">Enterprise</span>
								</div>
							</a>
						{/snippet}
					</Sidebar.MenuButton>
				</Sidebar.MenuItem>
			</Sidebar.Menu>
		</Sidebar.Header>
		<Sidebar.Content>
			<NavMain items={data.navMain} />
			<NavProjects projects={data.projects} />
			<NavSecondary items={data.navSecondary} class="mt-auto" />
		</Sidebar.Content>
		<Sidebar.Footer>
			<NavUser user={data.user} />
		</Sidebar.Footer>
	</Sidebar.Root>
	<Sidebar.Inset>

		<header class="flex h-16 shrink-0 items-center gap-2">
			<div class="flex items-center gap-2 px-4">
				<Sidebar.Trigger class="-ml-1" />
				<Separator orientation="vertical" class="mr-2 h-4" />
				<Breadcrumb.Root>
					<Breadcrumb.List>
						<Breadcrumb.Item class="hidden md:block">
							<Breadcrumb.Link href="#">Building Your Application</Breadcrumb.Link>
						</Breadcrumb.Item>
						<Breadcrumb.Separator class="hidden md:block" />
						<Breadcrumb.Item>
							<Breadcrumb.Page>Data Fetching</Breadcrumb.Page>
						</Breadcrumb.Item>
					</Breadcrumb.List>
				</Breadcrumb.Root>
			</div>
		</header>

		<main class="p-2">
			{@render children()}
		</main>

	</Sidebar.Inset>
</Sidebar.Provider>
