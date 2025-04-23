import {
	integer,
	pgTable,
	varchar,
	text,
	pgEnum,
	timestamp,
} from 'drizzle-orm/pg-core'

const timestamps = {
	createdAt: timestamp().defaultNow().notNull(),
	updatedAt: timestamp(),
	deletedAt: timestamp(),
}

const statusGroupEnum = pgEnum('group', ['OPEN', 'IN_PROGRESS', 'CLOSED'])

export const issueStatuses = pgTable('issue_statuses', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: varchar({ length: 255 }).notNull(),
	description: text(),
	group: statusGroupEnum(),
	...timestamps,
})

export const issues = pgTable('issues', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	title: varchar({ length: 255 }).notNull(),
	description: text(),
	statusId: integer()
		.references(() => issueStatuses.id)
		.notNull(),
	...timestamps,
})
