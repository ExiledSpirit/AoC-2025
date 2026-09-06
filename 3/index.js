import { readFile } from '../utils.js'
import { solve as part1 } from './part_1.js'
import { solve as part2 } from './part_2.js'

const input = await readFile('./input.txt');

console.log('part 1: ', part1(input));
console.log('part 2: ', part2(input));
