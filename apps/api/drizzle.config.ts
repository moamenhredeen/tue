import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'
import { getEnvVar } from '@utils'

export default defineConfig({
	out: './src/database/migrations',
	schema: './src/database/schema.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: getEnvVar('DATABASE_URL'),
	},
})
