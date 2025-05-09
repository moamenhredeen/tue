import { appDataSource } from '../../../database/data-source'
import { issues } from '../schema'

export const getIssuesQuery = async (params: GetIssuesQueryParams) => {
	const res = await appDataSource.select().from(issues)
	return res
}

export type GetIssuesQueryParams = {
	page: number
	limit: number
}

export type GetIssuesQueryResult = {
	issues: {
		id: number
		title: string
		description: string
		statusId: number
		status: {
			id: number
			name: string
		}
	}[]
}
