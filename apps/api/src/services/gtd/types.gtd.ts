import { issues, issueStatusEnum } from '@database'

export type IssueStatus = 'Todo' | 'Doing' | 'Done'
export type IssuePriority = 'Low' | 'Medium' | 'High'

export function mapStatus(status: typeof issues.$inferSelect.status): IssueStatus {
	switch (status) {
		case 'todo':
			return 'Todo'
		case 'doing':
			return 'Doing'
		case 'done':
			return 'Done'
	}
}


export function mapPriority(priority: typeof issues.$inferSelect.priority): IssuePriority {
	switch (priority) {
		case 'low':
			return 'Low'
		case 'medium':
			return 'Medium'
		case 'high':
			return 'High'
	}
}