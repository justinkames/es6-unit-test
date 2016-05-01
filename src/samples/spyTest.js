'use strict';

import sinon from 'sinon';
import chai from 'chai';
chai.should();

describe('Spy tests', () => {

	let student;

	beforeEach(() => {
		student = {
			dropClass : (classId, cb) => {
				cb();
			}
		}
	});

	describe('student.dropClass', () => {
		it('should call the callback', () => {
			var spy = sinon.spy();
			student.dropClass(1, spy);
			spy.called.should.be.true;
		});
	});

});
