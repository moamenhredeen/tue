import { db, users } from '@database'
import { eq } from 'drizzle-orm'
import { InvalidCredentialsError, UserNotRegisteredError } from '@services/identity/errors.identity.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { appConfig } from '../../config.js'

/**
 * sign a user in
 * @param request user credentials
 * @throws UserNotRegisteredError
 * @throws InvalidCredentialsError
 */
export async function login(request: LoginRequest): Promise<LoginResponse> {
	const result = await db.select().from(users).where(eq(users.email, request.email))
	if (result.length === 0) {
		throw new UserNotRegisteredError()
	}

	const user = result[0]
	const isPasswordCorrect = await bcrypt.compare(request.password, user.password_hash)
	if (!isPasswordCorrect) {
		throw new InvalidCredentialsError()
	}

	const token = jwt.sign({
		id: user.id,
	}, appConfig.jwtSecret, { expiresIn: '1h' })

	return {
		token: token,
	}
}

export type LoginRequest = {
	email: string,
	password: string
}

export type LoginResponse = {
	token: string
}
