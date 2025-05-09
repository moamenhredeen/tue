import { jsonb } from 'drizzle-orm/pg-core'
import {
	integer,
	pgTable,
	varchar,
	text,
	pgEnum,
	timestamp,
} from 'drizzle-orm/pg-core'

export const issueStatus = pgEnum('status', [
	'open',
	'in_progress',
	'done',
	'blocked',
])
export const issuePriority = pgEnum('priority', ['low', 'medium', 'high'])

export const issues = pgTable('issues', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	summary: varchar({ length: 255 }).notNull(),
	description: jsonb(),

	status: issueStatus(),
	priority: issuePriority(),

	originalEstimate: jsonb(),
	dueDate: timestamp(),

	plannedStartDate: timestamp(),
	plannedEndDate: timestamp(),

	actualStartDate: timestamp(),
	actualEndDate: timestamp(),

	timeSpent: integer(),
	timeRemaining: integer(),

	createdAt: timestamp().defaultNow().notNull(),
	updatedAt: timestamp().defaultNow().notNull(),
	deletedAt: timestamp(),
})
