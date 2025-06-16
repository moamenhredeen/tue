import { integer, varchar, pgTable, text, timestamp, pgEnum, uuid } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	email: varchar().notNull().unique(),
	password_hash: varchar().notNull(),
	created_at: timestamp().notNull().defaultNow(),
	updated_at: timestamp().notNull().defaultNow(),
	deleted_at: timestamp(),
})


export const priorityEnum = pgEnum('priority', ['low', 'medium', 'high']);
export const statusEnum = pgEnum('status', ['todo', 'doing', 'done']);

export const issues = pgTable('issues', {
	id: uuid().primaryKey().defaultRandom(),
	summary: varchar().notNull(),
	description: text(),
	status: statusEnum(),
	priority: priorityEnum(),
	created_at: timestamp().notNull().defaultNow(),
	updated_at: timestamp().notNull().defaultNow(),
	deleted_at: timestamp(),
})