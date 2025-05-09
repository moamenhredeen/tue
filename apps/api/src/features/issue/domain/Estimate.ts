export class Estimate {
	value: number
	unit: 'hours' | 'days' | 'weeks' | 'months'

	constructor(value: number, unit: 'hours' | 'days' | 'weeks' | 'months') {
		this.value = value
		this.unit = unit
	}
}
