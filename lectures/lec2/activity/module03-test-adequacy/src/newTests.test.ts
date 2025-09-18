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
        expect(() => db.getGrade(studentID1, studentNotInClass, courseID)).toThrow();
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
        expect(() => db.getGPA(studentID1, studentNotInClass)).toThrow();
    })

    /*
    Innocuous Mutants (don't introduce behavioral bug):
    - Line 61: StringLiteral changed the error message text, which typically isn't a problem.
    - Line 91: StringLiteral changed the error message text, which typically isn't a problem.
    - Line 110: StringLiteral changed the error message text, which typically isn't a problem.

    Non-Innocuous Mutants (can introduce a bug):
    - Line 17
    - Line 59
    - Line 59
    - Line 59
    - Line 89
    - Line 90
    - Line 90
    - Line 120
    - Line 120
    - Line 9
    */
})