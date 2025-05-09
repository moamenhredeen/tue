import { Estimate } from './Estimate'
import { IssueDescription } from './IssueDescription'
import { IssueStatus } from './IssueStatus'
import { Priority } from './Priority'
import { Tag } from './Tag'

export class Issue {
	private id: number
	private summary: string
	private description: IssueDescription
	private status: IssueStatus
	private children: Issue[]
	private parent: Issue | null
	private tags: Tag[]
	private priority: Priority

	private dueDate: Date | null
	private originalEstimate: Estimate | null

	private plannedStartDate: Date | null
	private plannedEndDate: Date | null

	private actualStartDate: Date | null
	private actualEndDate: Date | null

	private timeSpent: number | null
	private timeRemaining: number | null

	private createdAt: Date
	private updatedAt: Date
	private deletedAt: Date

	constructor(id: number, summary: string, description: IssueDescription) {
		this.id = id
		this.summary = summary
		this.description = description
		this.status = IssueStatus.Open
		this.priority = Priority.Low
		this.children = []
		this.tags = []
		this.parent = null
		this.createdAt = new Date()
		this.updatedAt = new Date()
		this.deletedAt = null
	}

	setDueDate(dueDate: Date) {
		this.dueDate = dueDate
		this.updatedAt = new Date()
	}

	plan(plannedStartDate: Date, plannedEndDate: Date) {
		if (plannedEndDate < plannedStartDate) {
			throw new Error('End date cannot be before start date')
		}

		if (plannedEndDate > this.dueDate) {
			throw new Error('Planned end date cannot be after due date')
		}

		this.plannedStartDate = plannedStartDate
		this.plannedEndDate = plannedEndDate
		this.originalEstimate = new Estimate(
			plannedEndDate.getTime() - plannedStartDate.getTime(),
			'days',
		)
		this.updatedAt = new Date()
	}

	estimate(estimate: Estimate, dueDate: Date) {
		this.originalEstimate = estimate
		this.dueDate = dueDate
		this.updatedAt = new Date()
	}

	open() {
		this.status = IssueStatus.Open
		this.updatedAt = new Date()
		this.actualStartDate = null
		this.actualEndDate = null
	}

	start() {
		this.status = IssueStatus.InProgress
		this.updatedAt = new Date()
		this.actualStartDate = new Date()
	}

	done() {
		this.status = IssueStatus.Done
		this.updatedAt = new Date()
		this.actualEndDate = new Date()
	}

	block() {
		this.status = IssueStatus.Blocked
		this.updatedAt = new Date()
	}

	/**
	 * Set the priority of the issue and all its children
	 * @param priority - The priority to set
	 */
	setPriority(priority: Priority) {
		this.priority = priority
		this.updatedAt = new Date()
		this.children.forEach((child) => {
			child.setPriority(priority)
		})
	}

	addChild(issue: Issue) {
		if (this.children.some((child) => child.id === issue.id)) {
			throw new Error('Issue already has this child')
		}
		this.children.push(issue)
	}

	removeChild(issue: Issue) {
		this.children = this.children.filter((child) => child.id !== issue.id)
	}

	setParent(issue: Issue) {
		if (this.parent === issue) {
			throw new Error('Issue cannot be its own parent')
		}
		this.parent = issue
		this.parent.addChild(this)
	}

	addTag(tag: Tag) {
		if (this.tags.some((t) => t.getId() === tag.getId())) {
			throw new Error('Issue already has this tag')
		}
		this.tags.push(tag)
	}

	removeTag(tag: Tag) {
		this.tags = this.tags.filter((t) => t.getId() !== tag.getId())
	}

	clearTags() {
		this.tags = []
	}
}
