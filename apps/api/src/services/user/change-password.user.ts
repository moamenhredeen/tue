import { appDataSource, users } from '@database'
import { eq } from 'drizzle-orm'

export type ChangeUserPasswordRequest = {
	id: number,
	password: string
}

export type ChangeUserPasswordResponse = {
	id: number,
	email: string,
	createdAt: Date,
	updatedAt: Date
}

export async function changeUserPassword(req: ChangeUserPasswordRequest): Promise<ChangeUserPasswordResponse> {
	const hash = req.password + 'hash'
	const result = await appDataSource
		.update(users)
		.set({passwordHash: hash})
		.where(eq(users.id, req.id))

	return toResponse(result.rows[0])
}


export function toResponse(user: typeof users.$inferSelect): ChangeUserPasswordResponse {
	return {
		id: user.id,
		email: user.email,
		createdAt: user.createdAt,
		updatedAt: user.updatedAt,
	}
}
