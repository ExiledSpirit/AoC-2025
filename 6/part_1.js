import { Operator } from './commons.js'

export function solve(problems) {	
	return problems.reduce((total, problem) => total += solveProblem(problem), 0);
}

function solveProblem(problem) {
	return problem.numbers.reduce((total, number) => {
		if (problem.operator === Operator.SUM) 
			return total += number;
		return total = Math.max(total, 1) * number;
	}, 0);
}

