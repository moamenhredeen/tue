import {
	CreateIssueRequest,
	CreateIssueStatusRequest,
} from '@tue/api-spec/src/issue.types'
import {
	Issue,
	IssueStatus,
	IssueStatusGroup,
} from '../services/issue/issue.types'
import {
	FastifyInstance,
	FastifyPluginOptions,
	FastifyReply,
	FastifyRequest,
} from 'fastify'
import {
	createIssue,
	createStatus,
	getIssues,
	getIssuesByStatusGroup,
	getStatuses,
} from '../services/issue/issue.service'

export default async (app: FastifyInstance, options: FastifyPluginOptions) => {
	app.get('/status', async (req: FastifyRequest, res: FastifyReply) => {
		const issueStatuses = await getStatuses()
		return issueStatuses
	})

	app.post('/status', async (req: FastifyRequest, res: FastifyReply) => {
		const issueStatus = req.body as CreateIssueStatusRequest
		const result = await createStatus(issueStatus)
		if (!result.ok) {
			return res.code(500)
		}
		return result.value
	})

	app.get(
		'/',
		async (
			req: FastifyRequest<{
				Querystring: { statusGroup: IssueStatusGroup[] }
			}>,
			res: FastifyReply,
		) => {
			if (!req.query.statusGroup) {
				const issues = await getIssues()
				return issues
			} else {
				const statusGroups = Array.isArray(req.query.statusGroup)
					? req.query.statusGroup
					: [req.query.statusGroup]
				const issues = await getIssuesByStatusGroup(statusGroups)
				return issues
			}
		},
	)

	app.post('/', async (req: FastifyRequest, res: FastifyReply) => {
		const issue = req.body as CreateIssueRequest
		const result = await createIssue(issue)
		if (!result.ok) {
			return res.code(500)
		}
		return result.value
	})
}
