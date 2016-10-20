import {expect} from 'chai';

describe('API Number() |', function() {

	it('Number.isNaN(..) checks if it is not a number', () => {
		const a = NaN, b = "NaN", c =42;

		expect(isNaN(a)).to.equal(true);
		expect(isNaN(b)).to.equal(true);
		expect(isNaN(c)).to.equal(false);

		expect(Number.isNaN(a)).to.equal(true);
		expect(Number.isNaN(b)).to.equal(false);
		expect(Number.isNaN(c)).to.equal(false);
	});

	it('Number.isFinite(..) checks if a number is a finite value', () => {
		const a = NaN,  b = Infinity, c = 42;

		expect(Number.isFinite(a)).to.equal(false);
		expect(Number.isFinite(b)).to.equal(false);
		expect(Number.isFinite(c)).to.equal(true);
	});

	it('Number.isSafeInteger(..) checks if a number is a safe integer', () => {
		expect(Number.isSafeInteger(Math.pow(2,53))).to.equal(false);
		expect(Number.isSafeInteger(Math.pow(-2,53))).to.equal(false);

		expect(Number.isSafeInteger(Math.pow(2,53)-1)).to.equal(true);
		expect(Number.isSafeInteger(Math.pow(-2,53)+1)).to.equal(true);
	});

});