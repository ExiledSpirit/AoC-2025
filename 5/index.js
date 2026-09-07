import { readFile } from '../utils.js'
import { solve as part1 } from './part_1.js'
import { solve as part2 } from './part_2.js'

const input = await readFile('./input.txt');

const [idRangesInput, idListsInput] = input.trimEnd().split('\n\n');

const idRanges = idRangesInput.split('\n').map(row => row.split('-').map(num => Number(num)));
const idLists = idListsInput.split('\n').map(num => Number(num));

console.log("part 1: ", part1(idRanges, idLists));
console.log("part 2: ", part2(idRanges,idLists));
