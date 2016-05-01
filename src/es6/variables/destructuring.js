import {expect} from 'chai';

describe('Variables | Destructuring', () => {

    it('should destructure arrays', () => {
        let x = 2;
        let y = 3;
        [x, y] = [y, x];
        expect(x).to.equal(3);
        expect(y).to.equal(2);
    });

    it('should destructure arrays2', () => {
        let [x,y] = [3, 2];
        expect(x).to.equal(3);
        expect(y).to.equal(2);
    });

    it('should destructure objects', () => {
        let returnObj = function () {
            return {
                a: 'a',
                b: 'b'
            };
        };

        let {a:a, b:b} = returnObj();
        expect(a).to.equal('a');
        expect(b).to.equal('b');
    });

});