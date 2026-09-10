import { readFile } from '../utils.js'

import { solve as part1 } from './part_1.js'
import { solve as part2 } from './part_2.js'

const input = (await readFile('./input.txt')).trimEnd()

const grid = input.split('\n').map(line => line.split(''));

console.log("part 1: ", part1(grid));
console.log("part 2: ", part2(grid));
