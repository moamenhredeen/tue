import { FastifyReply, FastifyRequest } from "fastify";


export async function jwtHook(req: FastifyRequest, res: FastifyReply) {
	try {
		await req.jwtVerify()
	} catch (err) {
		res.send(err)
	}
}
