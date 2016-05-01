/* global it, describe */
import {expect} from 'chai';

describe('Variables | LET vs VAR keyword', () => {
	it('var defaults to undefined', function() {
		var returnNumber = flag => {
			// var x = undefined
			if (flag) {
				var x = 3;
			}
			return x;
		};
		expect(returnNumber(false)).to.equal(undefined);
	});

	it('let does not default to undefined and throws a ReferenceError', function() {
		// reference error
		var returnNumber = flag => {
			if (flag) {
				let x = 3;
			}
			return x;
		};
		expect(() => returnNumber(true)).to.throw(ReferenceError);
	});

	it('var in a for loop modifies the hoisted variable', function() {
		// reference error
		var returnNumber = flag => {
			for (var i = 0; i < 10; i++) {
			}
			return i;
		};
		expect(returnNumber(true)).to.equal(10);
	});

	it('let does not hoist the variable', function() {
		// reference error
		var returnNumber = flag => {
			for (let i = 0; i < 10; i++) {
			}
			return i;
		};
		expect(() => returnNumber(true)).to.throw(ReferenceError);
	});
});
