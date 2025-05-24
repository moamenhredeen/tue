import { FastifyReply, FastifyRequest } from 'fastify'

export async function notFoundHandlerPlugin(req: FastifyRequest, res: FastifyReply) {
	return {
		message: 'not found',
	}
}