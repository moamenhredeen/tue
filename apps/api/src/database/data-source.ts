import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres'
import { appConfig } from '../config.js'

export const appDataSource: NodePgDatabase = drizzle({
	connection: {
		host: appConfig.database.host,
		port: appConfig.database.port,
		database: appConfig.database.name,
		user: appConfig.database.user,
		password: appConfig.database.password,
	},
	casing: 'snake_case',
})
