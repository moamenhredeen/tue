import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify'

export async function taskRoute(app: FastifyInstance, options: FastifyPluginOptions) {

	app.get('/', {
		schema: {
			querystring: {
				type: 'object',
				properties: {
					email: 'string'
				}
			}
		 }
	}, async function getTasksHandler(req: FastifyRequest, res: FastifyReply) {
		return ["first", "second"]
	})

	app.get('/:id', async function getByIdHandler(req: FastifyRequest, res: FastifyReply){
		return {}
	})


	app.patch('/:id', async function getByIdHandler(req: FastifyRequest, res: FastifyReply){
		return {}
	})


	app.delete('/:id', async function getByIdHandler(req: FastifyRequest, res: FastifyReply){
		return {}
	})


	app.post('/', async function getByIdHandler(req: FastifyRequest, res: FastifyReply){
		return {}
	})
}
