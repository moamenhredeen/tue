import { createUser, CreateUserRequest } from '@services/user/create.user.js'
import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify'

export async function authRoute(app: FastifyInstance, options: FastifyPluginOptions) {

	app.post('/register', async function loginHandler(req: FastifyRequest, res: FastifyReply) {
		const createUserRequest = req.body as CreateUserRequest
		const createUserResponse = await createUser(createUserRequest);
		return createUserResponse
	})

	app.post('/login', function loginHandler(req: FastifyRequest, res: FastifyReply) {
		return null
	})

}
