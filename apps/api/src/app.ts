import fastify from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { fastifyJwt } from '@fastify/jwt'
import { pino } from 'pino'

import { appConfig } from './config.js'
import { errorHandlerPlugin, notFoundHandlerPlugin } from '@plugins'
import { authRoute, taskRoute } from '@routes'
import { jwtHook } from './plugins/jwt.hook.js'



// ----------------- initialize app -----------------
const app = fastify({
	loggerInstance: pino({
		transport: {
			target: 'pino-pretty',
		},
	}),
})




// ----------------- plugins -----------------
app.register(fastifyCors, {})
app.register(fastifyJwt, {
	// secret: {
	// 	public: 'public key',
	// 	private: 'private key'
	// },
	secret: appConfig.jwtSecret,
	// sign: {
	// 	algorithm: 'EdDSA'
	// }
})


// ----------------- routes -----------------
app.register(authRoute, { prefix: 'auth' })
app.register(taskRoute, { prefix: 'task' })



// ----------------- error handling -----------------
app.setNotFoundHandler(notFoundHandlerPlugin)
app.setErrorHandler(errorHandlerPlugin)



// ----------------- start server -----------------
app.listen({ port: appConfig.port }, (err, _) => {
	if (err) {
		app.log.error(err)
		process.exit(1)
	}
})

