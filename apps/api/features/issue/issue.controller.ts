import { Router } from "express";
import { IssueService } from "./issue.service";
import { CreateIssueRequest, CreateIssueStatusRequest, IssueResponse } from "api-spec/src/issue.types";
import { Issue } from "./issue.models";


export class IssueController {
    public static readonly route = "/issue";
    private readonly issueService: IssueService;

    constructor() {
        this.issueService = new IssueService();
    }
    
    get router() {
        const router = Router();

        router.get("/status", this.getStatuses.bind(this));
        router.post("/status", this.createStatus.bind(this));
        router.post("/", this.createIssue.bind(this));
        router.get("/", this.getIssues.bind(this));
        return router;
    }

    async createIssue(req: any, res: any) {
        const issue = req.body as CreateIssueRequest;
        const newIssue = new Issue();
        newIssue.title = issue.title;
        newIssue.description = issue.description;
        newIssue.status_id = issue.status_id;
        const createdIssue = await this.issueService.createIssue(newIssue);
        res.status(201).json(createdIssue);
    }

    async getIssues(req: any, res: any) {
        const issues = await this.issueService.getIssues();
        const issuesResponse = issues.map((issue) => ({
            id: issue.id,
            title: issue.title,
            description: issue.description,
            status: issue.status,
        }));
        res.status(200).json(issuesResponse);
    }

    async getStatuses(req: any, res: any) {
        const issueStatuses = await this.issueService.getStatuses();
        const issueStatusesResponse = issueStatuses.map((issueStatus) => ({
            id: issueStatus.id,
            name: issueStatus.name,
            description: issueStatus.description,
            group: issueStatus.group,
        }));
        res.status(200).json(issueStatusesResponse);
    }

    async createStatus(req: any, res: any) {
        const issueStatus = req.body as CreateIssueStatusRequest;
        // const newIssueStatus = await this.issueService.createStatus(issueStatus);
        const status = {
            id: 1,
            name: issueStatus.name,
            description: issueStatus.description,
            group: "default",
        }
        res.status(201).json(status);
    }
}