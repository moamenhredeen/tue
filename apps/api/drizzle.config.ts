import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'
import { appConfig } from './src/config.js'

export default defineConfig({
	out: './src/database/migrations',
	schema: './src/database/schema.ts',
	dialect: 'postgresql',
	dbCredentials: {
		host: appConfig.database.host,
		port: appConfig.database.port,
		user: appConfig.database.user,
		password: appConfig.database.password,
		database: appConfig.database.name,
	},
})
