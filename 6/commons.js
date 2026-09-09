export const SUM_CHAR = '+';
export const MULT_CHAR = '*';

export const Operator = Object.freeze({
	SUM: "+",
	MULT: "*"
});

export class Problem {
	constructor(numbers, operator) {
		this.numbers = numbers;
		this.operator = operator;
	}

	static parse_part_1(input) {
		const inputProblems = input.split('\n').map(line => line.replace(/\s+/g, ' ').trim().split(' '))

		const PROBLEMS_QUANTITY = inputProblems[0].length;
		const PROBLEMS_SIZE = inputProblems.length;

		const problems = [];

		for (let i = 0; i < PROBLEMS_QUANTITY; i++) {
			const problem = []
			for (let j = 0; j < PROBLEMS_SIZE; j++) {	
				problem.push(inputProblems[j][i]);
			}
			problems.push(problem);
		}

		return problems.map((line) => {
			const operator = line.pop();
			const numbers = line.map(num => Number(num));

			return new Problem(numbers, operator)
		});
	}

	static parse_part_2(input) {
		const inputProblems = input.split('\n').map(line => line.split(''));
		
		const LINES = inputProblems.length;
		const COLUMNS = inputProblems[0].length;

		const problems = [];

		let currentProblem = {
			operator: undefined,
			numbers: [] 
		};

		for (let col = COLUMNS - 1; col >= 0; col--) {
			let newNumber = '';
			for (let line = 0; line < LINES; line++) {
				const frag = inputProblems[line][col];

				if (line == LINES - 1) {
					if (frag == Operator.MULT || frag == Operator.SUM) {
						currentProblem.operator = frag;
					}

					continue;
				}
				newNumber += frag ?? '';
			}

			if (newNumber.trim())
				currentProblem.numbers.push(newNumber);

			if (currentProblem.operator != undefined) {
				problems.push(new Problem(
					currentProblem.numbers.map((num) => Number(num)),
					currentProblem.operator
				));

				currentProblem = {
					operator: undefined,
					numbers: [] 
				}
			}
		}
		return problems;
	}

	// improved parsing after completing the challenge
	static better_parse_part_2(input) {
		const lines = input.trimEnd().split('\n');
		const colsSize = Math.max(...lines.map(line => line.length)); // probably could just cols = lines[0].length
									    // since all rows have same langth
		const cols = Array.from({ length: colsSize }, (_, colIndex) => {
			return lines.map(line => line[colsSize - colIndex - 1] || ' ').join('');
		});


		const problems = [];
		const problem = {
			numbers: [],
			operator: undefined
		}
	
		for (const col of cols) {
			const charArray = [...col];
			if (col.endsWith(Operator.MULT) || col.endsWith(Operator.SUM)) {
				problem.operator = charArray.pop();
			}

			if (charArray.join('').trim() != '')
				problem.numbers.push(Number(charArray.join('')))

			if (!problem.operator) continue;

			problems.push(structuredClone(problem));
			problem.numbers = [];
			problem.operator = undefined;
		}

		return problems;
	}
}

