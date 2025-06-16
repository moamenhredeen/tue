import { db, users } from '@database'
import { and, eq, ilike, isNull } from 'drizzle-orm'
import { Criteria } from '@common'

export async function getUsers(criteria: Criteria<UserFilter>): Promise<GetUsersResponse> {
	const result = await db.select()
		.from(users)
		.where(
			and(
				isNull(users.deleted_at),
				criteria.filter?.email ? ilike(users.email, criteria.filter.email) : undefined,
			),
		)
		.limit(criteria.limit)
		.offset(criteria.skip)
	const mappedUsers: GetUsersResponse['users'] = result.map(user => {
		return {
			id: user.id,
			firstName: user.first_name,
			lastName: user.last_name,
			email: user.email,
		}
	})

	const count = await db.$count(users, isNull(users.deleted_at))
	return {
		users: mappedUsers,
		count,
	}
}

export type UserFilter = {
	email: string
}

export type GetUsersResponse = {
	users: {
		id: string,
		firstName: string,
		lastName: string,
		email: string,
	}[],
	count: number
}