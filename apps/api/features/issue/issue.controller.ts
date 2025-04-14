import { CreateIssueRequest, CreateIssueStatusRequest } from "api-spec/src/issue.types";
import { Issue, IssueStatus, IssueStatusGroup } from "./issue.models";
import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { createIssue, createStatus, getIssues, getStatuses } from "./issue.service";


export default async  (app: FastifyInstance, options: FastifyPluginOptions) => {

    app.get("/status", async (req: FastifyRequest, res: FastifyReply) => {
        const issueStatuses = await getStatuses();
        return issueStatuses;
    });


    app.post("/status", async (req: FastifyRequest, res: FastifyReply) => {
        const issueStatus = req.body as CreateIssueStatusRequest;
        const newIssueStatus = new IssueStatus();
        newIssueStatus.name = issueStatus.name;
        newIssueStatus.description = issueStatus.description;
        newIssueStatus.group = issueStatus.group as IssueStatusGroup;
        const createdIssueStatus = await createStatus(newIssueStatus);
        return createdIssueStatus;
    });


    app.get("/", async (req: FastifyRequest, res: FastifyReply) => {
        const issues = await getIssues();
        return issues;
    });

    app.post("/", async (req: FastifyRequest, res: FastifyReply) => {
        const issue = req.body as CreateIssueRequest;
        const newIssue = new Issue();
        newIssue.title = issue.title;
        newIssue.description = issue.description;
        newIssue.status_id = issue.status_id;
        const createdIssue = await createIssue(newIssue);
        return createdIssue;
    });
}