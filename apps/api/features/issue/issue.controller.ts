import { IssueService } from "./issue.service";
import { CreateIssueRequest, CreateIssueStatusRequest } from "api-spec/src/issue.types";
import { Issue, IssueStatus, IssueStatusGroup } from "./issue.models";
import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";


export default async  (app: FastifyInstance, options: FastifyPluginOptions) => {
    const issueService = new IssueService();

    app.get("/status", async (req: FastifyRequest, res: FastifyReply) => {
        const issueStatuses = await issueService.getStatuses();
        return issueStatuses;
    });


    app.post("/status", async (req: FastifyRequest, res: FastifyReply) => {
        const issueStatus = req.body as CreateIssueStatusRequest;
        const newIssueStatus = new IssueStatus();
        newIssueStatus.name = issueStatus.name;
        newIssueStatus.description = issueStatus.description;
        newIssueStatus.group = issueStatus.group as IssueStatusGroup;
        const createdIssueStatus = await issueService.createStatus(newIssueStatus);
        return createdIssueStatus;
    });


    app.post("/", async (req: FastifyRequest, res: FastifyReply) => {
        const issue = req.body as CreateIssueRequest;
        const newIssue = new Issue();
        newIssue.title = issue.title;
        newIssue.description = issue.description;
        newIssue.status_id = issue.status_id;
        const createdIssue = await issueService.createIssue(newIssue);
        return createdIssue;
    });

    app.get("/", async (req: FastifyRequest, res: FastifyReply) => {
        const issues = await issueService.getIssues();
        return issues;
    });


}