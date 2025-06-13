<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
    import { setMode } from 'mode-watcher';
    
    type Theme = 'light' | 'dark' | 'system'

	const themes = [
		{ value: 'system', label: 'System' },
		{ value: 'light', label: 'Ligth' },
		{ value: 'dark', label: 'Dark' },
	];

	let theme = $state('light');
	const themeTriggerContent = $derived(themes.find((f) => f.value === theme)?.label ?? 'Select a fruit');
    
    function themeChangeHandler(value: string){
        setMode(value as Theme)
        theme = value;
    }
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Appearance</Card.Title>
		<Card.Description>Appearance Settings</Card.Description>
	</Card.Header>
	<Card.Content class="flex items-center gap-8">
		<p>Theme</p>

		<Select.Root type="single" name="favoriteFruit" value={theme} onValueChange={themeChangeHandler}>
			<Select.Trigger class="w-[180px]">
				{themeTriggerContent}
			</Select.Trigger>
			<Select.Content>
				<Select.Group>
					<Select.Label>Themes</Select.Label>
					{#each themes as theme (theme.value)}
						<Select.Item
							value={theme.value}
							label={theme.label}
						>
							{theme.label}
						</Select.Item>
					{/each}
				</Select.Group>
			</Select.Content>
		</Select.Root>
	</Card.Content>
</Card.Root>
