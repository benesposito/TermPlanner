
export class InvalidParamError extends Error {
	constructor() {
		super('Invalid parameter');
	}
}

export class NotImplementedError extends Error {
	constructor() {
		super('Function has not been implemented');
	}
}