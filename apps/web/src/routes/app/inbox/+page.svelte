<script lang="ts">
	import DataTable from './data-table.svelte'
	import { columns } from './columns.js'
	import DataTableToolbar from './data-table-toolbar.svelte';

	type Payment = {
		id: string;
		amount: number;
		status: 'pending' | 'processing' | 'success' | 'failed';
		email: string;
	};

	export const data: Payment[] = [
		{
			id: '728ed52f',
			amount: 100,
			status: 'pending',
			email: 'm@example.com',
		},
		{
			id: '489e1d42',
			amount: 125,
			status: 'processing',
			email: 'example@gmail.com',
		},
		// ...
	]
</script>

<div class="m-4">
	<hgroup class="mb-8">
		<h1 class="text-2xl font-bold">Inbox</h1>
		<p class="text-zinc-500 text-sm">Here's a list of your tasks for this month!</p>
	</hgroup>
	<DataTable {columns} {data} />
</div>
