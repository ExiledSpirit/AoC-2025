export function solve(idRanges, idLists) {
	let answer = 0;

	for (let id of idLists) {
		if (findRangesQuantity(idRanges, Number(id)) > 0) answer++;
	}

	return answer;
}

function findRangesQuantity(idRanges, id) {
	let quantity = 0;
	for (const range of idRanges) {
		if (id < range[0]) continue;
		if (id > range[1]) continue;
		quantity++;
	}

	return quantity;
}
