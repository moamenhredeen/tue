import { For, JSX, ParentProps, VoidProps } from 'solid-js'
import Layout from '../components/Layout'


export default function Actionable(props: ParentProps): JSX.Element  {


	const tasks = [
		{id: 1, title: "Task 1", completed: false, description: "This is a task"},
		{id: 2, title: "Task 2", completed: true, description: "This is a task"},
		{id: 3, title: "Task 3", completed: false, description: "This is a task"},
		{id: 4, title: "Task 4", completed: true, description: "This is a task"},
		{id: 5, title: "Task 5", completed: false, description: "This is a task"},
		{id: 6, title: "Task 6", completed: true, description: "This is a task"},
		{id: 7, title: "Task 7", completed: false, description: "This is a task"},
		{id: 8, title: "Task 8", completed: true, description: "This is a task"},
		{id: 9, title: "Task 9", completed: false, description: "This is a task"},
		{id: 10, title: "Task 10", completed: true, description: "This is a task"},
	]

	return (
		<Layout title="Actionable">
			<ul class="p-4">
				<For each={tasks}>
					{item => <li class="flex gap-4 items-start py-4 border-t-1 border-zinc-200">
						<span class="mt-1 h-5 w-5 border-2 rounded-2xl" classList={{"border-zinc-400 bg-zinc-100": item.completed, "border-green-400 bg-green-100": !item.completed}}></span>
						<div>
							<h3 class="text-lg">{item.title}</h3>
							<p class="text-zinc-500">{item.description}</p>
						</div>
					</li>}
				</For>
			</ul>
		</Layout>
	)
}
