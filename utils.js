import { promises as fs } from 'node:fs';

export async function readFile(path) {
	try {
		const data = await fs.readFile(path, 'utf8');
		return data;
	} catch (err) {
		console.error('Error reading file:', err);
	}
}

