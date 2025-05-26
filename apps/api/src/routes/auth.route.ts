import { createUser, CreateUserRequest } from '@services/user/create.user.js'
import fastify, { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify'

export async function authRoute(app: FastifyInstance, options: FastifyPluginOptions) {

	app.post('/register', {
		schema: {
			body: {
				type: 'object',
				properties: {
					email: {
						type: 'string' 
					},
					password: {
						type: 'string'
					}
				}
			}
		}
	}, async function registerHandler(req: FastifyRequest, res: FastifyReply) {
		const createUserRequest = req.body as CreateUserRequest
		const createUserResponse = await createUser(createUserRequest);
		const token = app.jwt.sign({ createUserResponse })
		return {token}
	})

	app.post('/login', {
		schema: {
			body: {
				type: 'object',
				properties: {
					email: {
						type: 'string' 
					},
					password: {
						type: 'string'
					}
				}
			}
		}
	}, async function loginHandler(req: any, res: FastifyReply) {
		// login
	})
}
