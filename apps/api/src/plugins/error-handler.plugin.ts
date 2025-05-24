import { FastifyError } from '@fastify/error'
import { FastifyReply, FastifyRequest } from 'fastify'


export async function errorHandlerPlugin(err: FastifyError, req: FastifyRequest, res: FastifyReply) {
	return {
		message: 'something went wrong',
	}
}