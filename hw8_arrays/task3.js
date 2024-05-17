let digits = [10, 20, 30, 40, 50];

let total = digits.reduce((accumulator, element) => accumulator + element);
console.log(total);



let digits1 = [10, 20, 30, 40, 50];

let total1 = digits1.reduce((acc, el) => {return acc + el}, 0);
console.log(total1);

