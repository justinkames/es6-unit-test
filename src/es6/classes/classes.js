import {expect} from 'chai';

describe('Classes | Class initialization', () => {

    it('class versus prototype is similar', () => {

        var VehicleA = function (color, maxSpeed) {
            this.color = color;
            this.maxSpeed = maxSpeed;
        };

        VehicleA.prototype = {
            getColor: function () {
                return this.color;
            }
        };

        class VehicleB {

            constructor(color, maxSpeed) {
                this._color = (color);
                this.maxSpeed = maxSpeed;
            }

            set color(color) {
                this._color = color;
            }

            get color() {
                return this._color;
            }
        }

        let vehicleA = new VehicleA('red', 50);
        let vehicleB = new VehicleB('red', 50);

        expect(vehicleA.getColor()).to.equal('red');
        expect(vehicleB.color).to.equal('red');
        expect(vehicleA.getColor()).to.equal(vehicleB.color);
    });


    it('inheritance should work ', () => {

        class Person {
            constructor(name) {
                this.name = name;
            }

            get name() {
                return this._name;
            }

            set name(name) {
                this._name = name;
            }
        }

        class Employee extends Person {
            work() {
                return `${this.name}, I am working`;
            }
        }

        expect(new Person('john').name).to.equal('john');
        expect(new Employee('jane').name).to.equal('jane');
        expect(new Employee('jane').work()).to.equal('jane, I am working');
    });

});