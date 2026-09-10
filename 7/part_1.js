import { START_CHAR, EMPTY_CHAR, SPLITTER_CHAR } from './commons.js';

export function solve(grid) {
	for (let x = 0; x < grid.length; x++) {
		for (let y = 0; y < grid[0].length; y++) {
			if (grid[x][y] == START_CHAR) {
				return castBeam(grid, {x, y});
			}
		}
	}

	return -1;
}

const getCacheKey = ({x, y}) => `${x},${y}`;
const splitterCache = new Map();

// Recursive function to cast a trace through the grid
function castBeam(grid, origin) {
	for (let x = origin.x; x < grid.length; x++) {
		if (grid[x][origin.y] == SPLITTER_CHAR) {
			const splitterCacheKey = getCacheKey({x, y: origin.y})
			if (splitterCache.get(splitterCacheKey)) return 0;

			const result = 1 + (castBeam(grid, {x, y: origin.y - 1}) + castBeam(grid, {x, y: origin.y + 1}));
			splitterCache.set(splitterCacheKey, result);

			return result;
		}
	}

	return 0;
}
