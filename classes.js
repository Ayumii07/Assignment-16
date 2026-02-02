// Class is a modern and cleaner way to create objects
class Student {
    constructor(name, rollNumber, grade) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.grade = grade;
    }
    getStudentInfo() {
        console.log(this.name + " - Roll: " + this.rollNumber + ", Grade: " + this.grade);
    }
    // Static method belongs to class, not object
    static schoolName() {
        console.log("ABC School");
    }
}
// Creating objects
let s1 = new Student("Ayumi", 1, "A");
let s2 = new Student("Aisha", 2, "B");
s1.getStudentInfo();
s2.getStudentInfo();
// Calling static method
Student.schoolName();
/*
Classes vs Constructor Functions:
- Classes are easier to read
- Less code
- More structured
*/
