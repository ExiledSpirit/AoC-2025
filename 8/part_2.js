import { calcDistances, boxesCache, buildCircuit } from './commons.js'

export function solve(boxes) {
	const circuits = [];

	for (let i = 0; i < boxes.length; i++) {
		calcDistances(boxes, i);
	}

	const pairs = filterPairs().map((key) => {
			const [idA, idB] = key.split('-');
			return {a: boxes[idA], b: boxes[idB]};
		});

	let index = 0;
	while(circuits.find((circuit) => circuit.boxes.length == boxes.length) == undefined) {
		const pair = pairs[index];
		buildCircuit(circuits, boxes, pair.a, pair.b);
		index++;
	}

	const lastPair = pairs[index - 1];
	return lastPair.a.x * lastPair.b.x
}

function filterPairs() {
	const keys = boxesCache.keys().toArray();

	return keys.sort((a, b) => boxesCache.get(a) - boxesCache.get(b));
}

