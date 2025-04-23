/**
 * Errors that can occur when creating an issue
 */
export type CreateIssueErrors = 'DatabaseError' | 'InvalidInput'

/**
 * Errors that can occur when getting issues
 */
export type GetIssuesErrors = 'DatabaseError'

/**
 * Errors that can occur when getting issues by status group
 */
export type GetIssuesByStatusGroupErrors = 'DatabaseError'

/**
 * Errors that can occur when getting an issue by id
 */
export type GetIssueByIdErrors = 'DatabaseError' | 'NotFound'

/**
 * Errors that can occur when updating an issue
 */
export type UpdateIssueErrors = 'DatabaseError' | 'NotFound'

/**
 * Errors that can occur when deleting an issue
 */
export type DeleteIssueErrors = 'DatabaseError' | 'NotFound'

/**
 * Errors that can occur when getting issues by status
 */
export type GetIssuesByStatusErrors = 'DatabaseError' | 'StatusNotFound'

/**
 * Errors that can occur when creating a status
 */
export type CreateIssueStatusErrors = 'DatabaseError'

/**
 * Errors that can occur when getting statuses
 */
export type GetIssueStatusesErrors = 'DatabaseError'

/**
 * Errors that can occur when getting a status by id
 */
export type GetIssueStatusByIdErrors = 'DatabaseError' | 'NotFound'

/**
 * Errors that can occur when updating a status
 */
export type UpdateIssueStatusErrors = 'DatabaseError' | 'NotFound'

/**
 * Errors that can occur when deleting a status
 */
export type DeleteIssueStatusErrors = 'DatabaseError' | 'NotFound'
