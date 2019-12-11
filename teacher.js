class Teacher{

    constructor(subject, name){
        this.name = name;
        if (this.name === undefined){
            throw new Error(`No name has been defined for this teacher`);
        };
        this.subject = subject;
        if (this.subject === undefined){
            throw new Error(`No subject has been defined for this teacher`);
        };
    };
};

module.exports = Teacher;