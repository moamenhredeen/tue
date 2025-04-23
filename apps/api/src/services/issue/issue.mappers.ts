import { issues } from '../../database/schema'
import { Issue } from './issue.types'

export const fromSchema = (issue: any): Issue => {
	return {
		id: issue.id,
		title: issue.title,
		description: issue.description,
		statusId: issue.statusId,
		status: {
			id: issue.status.id,
			name: issue.status.name,
			description: issue.status.description,
			group: issue.status.group,
		},
	}
}
