export class BusinessError extends Error {
	#code: string

	constructor(code: string) {
		super()
		this.#code = code
	}
}