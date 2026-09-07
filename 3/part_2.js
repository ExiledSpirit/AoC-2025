import {findHighestRemaining} from './commons.js';

export function solve(banks) {
	const joltages = [];
	const BATTERIES_PER_BANK = 12;

	for (let i = 0; i < banks.length; i++) {
		let lastIndex = -1;
		let resultingNumber = '';
		for (let j = BATTERIES_PER_BANK; j > 0; j--) {
			let index = findHighestRemaining(banks[i], lastIndex + 1, (banks[i].length) - (j - 1));

			lastIndex = index;
			resultingNumber = `${resultingNumber}${banks[i][lastIndex]}`;
		}

		joltages.push(Number(resultingNumber));
	}

	return joltages.reduce((joltage, total) => total += joltage, 0);
}

