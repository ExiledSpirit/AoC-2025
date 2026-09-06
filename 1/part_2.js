import { Command, Orientation } from './commons.js'

export function solve(commands) {
	const configs = {
		STARTING_VALUE: 50,
		MAX_VALUE: 99,
		MODULO_VALUE: 100 
	};

	let currentValue = configs.STARTING_VALUE;
	let index = 0;
	let answer = 0;

	while (index < commands.length) {
		answer += calcClicksAtZero(currentValue, commands[index].orientation, commands[index].value, configs)
		currentValue = calcNewCurrentValue(currentValue, commands[index].orientation, commands[index].value, configs);

		index++;
	}

	return answer;
}

function calcNewCurrentValue(currentValue, orientation, value, configs) {
	if (orientation == Orientation.LEFT) {
		currentValue = (configs.MODULO_VALUE + (currentValue - (value % configs.MODULO_VALUE))) % configs.MODULO_VALUE;
	} else {
		currentValue = (configs.MODULO_VALUE + (currentValue + (value % configs.MODULO_VALUE))) % configs.MODULO_VALUE;
	}

	return currentValue;
}

function calcClicksAtZero(starting, orientation, value, configs) {
	let clicks = 0;
	let toZero = 0;

	if (orientation == Orientation.LEFT) {
		toZero = configs.MODULO_VALUE - (configs.MODULO_VALUE - starting);
	} else {
		toZero = configs.MODULO_VALUE - starting;
	}

	if ((value % configs.MODULO_VALUE) >= toZero && toZero != 0) clicks++;
	clicks += Math.floor(value / configs.MODULO_VALUE);
	return clicks;
}








