import { db, users } from '@database'
import { eq } from 'drizzle-orm'
import { UserDoesNotExistError } from '@services/identity/errors.identity.js'

export async function getUserById(request: GetUserByIdRequest): Promise<GetUserByIdResponse> {
	const result = await db.select().from(users).where(eq(users.id, request.id))
	if (result.length === 0) {
		throw new UserDoesNotExistError()
	}

	const user = result[0]
	return {
		id: user.id,
		firstName: user.first_name,
		lastName: user.last_name,
		email: user.email,
	}
}


export type GetUserByIdRequest = {
	id: string
}

export type GetUserByIdResponse = {
	id: string,
	firstName: string,
	lastName: string,
	email: string,
}