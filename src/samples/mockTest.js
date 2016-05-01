'use strict';

import sinon from 'sinon';
import chai from 'chai';
chai.should();

describe('Mock tests', () => {

    let student;
    let schedule;

    beforeEach(() => {
        student = {
            dropClass: (classId, cb) => {
                cb();
            }
        }
        schedule = {
            dropClass: () => {
                console.log("class dropped");
            },
            classIsFull: () => {
                console.log('hello');
                return true;
            }
        }
    });

    describe('student with mocks', () => {
        it('mocks schedule', () => {
            var mockObj = sinon.mock(schedule);
            var expectation = mockObj.expects('classIsFull').once();
            student.dropClass(5, schedule.classIsFull);
            expectation.verify();
        });
    });

});
