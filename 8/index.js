// Probably did a bad job with this one
// it's worth checking for other solutions online later on

import { readFile } from '../utils.js'

import { solve as part1 } from './part_1.js'
import { solve as part2 } from './part_2.js'

const input = (await readFile('./input.txt')).trimEnd()

const boxes = input.split('\n').map((box, id) => {
	let [x, y, z] = box.split(',');
	x = Number(x);
	y = Number(y);
	z = Number(z);

	return {id, x, y, z, circuit: -1};
});

console.log("part 1: ", part1(structuredClone(boxes)));
console.log("part 2: ", part2(structuredClone(boxes)));
