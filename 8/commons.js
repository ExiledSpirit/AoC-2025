export const boxesCache = new Map();
const getCacheKey = (idA, idB) => `${idA}-${idB}`;

const genCircuitId = (circuits) => circuits.length;

export function calcDistances(boxes, id) {
	for (let i = id; i < boxes.length; i++) {
		const idB = (i+1) % boxes.length;
		if (idB == id || boxesCache.get(getCacheKey(idB, id))) continue;
		const distance = calcDistance(boxes[id], boxes[idB]);
		boxesCache.set(getCacheKey(id, idB), distance);
	}
}

export function buildCircuit(circuits, boxes, boxA, boxB) {
	if (boxA.circuit == boxB.circuit && boxA.circuit != -1) {
		return 0;
	}

	if (boxA.circuit == -1 && boxB.circuit == -1) {
		const circuit = createCircuit(genCircuitId(circuits), boxA, boxB);
		boxA.circuit = circuit.id;
		boxB.circuit = circuit.id;
		circuits.push(circuit);
	}

	const circuit = createCircuit(genCircuitId(circuits), boxA, boxB);

	const boxesToAdd = [];
	if (boxA.circuit != -1) 
	{
		boxesToAdd.push(...circuits[boxA.circuit].boxes);
		circuits[boxA.circuit].boxes = [];
	}
	if (boxB.circuit != -1) {
		boxesToAdd.push(...circuits[boxB.circuit].boxes);
		circuits[boxB.circuit].boxes = [];
	}

	circuit.boxes = [...new Set([...circuit.boxes, ...boxesToAdd])]

	boxA.circuit = circuit.id;
	boxB.circuit = circuit.id;
	circuits.push(circuit);

	for (const boxId of circuit.boxes) {
		boxes[boxId].circuit = circuit.id
	}
}

function createCircuit(id, boxA, boxB) {
	return {
		id,
		boxes: [boxA.id, boxB.id]
	};
}

function calcDistance(a, b) {
	return Math.sqrt(Math.pow((a.x - b.x), 2) + Math.pow((a.y - b.y), 2) + Math.pow((a.z - b.z), 2));
}

