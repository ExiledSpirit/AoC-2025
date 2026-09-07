import { PAPER_CHAR, getAdjacentPapersQuantity } from './commons.js';

export function solve(grid) {
	let answer = 0;

	for (let x = 0; x < grid.length; x++) {
		for (let y = 0; y < grid[x].length; y++) {
			if (grid[x][y] != PAPER_CHAR) continue;
			if (getAdjacentPapersQuantity(grid, {x, y}) < 4) answer++;		
		}
	}

	return answer;
}


