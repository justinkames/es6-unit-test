import {expect} from 'chai';

describe('Variables | Rest params', () => {

    it('default params works', function () {
        let doSomething = function (...numbers) {
            let result = 0;
            numbers.forEach(nr => {
                result += nr;
            });
            return result;
        };
        expect(doSomething(1, 2, 3)).to.equal(6);
    });
    
});