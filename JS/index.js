/*1.let and const
2.arrow function
3.async/await
4.destructing
5.default parameters
6.spread
var a=12
if(a>10){
    a=30
    var b=67
    console.log(a);
    console.log(b)
}
console.log(a);
console.log(b)*/
/*const a=12
if(a>10){
    a=30
    let b=67
    console.log(a);
    console.log(b)
}
console.log(a);
console.log(b)*/
console.log(Number.MAX_VALUE)
//how to create the copy of an object
const person={
    name :"Vipin",
    age:20
}
const newperson={...person,city:"Ghaziabad"};
newperson.age=35
console.log(person.age)
//Template
