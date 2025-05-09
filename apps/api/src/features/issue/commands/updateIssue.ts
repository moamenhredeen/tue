import { eq } from 'drizzle-orm'
import { appDataSource } from '../../../database/data-source'
import { issues } from '../schema'

export const updateIssueCommand = async (params: UpdateIssueCommandParams) => {
	await appDataSource
		.update(issues)
		.set(params)
		.where(eq(issues.id, params.id))
		.returning({ id: issues.id })

	const updatedIssue = await appDataSource
		.select()
		.from(issues)
		.where(eq(issues.id, params.id))

	return fromSchema(updatedIssue[0].issues[0])
}

export type UpdateIssueCommandParams = {
	id: number
	title: string
	description: string
	statusId: number
}

export type UpdateIssueCommandResult = {
	id: number
	title: string
	description: string
	status: {
		id: number
		name: string
		group: string
	}
}

const fromSchema = (
	issue: typeof issues.$inferSelect & {
		status: typeof issueStatuses.$inferSelect
	},
): UpdateIssueCommandResult => {
	return {
		id: issue.id,
		title: issue.title,
		description: issue.description,
		status: {
			id: issue.status.id,
			name: issue.status.name,
			group: issue.status.group,
		},
	}
}
