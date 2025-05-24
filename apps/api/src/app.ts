import fastify from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { fastifyJwt } from '@fastify/jwt'
import { pino } from 'pino'

import { appConfig } from './config.js'
import { errorHandlerPlugin, notFoundHandlerPlugin } from '@plugins'
import { authRoute } from '@routes'

export async function app() {

	const app = fastify({
		loggerInstance: pino({
			transport: {
				target: 'pino-pretty',
			},
		}),
	})

	app.register(fastifyCors, {})
	app.register(fastifyJwt, { secret: appConfig.jwtSecret })

	app.register(authRoute, { prefix: 'auth' })

	app.setNotFoundHandler(notFoundHandlerPlugin)
	app.setErrorHandler(errorHandlerPlugin)

	app.listen({ port: appConfig.port }, (err, _) => {
		if (err) {
			app.log.error(err)
			process.exit(1)
		}
	})
}

app()
