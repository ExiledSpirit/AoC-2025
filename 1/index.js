import { readFile } from '../utils.js';

const Orientation = Object.freeze({
	LEFT: "L",
	RIGHT: "R"
});

class Command {
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

const input = await readFile('./input.txt');

const commandsList = input.trimEnd().split('\n').map(str => Command.parse(str));

function solve(commands) {
	const STARTING_VALUE = 50;
	const MAX_VALUE = 99;
	const MODULO_VALUE = MAX_VALUE + 1;

	let currentValue = STARTING_VALUE;
	let index = 0;
	let answer = 0;
	

	while (index < commands.length) {
		if (commands[index].orientation == Orientation.LEFT) {
			currentValue = (MODULO_VALUE + (currentValue - (commands[index].value % MODULO_VALUE))) % MODULO_VALUE;
		} else {
			currentValue = (MODULO_VALUE + (currentValue + (commands[index].value % MODULO_VALUE))) % MODULO_VALUE;
		}
		
		if (currentValue == 0) answer++;
		index++;
	}

	return answer;
}

console.log(solve(commandsList));
