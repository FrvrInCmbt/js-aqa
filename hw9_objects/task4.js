let person = {
    firstName: "Derrick",
    lastName: "Rose",
    age: 35
};

console.log(person);

person.email = "derrick.rose@chicagobulls.com";
console.log(person);

delete person.age;
console.log(person);
