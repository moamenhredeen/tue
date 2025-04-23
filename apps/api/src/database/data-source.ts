import { appConfig } from '../../app.config'
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres'

export const appDataSource: NodePgDatabase = drizzle({
	connection: appConfig.database.url,
	casing: 'snake_case',
})
