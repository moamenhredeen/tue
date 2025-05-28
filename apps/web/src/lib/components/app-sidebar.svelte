<script lang="ts">
	import HouseIcon from '@lucide/svelte/icons/house'
	import {
		Content,
		Footer,
		Group,
		GroupContent,
		GroupLabel,
		Header,
		Menu,
		MenuButton,
		MenuItem,
		Root,
	} from '$lib/components/ui/sidebar/index.js'

	// Menu items.
	const items = [
		{
			title: 'Home',
			url: '/app',
			icon: HouseIcon,
		},
		{
			title: 'List',
			url: '/app/list',
			icon: HouseIcon,
		},
	]
</script>


<Root>
	<Header />

	<Content>
		<Group>
			<GroupLabel>Application</GroupLabel>
			<GroupContent>
				<Menu>
					{#each items as item (item.title)}
						<MenuItem>
							<MenuButton>
								{#snippet child({ props })}
									<a href={item.url} {...props}>
										<item.icon />
										<span>{item.title}</span>
									</a>
								{/snippet}
							</MenuButton>
						</MenuItem>
					{/each}
				</Menu>
			</GroupContent>
		</Group>
	</Content>
	<Footer />
</Root>
