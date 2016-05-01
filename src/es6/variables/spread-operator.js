import {expect} from 'chai';

describe('Variables | Spread parameter', () => {

    it('should assign map the array to the method parameters', () => {
        let spreadFn = (x, y, z) => {
            return x + y + z;
        };
        expect(spreadFn(...[1, 2, 3])).to.equal(6);
    });

    it('should build the array correctly', () => {
        let a = [4, 5, 6];
        let b = [1, 2, 3, ...a, 7, 8, 9];
        expect(b).to.have.members([1,2,3,4,5,6,7,8,9]);
    });

});