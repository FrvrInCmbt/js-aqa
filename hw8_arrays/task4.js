let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumsArray = [];

for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
        evenNumsArray.push(array[i]);
    }
}

console.log(evenNumsArray);



const evenNumsFilter = (arr) => {
    return arr.filter((el) => el % 2 === 0);
}

console.log(evenNumsFilter(array));