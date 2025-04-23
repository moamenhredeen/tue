export type IssueStatusGroup = 'OPEN' | 'IN_PROGRESS' | 'CLOSED'

/**
 * Issue Status
 */
export type IssueStatusResponse = {
	id: number
	name: string
	description: string
	group: string
}

/**
 * Create Issue Status Request
 */
export type CreateIssueStatusRequest = {
	name: string
	description: string
	group: IssueStatusGroup
}

/**
 * Create Issue Request
 */
export type CreateIssueRequest = {
	title: string
	description: string
	statusId: number
}

/**
 * Create Issue Response
 */
export type IssueResponse = {
	id: number
	title: string
	description: string
	status_id: number
	created_at: Date
	updated_at: Date
	status: IssueStatusResponse
}
