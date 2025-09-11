// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import { StudentID, StudentName, CourseID, Grade, Transcript } from "./Types";
import { ITranscriptService } from "./transcriptService.interface";
export default class TranscriptService implements ITranscriptService {
  /** the list of transcripts in the database */
  private transcripts: Transcript[] = stryMutAct_9fa48("0") ? ["Stryker was here"] : (stryCov_9fa48("0"), []);

  /** the last assigned student ID 
   * @note Assumes studentID is Number
  */
  // changed from 0 to 1 to fix "should be a positive integer" test
  private lastID: StudentID = 1; // this should be private to nextID().
  private nextID(): StudentID {
    if (stryMutAct_9fa48("1")) {
      {}
    } else {
      stryCov_9fa48("1");
      return stryMutAct_9fa48("2") ? this.lastID-- : (stryCov_9fa48("2"), this.lastID++);
    }
  }
  constructor() {}

  /** Initializes the database with an array of transcripts
   * @param {Transcript[]} initialTranscripts - the initial transcripts to populate the database
   */
  initialize(initialTranscripts: Transcript[]): void {
    if (stryMutAct_9fa48("3")) {
      {}
    } else {
      stryCov_9fa48("3");
      this.transcripts = initialTranscripts;
    }
  }

  /** Adds a new student to the database
   * @param {string} newName - the name of the student
   * @returns {StudentID} - the newly-assigned ID for the new student
   */
  addStudent(newName: string): StudentID {
    if (stryMutAct_9fa48("4")) {
      {}
    } else {
      stryCov_9fa48("4");
      const newID: StudentID = this.nextID();
      const newTranscript: Transcript = stryMutAct_9fa48("5") ? {} : (stryCov_9fa48("5"), {
        studentID: newID,
        studentName: newName,
        courses: stryMutAct_9fa48("6") ? ["Stryker was here"] : (stryCov_9fa48("6"), []) // initially no courses
      });
      this.transcripts.push(newTranscript);
      return newID;
    }
  }

  /**
   * @param studentName 
   * @returns list of studentIDs associated with that name
   */
  getStudentIDsByName(studentName: string): StudentID[] {
    if (stryMutAct_9fa48("7")) {
      {}
    } else {
      stryCov_9fa48("7");
      return stryMutAct_9fa48("8") ? this.transcripts.map(t => t.studentID) : (stryCov_9fa48("8"), this.transcripts.filter(stryMutAct_9fa48("9") ? () => undefined : (stryCov_9fa48("9"), t => stryMutAct_9fa48("12") ? t.studentName !== studentName : stryMutAct_9fa48("11") ? false : stryMutAct_9fa48("10") ? true : (stryCov_9fa48("10", "11", "12"), t.studentName === studentName))).map(stryMutAct_9fa48("13") ? () => undefined : (stryCov_9fa48("13"), t => t.studentID)));
    }
  }

  // unnecessarily clever way to validate the existence of a transcript:
  // throws error if not found or doesn't match
  getIndex(studentID: StudentID, name: StudentName): number {
    if (stryMutAct_9fa48("14")) {
      {}
    } else {
      stryCov_9fa48("14");
      const index = this.transcripts.findIndex(stryMutAct_9fa48("15") ? () => undefined : (stryCov_9fa48("15"), t => stryMutAct_9fa48("18") ? t.studentID === studentID || t.studentName === name : stryMutAct_9fa48("17") ? false : stryMutAct_9fa48("16") ? true : (stryCov_9fa48("16", "17", "18"), (stryMutAct_9fa48("20") ? t.studentID !== studentID : stryMutAct_9fa48("19") ? true : (stryCov_9fa48("19", "20"), t.studentID === studentID)) && (stryMutAct_9fa48("22") ? t.studentName !== name : stryMutAct_9fa48("21") ? true : (stryCov_9fa48("21", "22"), t.studentName === name)))));
      if (stryMutAct_9fa48("25") ? index !== -1 : stryMutAct_9fa48("24") ? false : stryMutAct_9fa48("23") ? true : (stryCov_9fa48("23", "24", "25"), index === (stryMutAct_9fa48("26") ? +1 : (stryCov_9fa48("26"), -1)))) {
        if (stryMutAct_9fa48("27")) {
          {}
        } else {
          stryCov_9fa48("27");
          throw new Error(stryMutAct_9fa48("28") ? "" : (stryCov_9fa48("28"), "Transcript not found for the given ID and name"));
        }
      } else {
        if (stryMutAct_9fa48("29")) {
          {}
        } else {
          stryCov_9fa48("29");
          return index;
        }
      }
    }
  }
  getTranscript(studentID: StudentID, name: StudentName): Transcript {
    if (stryMutAct_9fa48("30")) {
      {}
    } else {
      stryCov_9fa48("30");
      const index = this.getIndex(studentID, name);
      // throws error if not found or doesn't match
      return this.transcripts[index];
    }
  }

  /** Deletes a student from the database
   * @param {StudentID} studentID - the ID of the student to delete
   * @param {StudentName} name - the name of the student to delete
   * @throws {Error} if the transcript is not found for deletion
   */

  deleteStudent(studentID: StudentID, name: StudentName): void {
    if (stryMutAct_9fa48("31")) {
      {}
    } else {
      stryCov_9fa48("31");
      const index = this.getIndex(studentID, name);
      // throws error if not found or doesn't match, so index is guaranteed to be valid
      this.transcripts.splice(index, 1); // remove the transcript from the array
    }
  }
  getGrade(studentID: StudentID, studentName: StudentName, courseID: CourseID): Grade {
    if (stryMutAct_9fa48("32")) {
      {}
    } else {
      stryCov_9fa48("32");
      const index = this.getIndex(studentID, studentName);
      const courses = this.transcripts[index].courses;
      const course = courses.find(stryMutAct_9fa48("33") ? () => undefined : (stryCov_9fa48("33"), c => stryMutAct_9fa48("36") ? c.courseID !== courseID : stryMutAct_9fa48("35") ? false : stryMutAct_9fa48("34") ? true : (stryCov_9fa48("34", "35", "36"), c.courseID === courseID)));
      if (stryMutAct_9fa48("39") ? false : stryMutAct_9fa48("38") ? true : stryMutAct_9fa48("37") ? course : (stryCov_9fa48("37", "38", "39"), !course)) {
        if (stryMutAct_9fa48("40")) {
          {}
        } else {
          stryCov_9fa48("40");
          throw new Error(stryMutAct_9fa48("41") ? `` : (stryCov_9fa48("41"), `Course with ID ${courseID} not found for student ${studentName} (ID: ${studentID})`));
        }
      }
      return course.grade; // return the grade for the course
    }
  }
  addGrade(studentID: StudentID, studentName: StudentName, courseID: CourseID, grade: Grade): void {
    if (stryMutAct_9fa48("42")) {
      {}
    } else {
      stryCov_9fa48("42");
      const index = this.getIndex(studentID, studentName);
      // throws error if not found or doesn't match, so index is guaranteed to be valid
      // would .concat({courseID, grade}) work here?
      const transcript = this.transcripts[index].courses.push(stryMutAct_9fa48("43") ? {} : (stryCov_9fa48("43"), {
        courseID: courseID,
        grade: grade
      }));
    }
  }
  getAll(): Transcript[] {
    if (stryMutAct_9fa48("44")) {
      {}
    } else {
      stryCov_9fa48("44");
      return this.transcripts; // return the entire transcripts array
    }
  }
  getGPA(studentID: StudentID, studentName: StudentName): number {
    if (stryMutAct_9fa48("45")) {
      {}
    } else {
      stryCov_9fa48("45");
      const transcript = this.getTranscript(studentID, studentName);
      if (stryMutAct_9fa48("48") ? transcript.courses.length !== 0 : stryMutAct_9fa48("47") ? false : stryMutAct_9fa48("46") ? true : (stryCov_9fa48("46", "47", "48"), transcript.courses.length === 0)) {
        if (stryMutAct_9fa48("49")) {
          {}
        } else {
          stryCov_9fa48("49");
          throw new Error(stryMutAct_9fa48("50") ? "" : (stryCov_9fa48("50"), "No courses found for GPA calculation"));
        }
      }
      const grades = transcript.courses.map(stryMutAct_9fa48("51") ? () => undefined : (stryCov_9fa48("51"), c => c.grade));
      const total = grades.reduce(stryMutAct_9fa48("52") ? () => undefined : (stryCov_9fa48("52"), (acc, grade) => stryMutAct_9fa48("53") ? acc - grade : (stryCov_9fa48("53"), acc + grade)), 0);
      const avg = stryMutAct_9fa48("54") ? total * grades.length : (stryCov_9fa48("54"), total / grades.length);
      return stryMutAct_9fa48("55") ? avg * 25 : (stryCov_9fa48("55"), avg / 25); // Convert to GPA scale
    }
  }
  isEnrolled(studentID: StudentID, studentName: StudentName, courseID: CourseID): boolean {
    if (stryMutAct_9fa48("56")) {
      {}
    } else {
      stryCov_9fa48("56");
      const transcript = this.getTranscript(studentID, studentName);
      return stryMutAct_9fa48("57") ? transcript.courses.every(c => c.courseID === courseID) : (stryCov_9fa48("57"), transcript.courses.some(stryMutAct_9fa48("58") ? () => undefined : (stryCov_9fa48("58"), c => stryMutAct_9fa48("61") ? c.courseID !== courseID : stryMutAct_9fa48("60") ? false : stryMutAct_9fa48("59") ? true : (stryCov_9fa48("59", "60", "61"), c.courseID === courseID))));
    }
  }
}