import { Repository } from "typeorm";
import { Issue, IssueStatus, IssueStatusGroup } from "./issue.models";
import { AppDataSource } from "../../data-source";


// -------------------------------------- dependencies --------------------------------------

const issueRepository: Repository<Issue> = AppDataSource.getRepository(Issue);
const statusRepository: Repository<IssueStatus> = AppDataSource.getRepository(IssueStatus);


// -------------------------------------- Issue ---------------------------------------------

/**
 * Create a new issue
 * @param issue - The issue to create
 * @returns The created issue
 */
export const createIssue = async (issue: Issue) => {
    return issueRepository.save(issue);
}

/**
 * Get all issues
 * @returns All issues
 */
export const getIssues = async () => {
    return issueRepository.find({ relations: ['status'] });
}

/**
 * Get an issue by its id
 * @param id - The id of the issue
 * @returns The issue
 */
export const getIssueById = async (id: number) => {
    return issueRepository.findOneBy({ id });
}

/**
 * Update an issue
 * @param id - The id of the issue
 * @param issue - The issue to update
 * @returns The updated issue
 */
export const updateIssue = async (id: number, issue: Issue) => {
    return issueRepository.update(id, issue);
}

/**
 * Delete an issue
 * @param id - The id of the issue
 * @returns The deleted issue
 */
export const deleteIssue = async (id: number) => {
    return issueRepository.delete(id);
}

/**
 * Get issues by status id
 * @param status_id - The id of the status
 * @returns The issues
 */
export const getIssueByStatus = async (status_id: number) => {
    return issueRepository.findBy({ status_id });
}

/**
 * Get issues by status group
 * @param group - The group of the status
 * @returns The issues
 */
export const getIssueByStatusGroup = async (group: IssueStatusGroup) => {
    return issueRepository.findBy({ status: { group } });
}

/**
 * Open an issue
 * @param id - The id of the issue
 * @returns The opened issue
 */
export const openIssue = async (id: number) => {
    const issue = await getIssueById(id);
    if (!issue) {
        throw new Error("Issue not found");
    }
    issue.status_id = 2;
    return issueRepository.save(issue);
}

/**
 * Close an issue
 * @param id - The id of the issue
 * @returns The closed issue
 */
export const closeIssue = async (id: number) => {
    const issue = await getIssueById(id);
    if (!issue) {
        throw new Error("Issue not found");
    }
    issue.status_id = 3;
    return issueRepository.save(issue);
}


// ---------------------------------------- Status --------------------------------------------

/**
 * Create a new status
 * @param status - The status to create
 * @returns The created status
 */
export const createStatus = async (status: IssueStatus) => {
    return statusRepository.save(status);
}

/**
 * Get all statuses
 * @returns All statuses
 */
export const getStatuses = async () => {
    return statusRepository.find();
}

/**
 * Get a status by its id
 * @param id - The id of the status
 * @returns The status
 */
export const getStatusById = async (id: number) => {
    return statusRepository.findOneBy({ id });
}

/**
 * Update a status
 * @param id - The id of the status
 * @param status - The status to update
 * @returns The updated status
 */
export const updateStatus = async (id: number, status: IssueStatus) => {
    return statusRepository.update(id, status);
}

/**
 * Delete a status
 * @param id - The id of the status
 * @returns The deleted status
 */
export const deleteStatus = async (id: number) => {
    return statusRepository.delete(id);
}

/**
 * Get statuses by group
 * @param group - The group of the status
 * @returns The statuses
 */
export const getStatusByGroup = async (group: IssueStatusGroup) => {
    return statusRepository.findBy({ group });
}