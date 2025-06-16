import { db, users } from '@database'
import { and, eq, isNull } from 'drizzle-orm'
import { UserDoesNotExistError } from '@services/identity/errors.identity.js'

/**
 * update user with id
 * @param request updated use fields
 * @throws UserDoesNotExistError if the user was not found
 */
export async function UpdateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
	const res = await db.update(users).set({
		first_name: request.firstName || undefined,
		last_name: request.lastName || undefined,
	}).where(and(
		isNull(users.deleted_at),
		eq(users.id, request.id),
	)).returning()

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

export type UpdateUserRequest = {
	id: string,
	firstName?: string,
	lastName?: string,
}
export type UpdateUserResponse = {
	id: string,
	firstName: string,
	lastName: string,
	email: string,
}