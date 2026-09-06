import { readFile } from '../utils.js'
import { solve as part1 } from './part_1.js'
import { solve as part2 } from './part_2.js'

const input = await readFile('./input.txt');

const rangesList = input.split(',').map(item => item.split('-').map(number => Number(number)));

console.log("part 1: ", part1(rangesList));
console.log("part 2: ", part2(rangesList));
