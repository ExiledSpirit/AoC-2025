export function solve(idRanges, idLists) {
	const sortedFrom = sortIdRanges(idRanges, 0);	
	const uniqueIdRanges = [];

	let idx = 0;

	while (idx < idRanges.length) {
		const newRange = sortedFrom[idx];
		for (let i = idx; i < idRanges.length; i++) {
			if (newRange[1] >= sortedFrom[i][0]) {
				if (newRange[1] < sortedFrom[i][1]) newRange[1] = sortedFrom[i][1];
				idx = i;
				continue;
			}
			break;
		}

		idx++;
		uniqueIdRanges.push(newRange);
	}

	return uniqueIdRanges.reduce((total, range) => total += (range[1] - range[0]) + 1, 0);
}

function sortIdRanges(idRanges, idx) {
	return idRanges.sort((a, b) => a[idx] - b[idx]);
}
