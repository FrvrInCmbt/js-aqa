let planetNamesArray = [];

for(let i = 1; i <= 10; i++){
    let planet = await fetch(`https://swapi.dev/api/planets/${i}`);
    let planetsName = await planet.json();
    planetNamesArray.push(planetsName.name);
}

console.log(planetNamesArray);