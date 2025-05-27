import { Type } from '@sinclair/typebox'


export const CreateUserRequestSchema = Type.Object({
	name: Type.String({ maxLength: 55 }),
	email: Type.String({ format: 'email' }),
})

export const CreateUserResponseSchema = Type.Object({
	id: Type.String(),
	name: Type.String(),
	email: Type.String(),
})


export const CreateUserRequest = CreateUserRequestSchema.static
export const CreateUserResponse = CreateUserResponseSchema.static