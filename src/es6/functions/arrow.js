import {expect} from 'chai';

describe('Functions | Arrow functions', () => {
    it('has concise syntax', () => {

        function sumOld(a, b) {
            return a + b;
        }

        let sum = (a, b) => a + b;

        let five = () => 5;

        expect(sum(1, 2)).to.equal(3);
        expect(sum(1, 2)).to.equal(sumOld(1, 2));
        expect(five()).to.equal(5);
    });
    it('can be used with array methods', () => {
        let arr = [1, 2, 3, 4, 5];
        let timesTwo = item => item * 2;
        let newArr = arr.map(timesTwo);
        expect(newArr).to.have.members([2, 4, 6, 8, 10]);
    });

    it('function does not lexically bind to this', function (done) {
        this.name = 'John';
        setTimeout(function () {
            expect(this.name).to.equal(undefined);
            done();
        }, 15);
    });

    it('arrow function does lexically bind to this', function (done) {
        this.name = 'John';
        setTimeout(() => {
            expect(this.name).to.equal('John');
            done();
        }, 15);

    });
});