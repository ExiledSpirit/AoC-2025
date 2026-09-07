import { getAdjacentPapersQuantity, PAPER_CHAR, REMOVED_CHAR, Directions } from './commons.js'

export function solve(grid) {
	let answer = 0;
	let shouldStop = false;

	for (let x = 0; x < grid.length; x++) {
		for (let y = 0; y < grid[x].length; y++) {
			if (grid[x][y] != PAPER_CHAR) continue;
			if (shouldRemove(grid, {x, y})) {
				answer += removeRecursive(grid, {x, y});
			}
		}
	}

	return answer;
}

function shouldRemove(grid, position) {
	if (grid[position.x] == undefined) return false;
	if (grid[position.x][position.y] != PAPER_CHAR) return false;
	if (getAdjacentPapersQuantity(grid, position) < 4) return true;

	return false;
}

function removeRecursive(grid, position) {
	let quantityRemoved = 1;
	grid[position.x][position.y] = REMOVED_CHAR;

	for (let key in Directions) {
		const move = Directions[key];
		const movedPosition = { x: position.x + move.x, y: position.y + move.y };

		if (shouldRemove(grid, movedPosition)) {
			quantityRemoved += removeRecursive(grid, movedPosition);
		}
	}

	return quantityRemoved;
}
