const Teacher = require(`./teacher`);
const Student = require(`./student`);
const Lesson = require(`./lesson`);

const teacher = new Teacher('Maths', 'Billy');
const student1 = new Student(`Rob`);
const student2 = new Student('Nath');
const student3 = new Student('Tom');
const mathsLesson = new Lesson(teacher, [
    student1,
    student2,
    student3,
]);

mathsLesson.markOnTime([
    student1,
]);
mathsLesson.markLate([
    student2,
]);
mathsLesson.outputSummary();