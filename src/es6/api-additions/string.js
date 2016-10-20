import {expect} from 'chai';

describe('API String() |', function() {

	it('String.repeat(..) repeats a string', () => {
		expect('Foo'.repeat(3)).to.equal('FooFooFoo');
	});

	it('String.includes(..), endsWith(..), startsWith(..) checks if a String includes char(s)', () => {
		expect('Foo'.includes('oo')).to.equal(true);
		expect('Foo'.startsWith('Fo')).to.equal(true);
		expect('Foo'.endsWith('oo')).to.equal(true);
		
	});

});