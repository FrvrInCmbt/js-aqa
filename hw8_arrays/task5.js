let firstArray = [1, 2, 3, 4, 5];
let secondArray = [6, 7, 8, 9, 10];

let combinedArray = firstArray.concat(secondArray);

console.log(combinedArray);

const unitedArray = [...firstArray, ...secondArray];
console.log(unitedArray);
