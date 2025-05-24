import { appDataSource, users } from '@database'
import { eq } from 'drizzle-orm'


export type GetUserByIdResponse = {
	id: number,
	email: string,
	createdAt: Date,
	updatedAt: Date
}

export async function getUserById(id: number): Promise<GetUserByIdResponse> {
	const result = await appDataSource.select()
		.from(users)
		.where(eq(users.id, id))
	return toResponse(result[0])
}

export function toResponse(user: typeof users.$inferSelect): GetUserByIdResponse {
	return {
		id: user.id,
		email: user.email,
		createdAt: user.createdAt,
		updatedAt: user.updatedAt,
	}
}
