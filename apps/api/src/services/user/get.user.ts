import { appDataSource, users } from '@database'

export type UserFilter = {
	username: string,
	email: string
}

export type GetUserResponse = {
	id: number,
	email: string,
	createdAt: Date,
	updatedAt: Date
}


export async function getUsers(filter: UserFilter): Promise<GetUserResponse[]> {
	const result = await appDataSource
		.select()
		.from(users)

	return toResponse(result)
}


function toResponse(user: typeof users.$inferSelect[]): GetUserResponse[] {
	return user.map(el => ({
			id: el.id,
			email: el.email,
			createdAt: el.createdAt,
			updatedAt: el.updatedAt,
		}))
}
