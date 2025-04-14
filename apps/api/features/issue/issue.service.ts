import { Repository } from "typeorm";
import { Issue, IssueStatus, IssueStatusGroup } from "./issue.models"; 
import { AppDataSource } from "../../data-source";

export class IssueService {
    private readonly issueRepository: Repository<Issue>;
    private readonly statusRepository: Repository<IssueStatus>;

    constructor() {
        this.issueRepository = AppDataSource.getRepository(Issue);
        this.statusRepository = AppDataSource.getRepository(IssueStatus);
    }
    
    // ------------------------------------------------------------
    // Issue
    // ------------------------------------------------------------

    async createIssue(issue: Issue) {
        return this.issueRepository.save(issue);
    }

    async getIssues() {
        return this.issueRepository.find({ relations: ['status'] });
    }

    async getIssueById(id: number) {
        return this.issueRepository.findOneBy({ id });
    }

    async updateIssue(id: number, issue: Issue) {
        return this.issueRepository.update(id, issue);
    }

    async deleteIssue(id: number) {
        return this.issueRepository.delete(id);
    }
    
    async getIssueByStatus(status_id: number) {
        return this.issueRepository.findBy({ status_id });
    }
    
    async getIssueByStatusGroup(group: IssueStatusGroup) {
        return this.issueRepository.findBy({ status: { group } });
    }
    
    async openIssue(id: number) {
        const issue = await this.getIssueById(id);
        if (!issue) {
            throw new Error("Issue not found");
        }
        issue.status_id = 2;
        return this.issueRepository.save(issue);
    }
    
    async closeIssue(id: number) {
        const issue = await this.getIssueById(id);
        if (!issue) {
            throw new Error("Issue not found");
        }
        issue.status_id = 3;
        return this.issueRepository.save(issue);
    }
    
    
    // ------------------------------------------------------------
    // Status
    // ------------------------------------------------------------
    
    async createStatus(status: IssueStatus) {
        return this.statusRepository.save(status);
    }

    async getStatuses() {
        return this.statusRepository.find();
    }

    async getStatusById(id: number) {
        return this.statusRepository.findOneBy({ id });
    }

    async updateStatus(id: number, status: IssueStatus) {
        return this.statusRepository.update(id, status);
    }

    async deleteStatus(id: number) {
        return this.statusRepository.delete(id);
    }

    async getStatusByGroup(group: IssueStatusGroup) {
        return this.statusRepository.findBy({ group });
    }

    
}