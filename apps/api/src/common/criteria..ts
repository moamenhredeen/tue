export type Criteria<T = never> = {
	skip: number,
	limit: number,
	filter?: T,
}

export function defaultCriteria<T = never>(filter?: T): Criteria<T> {
	return {
		skip: 0,
		limit: 25,
		filter: filter,
	}
}