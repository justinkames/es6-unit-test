'use strict';

import sinon from 'sinon';
import chai from 'chai';
chai.should();

describe('Stub tests', () => {

	let student;
	let schedule;

	beforeEach(() => {
		student = {
			dropClass: (classId, cb) => {
				cb();
			}
		}

		schedule = {
			dropClass : () => {
				console.log("class dropped");
			},
			classIsFull: () => {
				return true;
			}
		}

	});

	describe('student.dropClass', () => {

		it('should call the stubbed callback', () => {
			var stub = sinon.stub(schedule);
			student.dropClass(1, stub.dropClass);
			stub.dropClass.called.should.be.true;
		});

		it('should return true with stub', () => {
			let stub = sinon.stub(schedule);
			stub.classIsFull.returns(false);
			let returnVal = stub.classIsFull();
			returnVal.should.be.false;
		});

	});

});
