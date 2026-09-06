export const Orientation = Object.freeze({
	LEFT: "L",
	RIGHT: "R"
});

export class Command {
	constructor(orientation, value) {
		this.orientation = orientation;	// "L" or "R"
		this.value = value;		// number
	}

	static parse(input) {
		const directionLetter = input.charAt(0);
		const numberValue = parseInt(input.slice(1), 10);

		const isValid = Object.values(Orientation).includes(directionLetter);
		if (!isValid) {
			throw new Error(`Invalid orientation letter: ${directionLetter}`);
		}

		return new Command(directionLetter, numberValue);
	}
}

