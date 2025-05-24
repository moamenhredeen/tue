import { appDataSource, users } from '@database'

export type CreateUserRequest = {
	email: string,
	password: string
}

export type CreateUserResponse = {
	id: number,
	email: string,
	createdAt: Date,
	updatedAt: Date
}


export async function createUser(req: CreateUserRequest): Promise<CreateUserResponse> {
	const hash = req.password + 'hash'
	const result = await appDataSource.insert(users).values({
		email: req.email,
		passwordHash: hash,
	})
	return toResponse(result.rows[0])
}

export function toResponse(user: typeof users.$inferSelect): CreateUserResponse {
	return {
		id: user.id,
		email: user.email,
		createdAt: user.createdAt,
		updatedAt: user.updatedAt,
	}
}
