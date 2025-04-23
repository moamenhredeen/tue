import fastify from 'fastify'
import { appDataSource } from './database/data-source'
import fastifyAutoload from '@fastify/autoload'
import fastifyCors from '@fastify/cors'
import path from 'path'
import { appConfig } from '../app.config'

async function main() {
	// setup database

	// setup fastify
	const app = fastify({
		logger: true,
	})

	app.register(fastifyCors, {})

	app.register(fastifyAutoload, {
		dir: path.join(__dirname, 'controllers'),
		matchFilter: (path) => path.endsWith('.controller.ts'),
		options: {
			prefix: 'api',
		},
	})

	// start server
	app.listen({ port: appConfig.port }, (err, address) => {
		if (err) {
			app.log.error(err)
			process.exit(1)
		}
	})
}

main()
