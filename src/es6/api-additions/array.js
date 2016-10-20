import {expect} from 'chai';

describe('API Array() |', function() {

	it('Array() with single argument creates empty array', () => {
		let a = new Array(2);
		expect(a).length.to.be(2);
		expect(a[0]).to.equal(undefined);
		expect(a[1]).to.equal(undefined);

		let b = new Array(1,2);
		expect(b).length.to.be(2);
	});

	it('Array.from(..) creates an array from an array like object',()=>{
		const arrLike = {
			length : 3,
			0 : 'foo',
			1 : 'bar'
		};

		const arr = Array.from(arrLike);

		expect(arr).length.to.be(3);
		expect(arr[0]).to.equal('foo');
		expect(arr[1]).to.equal('bar');
		expect(arr[2]).to.equal(undefined);
	});

	it('Array.copyWithin(..) copies a portion of an array to another location',()=>{
		// eql deeply compares values
		expect( [1,2,3,4,5].copyWithin(3,0) ).to.eql( [1,2,3,1,2] );
		expect( [1,2,3,4,5].copyWithin(4,0) ).to.eql( [1,2,3,4,1] );
	});

	it('Array.fill(..) fills an existing array with a specified value',()=>{
		expect( Array(4).fill(undefined) ).to.eql([undefined,undefined,undefined,undefined]);
		expect( Array(2).fill(1) ).to.eql([1,1]);
	});

	it('Array.find(..) is used to find values inside an array',()=>{
		const a = [1,2,3,4,5];
		const b = [{x:1,y:2},{x:2,y:3}];

		const c = a.find((v) => v === 2);
		expect(c).to.equal(2);

		const d = b.find((v) => {
			return v.y === 3;
		});

		expect(d).to.eql({x:2,y:3});
	});

	it('entries(), values(), keys', () => {
		const a = [1,2,3];
		expect([...a.values()]).to.eql([1,2,3]);
		expect([...a.keys()]).to.eql([0,1,2]);
		expect([...a.entries()]).to.eql([ [0,1] ,[1,2], [2,3] ]);
	});

	it('Array.of(..) is usefull when subclassing Array', () => {
		class MyArr extends Array {
			sum() {
				return this.reduce((acc,curr) => {
					return acc + curr;
				}, 0);
			}
		}
		// expect(new MyArr(3).sum()).to.equal(3);
		// expect(MyArr.of(3).sum()).to.equal(3);
	});
});