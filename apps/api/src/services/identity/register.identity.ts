import bcrypt from 'bcrypt'
import { db, users } from '@database'
import { eq } from 'drizzle-orm'
import { UserAlreadyRegisteredError } from '@services/identity/errors.identity.js'

/**
 * register a new user
 * @param request data of the user to register
 * @throws UserAlreadyRegisteredError
 */
export async function register(request: RegisterRequest): Promise<void> {
	const res = await db.$count(users, eq(users.email, request.email))
	if (res > 0) {
		throw new UserAlreadyRegisteredError()
	}

	const hashedPassword = await bcrypt.hash(request.password, 10)
	await db.insert(users).values({
		first_name: request.firstName,
		last_name: request.lastName,
		email: request.email,
		password_hash: hashedPassword,
	})
}

export type RegisterRequest = {
	firstName: string,
	lastName: string
	email: string,
	password: string,
}