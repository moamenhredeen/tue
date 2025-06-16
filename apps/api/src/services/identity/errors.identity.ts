import { BusinessError } from '@common'

export class UserAlreadyRegisteredError extends BusinessError {
	constructor() {
		super('UserAlreadyRegistered')
	}
}

export class UserNotRegisteredError extends BusinessError {
	constructor() {
		super('UserNotRegistered')
	}
}

export class InvalidCredentialsError extends BusinessError {
	constructor() {
		super('InvalidCredentials')
	}
}

export class UserDoesNotExistError extends BusinessError {
	constructor() {
		super('UserDoesNotExist')
	}
}
