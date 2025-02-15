//creating an object and adding prototype to it
function person(name,age){
    this.name = name;
    this.age = age;
}
person.prototype.greet = function(){
    console.log(`Hello, I am ${this.name} and my age is ${this.age}`);
}
const person1 = new person("samruddhi",20);
const person2 = new person("shreya",21);
person1.greet();
person2.greet();