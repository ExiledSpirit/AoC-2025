import { readFile } from '../utils.js'
import { solve as part1 } from './part_1.js'
import { solve as part2 } from './part_2.js'

const input = await readFile('./input.txt');

const papersGrid = input.trimEnd().split('\n').map(item => item.split(''));

console.log("part 1: ", part1(papersGrid));
console.log("part 2: ", part2(papersGrid));
