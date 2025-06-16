import { varchar, pgTable, text, timestamp, pgEnum, uuid, json, primaryKey } from 'drizzle-orm/pg-core'


export const userStatusEnum = pgEnum('status', ['pending', 'active', 'disabled', 'blocked'])

export const users = pgTable('users', {
	id: uuid().primaryKey().defaultRandom(),
	first_name: varchar().notNull(),
	last_name: varchar().notNull(),
	email: varchar().notNull().unique(),
	password_hash: varchar().notNull(),
	status: userStatusEnum().notNull().default('active'),
	created_at: timestamp().notNull().defaultNow(),
	updated_at: timestamp().notNull().defaultNow(),
	deleted_at: timestamp(),
})

export const auditActionEnum = pgEnum('action', ['create', 'update', 'delete', 'restore'])
export const auditLogs = pgTable('audit_logs', {
	id: uuid().primaryKey().defaultRandom(),
	entity_type: varchar(),
	entity_id: uuid().notNull(),
	action: auditActionEnum().notNull(),
	performed_by: uuid().references(() => users.id),
	diff: json(),
	note: text(),
})

export const tags = pgTable('tags', {
	id: uuid().primaryKey().defaultRandom(),
	name: varchar().notNull(),
	description: text(),
	created_at: timestamp().notNull().defaultNow(),
	updated_at: timestamp().notNull().defaultNow(),
	deleted_at: timestamp(),
})


export const inbox = pgTable('inbox', {
	id: uuid().primaryKey().defaultRandom(),
	summary: varchar().notNull(),
	description: text(),
})
export const inboxToTags = pgTable('inbox_tagbs', {
	inbox_id: uuid().notNull().references(() => inbox.id),
	tag_id: uuid().notNull().references(() => tags.id),
}, (table) => [
	primaryKey({
		columns: [table.inbox_id, table.tag_id],
	}),
])

export const projectStatusEnum = pgEnum('status', ['planned', 'active', 'on_hold'])
export const projects = pgTable('projects', {
	id: uuid().primaryKey().defaultRandom(),
	name: varchar().notNull(),
	description: text(),
	status: projectStatusEnum().notNull().default('planned'),
	created_at: timestamp().notNull().defaultNow(),
	updated_at: timestamp().notNull().defaultNow(),
	deleted_at: timestamp(),
})

export const projectsToTags = pgTable('projects_tags', {
	project_id: uuid().references(() => projects.id),
	tag_id: uuid().references(() => tags.id),
}, (table) => [
	primaryKey({
		columns: [table.project_id, table.tag_id],
	}),
])

export const issuePriorityEnum = pgEnum('priority', ['low', 'medium', 'high'])
export const issueStatusEnum = pgEnum('status', ['todo', 'doing', 'done'])
export const issues = pgTable('issues', {
	id: uuid().primaryKey().defaultRandom(),
	summary: varchar().notNull(),
	description: text(),
	status: issueStatusEnum().notNull().default('todo'),
	priority: issuePriorityEnum().notNull().default('low'),
	project_id: uuid().notNull().references(() => projects.id),
	created_at: timestamp().notNull().defaultNow(),
	updated_at: timestamp().notNull().defaultNow(),
	deleted_at: timestamp(),
})
export const issuesToTags = pgTable('issues_tags', {
	issue_id: uuid().references(() => issues.id),
	tag_id: uuid().references(() => tags.id),
}, (table) => [
	primaryKey({
		columns: [table.issue_id, table.tag_id],
	}),
])