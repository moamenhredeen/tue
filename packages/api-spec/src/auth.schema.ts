import { Static, Type } from '@sinclair/typebox'

// -----------------------------------------------------------------------------
// Register
// -----------------------------------------------------------------------------
export const RegisterRequestSchema = Type.Object({
	name: Type.String({ maxLength: 55 }),
	email: Type.String({ format: 'email' }),
	password: Type.String({ minLength: 8, maxLength: 128 }),
})

export const RegisterResponseSchema = Type.Object({
	token: Type.String(),
})

export type RegisterRequest = Static<typeof RegisterRequestSchema>
export type RegisterResponse = Static<typeof RegisterResponseSchema>


// -----------------------------------------------------------------------------
// Login
// -----------------------------------------------------------------------------

export const LoginRequestSchema = Type.Object({
	email: Type.String({ format: 'email' }),
	password: Type.String({ minLength: 8, maxLength: 128 }),
})

export const LoginResponseSchema = Type.Object({
	token: Type.String(),
})


export type LoginRequest = Static<typeof LoginRequestSchema>
export type LoginResponse = Static<typeof LoginResponseSchema>