export type IssueStatus = 'todo' | 'doing' | 'done';
export type IssuePriority = 'low' | 'medium' | 'high';

/**
 * issue entity
 */
export class Issue {
	private id: string
	private summary: string
	private description: string
	private status: IssueStatus
	private priority: IssuePriority
}