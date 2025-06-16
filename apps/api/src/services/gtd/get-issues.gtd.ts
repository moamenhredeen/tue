import { db, issues } from '@database'
import { isNull, eq, and } from 'drizzle-orm'
import { Criteria } from '@common'
import { IssuePriority, IssueStatus, mapPriority, mapStatus } from '@services/gtd/types.gtd.js'

export async function getIssues(criteria: Criteria<IssueFilter>): Promise<GetIssueResponse> {
	const res = await db.select()
		.from(issues)
		.where(and(
			isNull(issues.deleted_at),
			criteria.filter?.summary ? eq(issues.summary, criteria.filter.summary) : undefined,
		))
		.offset(criteria.skip)
		.limit(criteria.limit)

	const mappedIssues: GetIssueResponse['issues'] = []
	for (const issue of res) {
		mappedIssues.push({
			id: issue.id,
			summary: issue.summary,
			description: issue.description,
			status: mapStatus(issue.status),
			priority: mapPriority(issue.priority),
		})
	}

	const count = await db.$count(issues, isNull(issues.deleted_at))

	return {
		issues: mappedIssues,
		count,
	}
}

export type IssueFilter = {
	summary: string,
}


export type GetIssueResponse = {
	issues: {
		id: string,
		summary: string,
		description: string | null,
		status: IssueStatus,
		priority: IssuePriority
	}[]
	count: number
}

