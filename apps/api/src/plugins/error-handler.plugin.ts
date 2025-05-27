import { FastifyError } from '@fastify/error'
import { FastifyReply, FastifyRequest } from 'fastify'


export async function errorHandlerPlugin(err: FastifyError, req: FastifyRequest, res: FastifyReply) {
	if (err.validation) {
		res.status(422).send(err.validation)
	}
}
