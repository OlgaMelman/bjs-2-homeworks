function Student(name, gender, age) {

  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];

}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksArgs) {
  if (!this.marks) return;

  this.marks.push(...marksArgs);

}

Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) return 0;


  const averageMarks = this.marks.reduce((all, mark) => all + mark) / this.marks.length;
  return averageMarks;

}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
