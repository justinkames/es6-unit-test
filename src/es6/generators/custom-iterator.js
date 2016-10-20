/* global it, describe */
import {expect} from 'chai';

describe('Generators | Custom iterator', () => {
    it('', () => {

        class Bucket {
            constructor() {
                this._items = [];
            }

            set items(items) {
                this._items = items;
            }

            get items() {
                return this._items;
            }

            *[Symbol.iterator]() {
                for (let item of this._items) {
                    yield item;
                }
            }
        }

        let filter = function*(items, fn) {
            for (let item of items) {
                if (fn(item)) {
                    yield item;
                }
            }
        };

        let bucket = new Bucket();
        bucket.items = [2, 3, 5];

        let count = 0;

        for (let item of filter(bucket.items, item => item > 2)) {
            count += 1;
        }

        expect(count).to.equal(2);
    });
});
