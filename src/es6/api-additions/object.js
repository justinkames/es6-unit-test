import {expect} from 'chai';

describe('API Object() |', function() {
	it('Object.is(..) compares more strict than ===', () => {
		const x = NaN, y = 0, z = -0;

		expect(x===x).to.equal(false);
		expect(x===y).to.equal(false);
		expect(y===z).to.equal(true);

		expect(Object.is(x,x)).to.equal(true);
		expect(Object.is(x,y)).to.equal(false);
		expect(Object.is(y,z)).to.equal(false);
	});

	it('Object.setPrototypeOf(..) sets the prototype of another object', () => {
		const a = {
			someFn() {
				return 'someFn';
			}
		};
		const b = {
			test() { return 'test' }
		};

		Object.setPrototypeOf(b,a);

		expect(b.someFn()).to.equal('someFn');
		expect(b.test()).to.equal('test');
	});

	it('Object.assign(..) for copying objects', () => {
		const target = {}, a = { a : 1}, b = { b: 2 }, c= { c : 3};

		Object.defineProperty(a, 'x', {
			value : 5,
			enumerable: true,
			writable : false,
			configurable : false
		});

		Object.defineProperty(a, 'y', {
			value : 5,
			enumerable: false,
			writable : false,
			configurable : false
		});

		Object.assign(target, a, b);

		expect(target).to.eql({ a : 1, b : 2, x : 5 });
	});

	it('Object.getOwnPropertySymbols(..)', () => {
		expect(1).to.equal(1);
	});
});