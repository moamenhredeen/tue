import {
	CreateIssueRequest,
	CreateIssueStatusRequest,
	Issue,
	IssueStatus,
	IssueStatusGroup,
} from './issue.types'
import { appDataSource } from '../../database/data-source'
import { issues, issueStatuses } from '../../database/schema'
import { eq, inArray } from 'drizzle-orm'
import { err, ok, Result } from '@tue/utils'
import {
	CreateIssueErrors,
	CreateIssueStatusErrors,
	DeleteIssueErrors,
	DeleteIssueStatusErrors,
	GetIssueByIdErrors,
	GetIssuesByStatusErrors,
	GetIssuesByStatusGroupErrors,
	GetIssuesErrors,
	GetIssueStatusByIdErrors,
	GetIssueStatusesErrors,
	UpdateIssueErrors,
	UpdateIssueStatusErrors,
} from './issue.errors'
import { fromSchema } from './issue.mappers'

// -------------------------------------- Issue ---------------------------------------------

/**
 * Create a new issue
 * @param issue - The issue to create
 * @returns The created issue
 */
export const createIssue = async (
	issue: CreateIssueRequest,
): Promise<Result<Issue, CreateIssueErrors>> => {
	try {
		const [{ id }] = await appDataSource
			.insert(issues)
			.values(issue)
			.returning({ id: issues.id })

		if (!id) {
			return err('DatabaseError')
		}

		const res = await appDataSource
			.select()
			.from(issues)
			.leftJoin(issueStatuses, eq(issues.statusId, issueStatuses.id))
			.where(eq(issues.id, id))

		return ok(fromSchema(res))
	} catch (error) {
		return err('DatabaseError')
	}
}

/**
 * Get all issues
 * @returns All issues
 */
export const getIssues = async (): Promise<
	Result<Issue[], GetIssuesErrors>
> => {
	try {
		const res = await appDataSource
			.select()
			.from(issues)
			.leftJoin(issueStatuses, eq(issues.statusId, issueStatuses.id))

		return ok(res.map(fromSchema))
	} catch (error) {
		return err('DatabaseError')
	}
}

/**
 * Get issues by a list of status groups
 * @param statusGroups - The status groups
 * @returns The issues
 */
export const getIssuesByStatusGroup = async (
	statusGroups: IssueStatusGroup[],
): Promise<Result<Issue[], GetIssuesByStatusGroupErrors>> => {
	try {
		const res = await appDataSource
			.select()
			.from(issues)
			.leftJoin(issueStatuses, eq(issues.statusId, issueStatuses.id))
			.where(inArray(issueStatuses.group, statusGroups))

		return ok(res.map(fromSchema))
	} catch (error) {
		return err('DatabaseError')
	}
}

/**
 * Get an issue by its id
 * @param id - The id of the issue
 * @returns The issue
 */
export const getIssueById = async (
	id: number,
): Promise<Result<Issue, GetIssueByIdErrors>> => {
	try {
		const res = await appDataSource
			.select()
			.from(issues)
			.leftJoin(issueStatuses, eq(issues.statusId, issueStatuses.id))
			.where(eq(issues.id, id))
		if (res.length === 0) {
			return err('NotFound')
		}
		return ok(fromSchema(res[0]))
	} catch (error) {
		return err('DatabaseError')
	}
}

/**
 * Update an issue
 * @param id - The id of the issue
 * @param issue - The issue to update
 * @returns The updated issue
 */
export const updateIssue = async (
	id: number,
	issue: Issue,
): Promise<Result<Issue, UpdateIssueErrors>> => {
	try {
		const res = await appDataSource
			.update(issues)
			.set(issue)
			.where(eq(issues.id, id))
			.returning()
		if (res.length === 0) {
			return err('NotFound')
		}
		return ok(fromSchema(res[0]))
	} catch (error) {
		return err('DatabaseError')
	}
}

/**
 * Delete an issue
 * @param id - The id of the issue
 * @returns The deleted issue
 */
export const deleteIssue = async (
	id: number,
): Promise<Result<void, DeleteIssueErrors>> => {
	try {
		const res = await appDataSource.delete(issues).where(eq(issues.id, id))
		if (res.rowCount === 0) {
			return err('NotFound')
		}
		return ok(undefined)
	} catch (error) {
		return err('DatabaseError')
	}
}

/**
 * Get issues by status id
 * @param status_id - The id of the status
 * @returns The issues
 */
export const getIssueByStatus = async (
	statusId: number,
): Promise<Result<Issue[], GetIssuesByStatusErrors>> => {
	try {
		const res = await appDataSource
			.select()
			.from(issues)
			.leftJoin(issueStatuses, eq(issues.statusId, issueStatuses.id))
			.where(eq(issues.statusId, statusId))
		return ok(res.map(fromSchema))
	} catch (error) {
		return err('DatabaseError')
	}
}

/**
 * Get issues by status group
 * @param group - The group of the status
 * @returns The issues
 */
export const getIssueByStatusGroup = async (
	group: IssueStatusGroup,
): Promise<Result<Issue[], GetIssuesByStatusGroupErrors>> => {
	try {
		const res = await appDataSource
			.select()
			.from(issues)
			.leftJoin(issueStatuses, eq(issues.statusId, issueStatuses.id))
			.where(eq(issueStatuses.group, group))
		return ok(res.map(fromSchema))
	} catch (error) {
		return err('DatabaseError')
	}
}

/**
 * Create a new status
 * @param status - The status to create
 * @returns The created status
 */
export const createStatus = async (
	status: CreateIssueStatusRequest,
): Promise<Result<IssueStatus, CreateIssueStatusErrors>> => {
	try {
		const res = await appDataSource
			.insert(issueStatuses)
			.values(status)
			.returning()
		if (res.length === 0) {
			return err('DatabaseError')
		}
		return ok(res[0])
	} catch (error) {
		return err('DatabaseError')
	}
}

/**
 * Get all statuses
 * @returns All statuses
 */
export const getStatuses = async (): Promise<
	Result<IssueStatus[], GetIssueStatusesErrors>
> => {
	try {
		const res = await appDataSource.select().from(issueStatuses)
		return ok(res)
	} catch (error) {
		return err('DatabaseError')
	}
}

/**
 * Get a status by its id
 * @param id - The id of the status
 * @returns The status
 */
export const getStatusById = async (
	id: number,
): Promise<Result<IssueStatus, GetIssueStatusByIdErrors>> => {
	try {
		const res = await appDataSource
			.select()
			.from(issueStatuses)
			.where(eq(issueStatuses.id, id))
		if (res.length === 0) {
			return err('NotFound')
		}
		return ok(res[0])
	} catch (error) {
		return err('DatabaseError')
	}
}

/**
 * Update a status
 * @param id - The id of the status
 * @param status - The status to update
 * @returns The updated status
 */
export const updateStatus = async (
	id: number,
	status: IssueStatus,
): Promise<Result<IssueStatus, UpdateIssueStatusErrors>> => {
	try {
		const res = await appDataSource
			.update(issueStatuses)
			.set(status)
			.where(eq(issueStatuses.id, id))
			.returning()
		if (res.length === 0) {
			return err('NotFound')
		}
		return ok(res[0])
	} catch (error) {
		return err('DatabaseError')
	}
}

/**
 * Delete a status
 * @param id - The id of the status
 * @returns The deleted status
 */
export const deleteStatus = async (
	id: number,
): Promise<Result<void, DeleteIssueStatusErrors>> => {
	try {
		const res = await appDataSource
			.delete(issueStatuses)
			.where(eq(issueStatuses.id, id))
		if (res.rowCount === 0) {
			return err('NotFound')
		}
		return ok(undefined)
	} catch (error) {
		return err('DatabaseError')
	}
}

/**
 * Get statuses by group
 * @param group - The group of the status
 * @returns The statuses
 */
export const getStatusByGroup = async (
	group: IssueStatusGroup,
): Promise<Result<IssueStatus[], GetIssueStatusesErrors>> => {
	try {
		const res = await appDataSource
			.select()
			.from(issueStatuses)
			.where(eq(issueStatuses.group, group))
		return ok(res)
	} catch (error) {
		return err('DatabaseError')
	}
}
