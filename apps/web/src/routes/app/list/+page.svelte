<script lang="ts">
	import DataTable from './data-table.svelte'
	import { columns } from './columns.js'

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

<div class="w-full">
	<DataTable {columns} {data} />
</div>