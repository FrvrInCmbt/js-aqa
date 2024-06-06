let planetNamesArray = [];

for(let i = 1; i <= 10; i++){
    let planet = await fetch(`https://swapi.dev/api/planets/${i}`);
    let planetsName = await planet.json();
    planetNamesArray.push(planetsName.name);
}

console.log(planetNamesArray);



let planetNames = [];
for(let i = 1; i <= 10; i++){
    planetNames.push(fetch(`https://swapi.dev/api/planets/${i}`)
    .then((response) => response.json()))
}

Promise.all(planetNames).then((pl) => console.log(pl.map((planet) => planet.name)))


for(let i = 1; i <= 10; i++){
    fetch(`https://swapi.dev/api/planets/${i}`)
    .then((response) => response.json())
    .then((namesOfPlanets) => console.log(namesOfPlanets.name))
}

