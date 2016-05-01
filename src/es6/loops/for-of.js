/* global it, describe */
import {expect} from 'chai';

describe('Loops | For of', () => {
	it('for of has concise syntax and does the same for iterator', () => {
		let sum = 0;
		let a = [1, 2, 3, 4];

		for (let b of a) {
			sum += b;
		}

		expect(sum).to.equal(10);
	});

	it('iterators', () => {
		let sum = 0;
		let a = [1, 2, 3, 4];
		let it = a.values();
		let next = it.next();

		while (!next.done) {
			sum += next.value;
			next = it.next();
		}

		expect(sum).to.equal(10);
	});
});
