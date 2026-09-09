import { readFile } from '../utils.js'
import { Problem } from './commons.js'
import { solve as part1 } from './part_1.js'
import { solve as part2 } from './part_2.js'

const input = (await readFile('./input.txt')).trimEnd()

console.log("-- -- -- --");

console.log("improved parse after finishing the challenge: ", Problem.better_parse_part_2(input).slice(0, 3));
console.log("improved parse: ", part2(Problem.better_parse_part_2(input)))

console.log("-- -- -- --");

console.log("part 1: ", part1(Problem.parse_part_1(input)));
console.log("part 2: ", part2(Problem.parse_part_2(input)));
