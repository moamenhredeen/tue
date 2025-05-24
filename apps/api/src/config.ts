import { config } from '@dotenvx/dotenvx'
import { getEnvVar } from '@utils'

export type Config = {
	port: number;
	jwtSecret: string,
	database: {
		host: string;
		port: number;
		user: string;
		password: string;
		name: string;
	}
}

config()

export const appConfig: Config = {
	port: 3000,
	jwtSecret: getEnvVar('JWT_SECRET'),
	database: {
		host: getEnvVar('DATABASE_HOST'),
		port: parseInt(getEnvVar('DATABASE_PORT')),
		user: getEnvVar('DATABASE_USER'),
		password: getEnvVar('DATABASE_PASSWORD'),
		name: getEnvVar('DATABASE_NAME'),
	},
}