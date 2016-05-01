/* global it, describe */
import {expect} from 'chai';

describe('Generators | example', () => {
	it('', () => {
		let numbers = function *() {
			yield 1;
			yield 2;
			yield 3;
		};

		let sum = 0;
		let iterator = numbers();
		let next = iterator.next();

		while (!next.done) {
			sum += next.value;
			next = iterator.next();
		}

		expect(sum).to.equal(6);
	});
});
