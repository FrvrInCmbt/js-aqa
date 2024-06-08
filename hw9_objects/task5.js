let user = [
    {name: "Corey Taylor", email: "slipknot@gmail.com", age: 50},
    {name: "Sam", email: "sam@gmail.com", age: 18},
    {name: "Matt", email: "matt@gmail.com", age: 22},
    {name: "Shawn", email: "shawn@gmail.com", age: 31}
];

console.log(user);

for (let {name: uName, email: uEmail, age: uAge} of user) {
    console.log(`${uName} , ${uAge} , ${uEmail}`);
}
