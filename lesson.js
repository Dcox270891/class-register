module.exports.Lesson = Lesson;

class Lesson {
    
    constructor(teacher, students){
        this.teacher = teacher;
        if (this.teacher === undefined){
            throw new Error(`No teacher has been defined for this lesson`);
        };
        this.students = students;
        if (this.students === undefined){
            throw new Error(`No students has been defined for this lesson`);
        };
    };
    markOnTime(students){
        students.forEach(student => {
            student.isOnTime = true;
            student.isAbsent = false;
        });
    };
    markLate(students){
        students.forEach(student => {
            student.isLate = true;
            student.isAbsent = false;
        });
    };
    outputSummary(){
        console.log(`
        The ${this.teacher.subject} lesson was conducted by ${this.teacher.name}
         ------------
        | Attendance |
         ------------`);
        this.students.forEach(student => {
            if(student.isLate){
                console.log(`${student.name} was late`)
            }else if(student.isOnTime){
                console.log(`${student.name} was on time`)
            }else if(student.isAbsent){
                console.log(`${student.name} was absent`)
            };
        });
    };
};