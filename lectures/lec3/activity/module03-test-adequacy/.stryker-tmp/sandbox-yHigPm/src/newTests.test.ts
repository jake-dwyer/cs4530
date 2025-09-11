// @ts-nocheck
import TranscriptService from "./transcriptService";

const db = new TranscriptService();

beforeEach(() => {
    db.initialize([]);
})

/*
Write tests for lines 91 and 110.

91: Ensure an error is thrown when a course with ID X is not found for
    for a student with Y student name for getGrade.
*/

describe('Student with no related course', () => {
    it('should throw an error since the user has no associated course.', () => {
        const studentNotInClass = 'Jake';
        const studentInClass = 'Frank';
        const studentID1 = db.addStudent(studentNotInClass);
        const studentID2 = db.addStudent(studentInClass);
        const courseID = '999';
        const grade = 100;

        // Frank in class 999 with a 100
        db.addGrade(studentID2, studentInClass, courseID, grade);

        // Jake not in class 999, trying to get a grade for the class.
        const retrievedGrade = db.getGrade(studentID1, studentNotInClass, courseID);
        expect(retrievedGrade).toThrow();
    })
})

/*
110: Ensure an error is thrown when a course with ID X is not found for
    for a student with Y student name for getGPA.
*/

describe('Student with no courses found for GPA calculation', () => {
    it('should throw an error since the user has no associated course.', () => {
        const studentNotInClass = 'Jake';
        const studentInClass = 'Frank';
        const studentID1 = db.addStudent(studentNotInClass);
        const studentID2 = db.addStudent(studentInClass);
        const courseID = '999';
        const grade = 100;

        // Frank in class 999 with a 100
        db.addGrade(studentID2, studentInClass, courseID, grade);

        // Jake not in class 999, trying to get a grade for the class.
        const retrievedGPA = db.getGPA(studentID1, studentNotInClass)
        expect(retrievedGPA).toThrow();
    })
})