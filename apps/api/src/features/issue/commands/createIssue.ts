import { issues, issueStatus, issuePriority } from '../schema'
import { appDataSource } from '../../../database/data-source'
import { eq } from 'drizzle-orm'

export const createIssueCommand = async (
	params: CreateIssueCommandParams,
): Promise<CreateIssueCommandResult> => {
	const [{ id }] = await appDataSource
		.insert(issues)
		.values(params)
		.returning({ id: issues.id })

	const res = await appDataSource
		.select()
		.from(issues)
		.where(eq(issues.id, id))

	return fromSchema(res[0])
}

export type CreateIssueCommandParams = {
	summary: string
	description: string
	status: 'open' | 'in_progress' | 'done' | 'blocked'
	priority: 'low' | 'medium' | 'high'
}

export type CreateIssueCommandResult = {
	id: number

	summary: string
	description: {
		type: string
		version: number
		content: {
			type: string
			text: string
			content: string[]
		}[]
	}

	status: string
	priority: string

	plannedStartDate: Date
	plannedEndDate: Date

	actualStartDate: Date
	actualEndDate: Date

	originalEstimate: {
		estimate: number
		unit: string
	}

	dueDate: Date

	createdAt: Date
	updatedAt: Date
}

const fromSchema = (
	issue: typeof issues.$inferSelect,
): CreateIssueCommandResult => {
	return {
		id: issue.id,
		summary: issue.summary,
		description:
			issue.description as CreateIssueCommandResult['description'],
		status: issue.status,
		priority: issue.priority,

		plannedStartDate: issue.plannedStartDate,
		plannedEndDate: issue.plannedEndDate,

		actualStartDate: issue.actualStartDate,
		actualEndDate: issue.actualEndDate,

		originalEstimate:
			issue.originalEstimate as CreateIssueCommandResult['originalEstimate'],
		dueDate: issue.dueDate,

		createdAt: issue.createdAt,
		updatedAt: issue.updatedAt,
	}
}
