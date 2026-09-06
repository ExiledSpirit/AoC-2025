import { readFile } from '../utils.js';
import { Command } from './commons.js'
import { solve as part1 } from './part_1.js'
import { solve as part2 } from './part_2.js'

const input = await readFile('./input.txt');

const commandsList = input.trimEnd().split('\n').map(str => Command.parse(str));

console.log("part 1: ", part1(commandsList));
console.log("part 2: ", part2(commandsList));

