module.exports.Student = Student;

class Student{

    constructor(name, isLate, isOnTime, isAbsent){
        this.name = name;
        if (this.name === undefined){
            throw new Error(`No name has been defined for this student`);
        };
        this.isLate = false;
        this.isOnTime = false;
        this.isAbsent = true;
    };
};