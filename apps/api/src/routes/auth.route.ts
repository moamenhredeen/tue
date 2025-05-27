import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify'
import { LoginRequest, LoginRequestSchema, RegisterRequest, RegisterRequestSchema } from '@tue/api-spec'

export async function authRoute(app: FastifyInstance, options: FastifyPluginOptions) {

	app.post(
		'/register',
		{
			schema: {
				body: RegisterRequestSchema,
			},
		},
		async function registerHandler(req: FastifyRequest<{ Body: RegisterRequest }>, res: FastifyReply) {
			return { message: 'successfully', payload: req.body }
		})

	app.post(
		'/login',
		{
			schema: {
				body: LoginRequestSchema,
			},
		}, async function loginHandler(req: FastifyRequest<{ Body: LoginRequest }>, res: FastifyReply) {
			return { message: 'successfully', payload: req.body }
		})
}
