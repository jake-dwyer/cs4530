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


describe("getGrade error handling", () => {
  it("should throw an error when the course ID does not exist for the student", () => {
    const db = new TranscriptService();
    db.initialize([]);

    const studentName = "Alice";
    const studentID = db.addStudent(studentName);

    // Add Alice to a different course
    db.addGrade(studentID, studentName, "math101", 90);

    // Try to fetch grade for a non-existent course
    expect(() =>
      db.getGrade(studentID, studentName, "cs102")
    ).toThrow(
      `Course with ID cs102 not found for student ${studentName} (ID: ${studentID})`
    );
  });
});

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

    // Jake not in class 999, trying to calculate GPA.
    expect(() =>
      db.getGPA(studentID1, studentNotInClass)
    ).toThrow("No courses found for GPA calculation");
  });
});

    /*
    Innocuous Mutants (don't introduce behavioral bug):
    - Line 61: StringLiteral changed the error message text, which typically isn't a problem.
    - Line 91: StringLiteral changed the error message text, which typically isn't a problem.
    - Line 110: StringLiteral changed the error message text, which typically isn't a problem.
    - Line 9: Initial array contens don't matter since every test initializes the db.

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
    */

    /*
    Line 17
    */
   describe('Student Incrementation', () => {
    it('should increment student IDs correctly.', () => {
      const studentName1 = 'Jake';
      const studentName2 = 'James';
      const studentID1 = db.addStudent(studentName1);
      const studentID2 = db.addStudent(studentName2);
        expect(studentID2).toBe(studentID1 + 1);
    });
  });

  /*
  Line 59
  */
  describe('Index Retrieval', () => {
    it('shoudl throw an error if ID is correct but name does not match.', () => {
      const studentName1 = 'Jake';
      const studentName2 = 'James';
      const studentID1 = db.addStudent(studentName1);
      expect(() =>
        db.getIndex(studentID1, studentName2)
      ).toThrow("Transcript not found for the given ID and name");
    });

    it('should throw an error if name is correct but ID does not match.', () => {
      const studentName1 = 'Jake';
      const studentName2 = 'James';
      db.addStudent(studentName1);
      const fakeID = 999;
      expect(() =>
        db.getIndex(fakeID, studentName1)
      ).toThrow("Transcript not found for the given ID and name");
    });
});

/*
Line 89 and 90
*/

describe('Grade retrieval', () => {
    it('should return the correct grade for the requested course.', () => {
      const studentName = 'Jake';
      const studentID = db.addStudent(studentName);
      const courseID = '999';
      const grade = 100;
      db.addGrade(studentID, studentName, courseID, grade);
      const retrievedGrade = db.getGrade(studentID, studentName, courseID);
      expect(retrievedGrade).toBe(grade);
    });

    it('should return the correct grade when the user has multiple courses.', () => {
        const studentName = 'Jake';
        const studentID = db.addStudent(studentName);
        const courseID1 = '999';
        const grade1 = 100;
        const courseID2 = '888';
        const grade2 = 85;
        db.addGrade(studentID, studentName, courseID1, grade1);
        db.addGrade(studentID, studentName, courseID2, grade2);
        const retrievedGrade1 = db.getGrade(studentID, studentName, courseID1);
        const retrievedGrade2 = db.getGrade(studentID, studentName, courseID2);
        expect(retrievedGrade1).toBe(grade1);
        expect(retrievedGrade2).toBe(grade2);
      });
});

/*
Line 120
*/ 

describe('Enrollment checking', () => {
    it('should return false if a student is not enrolled in the specified course.', () => {
      const studentName = 'Jake';
      const studentID = db.addStudent(studentName);
      const courseID = '999';
      const grade = 100;
      db.addGrade(studentID, studentName, courseID, grade);
      const notEnrolledCourseID = '888';
      const isEnrolled = db.isEnrolled(studentID, studentName, notEnrolledCourseID);
      expect(isEnrolled).toBe(false);
    });

    it('should return true if a student is enrolled in the specified course.', () => {
        const studentName = 'Jake';
        const studentID = db.addStudent(studentName);
        const courseID = '999';
        const grade = 100;
        db.addGrade(studentID, studentName, courseID, grade);
        const isEnrolled = db.isEnrolled(studentID, studentName, courseID);
        expect(isEnrolled).toBe(true);
      });

    it('should return true if a student is enrolled in one of many courses.', () => {
        const studentName = 'Jake';
        const studentID = db.addStudent(studentName);
        const courseID1 = '999';
        const grade1 = 100;
        const courseID2 = '111';
        const grade2 = 85;
        db.addGrade(studentID, studentName, courseID1, grade1);
        db.addGrade(studentID, studentName, courseID2, grade2);
        const isEnrolled1 = db.isEnrolled(studentID, studentName, courseID1);
        const isEnrolled2 = db.isEnrolled(studentID, studentName, courseID2);
        expect(isEnrolled1).toBe(true);
        expect(isEnrolled2).toBe(true);
      });
});