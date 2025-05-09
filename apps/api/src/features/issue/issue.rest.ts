import {
	FastifyInstance,
	FastifyPluginOptions,
	FastifyReply,
	FastifyRequest,
} from 'fastify'
import { getIssuesQuery } from './queries/getIssues'
import {
	createIssueCommand,
	CreateIssueCommandParams,
} from './commands/createIssue'

export default async (app: FastifyInstance, options: FastifyPluginOptions) => {
	app.get('/', async (req: FastifyRequest<{}>, res: FastifyReply) => {
		const issues = await getIssuesQuery({
			page: 1,
			limit: 10,
		})
		return issues
	})

	app.post('/', async (req: FastifyRequest, res: FastifyReply) => {
		const issue = req.body as CreateIssueCommandParams
		const createdIssue = await createIssueCommand(issue)
		return createdIssue
	})
}
