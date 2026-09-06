import { Orientation, Command } from './commons.js'

export function solve(commands) {
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

