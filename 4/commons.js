export const PAPER_CHAR = '@';
export const REMOVED_CHAR = 'x';

export const Directions = Object.freeze({
	UP: 	{x:1, y: 0},
	DOWN: 	{x:-1, y: 0},
	RIGHT:	{x:0, y: 1},
	LEFT:	{x:0, y: -1},
	UP_R:	{x:1, y: 1},
	UP_L:	{x:1, y: -1},
	DOWN_R:	{x:-1, y: 1},
	DOWN_L:	{x:-1, y: -1}
});

export function getAdjacentPapersQuantity(grid, position) {
	let quantity = 0;

	for (let key in Directions) {
		const move = Directions[key];

		if (grid[position.x + move.x] == undefined) continue;

		if (grid[position.x + move.x][position.y + move.y] == PAPER_CHAR) quantity++;		
	}

	return quantity;
}
