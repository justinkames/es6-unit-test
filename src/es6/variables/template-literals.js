import {expect} from 'chai';

describe('Variables | Template literals', () => {

    it('should append strings', function () {
        let concat = function (a, b, c) {
            return `${a}${b}${c}`;
        };
        expect(concat('a', 'b', 'c')).to.equal('abc');
    });

    it('should process expressions', function () {
        let concat = function (a, b, c) {
            return `${a + b + c}`;
        };
        expect(concat(1, 2, 3)).to.equal('6');
    });

    it('can use custom tags', () => {
        let upper = (strings, ...values) => {
            let result = '';

            strings.forEach(string => {
                result += string;
            });

            values.forEach(value => {
                result += value;
            });

            return result.toUpperCase();
        };

        let a = 5;
        let result = upper `hello ${a + a} hello ${a}`;
        expect(result).to.equal('HELLO  HELLO 105');
    });
});