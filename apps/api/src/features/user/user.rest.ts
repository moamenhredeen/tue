import { FastifyInstance } from 'fastify'

export default async (app: FastifyInstance) => {
	app.get('/users', async (request, reply) => {
		const users = await getUsers()
		return reply.status(200).send(users)
	})
}
