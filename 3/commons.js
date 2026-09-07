export function findHighestRemaining(bank, startingIdx, endingIdx) {
	let maximumIdx = startingIdx;
	let maximumValue = -1;

	for (let i = startingIdx; i < endingIdx; i++) {
		if (bank[i] <= maximumValue) continue;

		maximumIdx = i;
		maximumValue = bank[i]
	}

	return maximumIdx
}
