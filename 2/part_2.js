export function solve(rangeList) {
	let answer = 0;

	for (let index in rangeList) {
		const range = rangeList[index];

		for (let id = range[0]; id < range[1]; id++) {
			const stringifiedId = String(id);
			answer += solveMultiples(stringifiedId);
		}
	}

	return answer;
}

// uses the recursive function to get multiples and look for patterns
// if found a pattern, return the ID, if not return 0.
function solveMultiples(id) {
	const length = id.length
	const multiplesMap = new Map();
	recursive(length, multiplesMap);

	for (const multiple of multiplesMap.keys()) {
		const compare = id.slice(0, multiple);

		let success = true;
		for (let i = 0; i < length; i+=multiple) {
			const iteration = id.slice(i, i+multiple);
			if (iteration != compare) success = false;
		}
		if (success) return Number(id);

	}

	return 0;
}

// finds every multiple for the given number and append it to the map reference
function recursive(num, map) {
	let multiple = 1;

	while (multiple < num) {
		if (num % multiple == 0 && !map.has(multiple)) {
			map.set(multiple, 1);
			recursive(multiple, map);
		}
		multiple++;
	}
}









