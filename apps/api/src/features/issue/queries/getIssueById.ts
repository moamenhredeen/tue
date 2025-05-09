import { eq } from 'drizzle-orm'
import { appDataSource } from '../../../database/data-source'
import { issues } from '../schema'

export const getIssueByIdQuery = async (params: GetIssueByIdQueryParams) => {
	const issue = await appDataSource
		.select()
		.from(issues)
		.where(eq(issues.id, params.id))
	return issue
}

export type GetIssueByIdQueryParams = {
	id: number
}

export type GetIssueByIdQueryResult = {
	id: number
	title: string
	description: string
}
