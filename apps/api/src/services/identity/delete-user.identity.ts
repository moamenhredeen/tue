import { db, users } from '@database'
import { eq } from 'drizzle-orm'
import { UserDoesNotExistError } from '@services/identity/errors.identity.js'

export async function deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
	const res = await db.delete(users).where(eq(users.id, request.userId)).returning()
	if (res.length === 0) {
		throw new UserDoesNotExistError()
	}

	const user = res[0]
	return {
		id: user.id,
		firstName: user.first_name,
		lastName: user.last_name,
		email: user.email,
	}
}

export type DeleteUserRequest = {
	userId: string
}
export type DeleteUserResponse = {
	id: string,
	firstName: string,
	lastName: string,
	email: string
}