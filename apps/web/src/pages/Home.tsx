import type { JSX, ParentProps, VoidProps } from 'solid-js'
import Layout from '../components/Layout'


export default function Home(props: ParentProps): JSX.Element  {
	return (
		<Layout>
			<h1>home page</h1>
		</Layout>
	)
}