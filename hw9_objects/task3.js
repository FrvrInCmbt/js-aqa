let car1 = {
    brand: "Porsche",
    model: "718 Spyder RS",
    year: 2023
};

let car2 = {
    brand: "Audi",
    model: "Q8",
    owner: 2023
};


let car3 = {...car1, ...car2};
console.log(car3)

