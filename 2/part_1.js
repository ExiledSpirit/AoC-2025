function isOdd(number) {
	return number % 2 == 1
}

export function solve(ranges) {
	let idSum = 0;
	
	for (let i in ranges) {
		const range = ranges[i]

		for (let id = range[0]; id < range[1]; id++) {
			const stringifiedId = String(id);
			const idLength = stringifiedId.length;

			if (isOdd(idLength)) continue;

			if (stringifiedId.slice(0, idLength/2) == stringifiedId.slice(idLength/2, idLength)) {
				//console.log("equals: ", id);
				idSum += id;
			}
		}
	}

	return idSum;
}

