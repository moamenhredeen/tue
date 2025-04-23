export type IssueStatusGroup = 'OPEN' | 'IN_PROGRESS' | 'CLOSED'

export type IssueStatus = {
	id: number
	name: string
	description: string
	group: IssueStatusGroup
}

export type Issue = {
	id: number
	title: string
	description: string
	statusId: number
	status: IssueStatus
}

export type CreateIssueStatusRequest = {
	name: string
	description: string
	group: IssueStatusGroup
}

export type CreateIssueRequest = {
	title: string
	description: string
	statusId: number
}
