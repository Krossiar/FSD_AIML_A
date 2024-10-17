const student={
    name:"Vipin",
    branch:"Cse Aiml",
    sec:"A",
}
const newstudent=student;
console.log(student);
newstudent.name="ABC";
console.log(newstudent);
console.log(student);
const emp=["ABC",56,1000023.50]
console.log(emp)
const emp1=[101,...emp];
console.log(emp1);