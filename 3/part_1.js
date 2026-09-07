import { findHighestRemaining } from './commons.js';

export function solve(banks) {
	const joltages = [];
	for (let i = 0; i < banks.length; i++) {
		const firstIdx = findHighestRemaining(banks[i], 0, banks[i].length - 1);
		const secondIdx = findHighestRemaining(banks[i], firstIdx+1, banks[i].length);
		joltages.push(Number(`${banks[i][firstIdx]}${banks[i][secondIdx]}`));
	}

	return joltages.reduce((joltage, total) => total += joltage, 0);
}

