/* global it, describe */
import {expect} from 'chai';

describe('Variables | Default params', () => {
	it('should use default params', () => {
		let doSomething = function(name = 'test') {
			return name;
		};
		expect(doSomething(undefined)).to.equal('test');
		expect(doSomething()).to.equal('test');
		expect(doSomething(null)).to.equal(null);
		expect(doSomething('test')).to.equal('test');
	});

	it('should provide a value for undefined', () => {
		let doSomething = (a = 1, b = 2, c = 3) => {
			return [a, b, c];
		};

		let [a, b, c] = doSomething();

		expect(a).to.equal(1);
		expect(b).to.equal(2);
		expect(c).to.equal(3);
	});
});
