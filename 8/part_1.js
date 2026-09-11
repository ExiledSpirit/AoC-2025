import { calcDistances, boxesCache, buildCircuit } from './commons.js'

export function solve(boxes) {
	const circuits = [];

	for (let i = 0; i < boxes.length; i++) {
		calcDistances(boxes, i);
	}

	const closestPairs = filterPairs(1000)
		.map((key) => {
			const [idA, idB] = key.split('-');
			return {a: boxes[idA], b: boxes[idB]};
		});

	for (const pair of closestPairs) {
		buildCircuit(circuits, boxes, pair.a, pair.b);
	}

	return circuits
		.sort((circuitA, circuitB) => circuitB.boxes.length - circuitA.boxes.length)
		.slice(0, 3).reduce((total, circuit) => {
			return total *= circuit.boxes.length
		}, 1);
}

function filterPairs(quantity) {
	const keys = boxesCache.keys().toArray();

	return keys.sort((a, b) => boxesCache.get(a) - boxesCache.get(b)).slice(0, quantity);
}

