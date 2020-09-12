class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Kolimunnesa Schol";
    }

}

const student1 = new Student(12, "shuvo");
const student2 = new Student(22, "mahia");
const student3 = new Student(12, "bappy");
console.log(student3);
console.log(student1.name, student2.name);