/*function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log("Hello"));*/

let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(console.log("done")), 1000);
});

function sayHi(greet) {
    console.log("Hi");
}
setTimeout(sayHi, 2000);

/*async function fetchTenPlanets () {

    const links = [];
    for(let i = 1; i <= 10; i++){
        links.push(`https://swapi.dev/api/planets/${i}`)
        
}
    const responses = await Promise.all(links.map((link) => fetch(link)))
    const planets = await Promise.all(responses.map((responses) => responses.json()))
    const planetNames = planets.map((planet) => planet.name)
    //const planets = await responses.map(async (result) => await result.json())
    console.log(planetNames)
}

await fetchTenPlanets();



let planetNamesArray = [];

for(let i = 1; i <= 10; i++){
    let planet = await fetch(`https://swapi.dev/api/planets/${i}`);
    let planetsName = await planet.json();
    planetNamesArray.push(planetsName.name);
}

console.log(planetNamesArray);



async function getShipsByHero() {
    
        let res = await fetch(`https://swapi.dev/api/people/14/`);
        let hero = await res.json();
        let links = hero.starships

        let starShips = [];
        for(let link of links){
            let result = await fetch(link)
            let starShip = await result.json()
            starShips.push(starShip.name)
        }
        console.log(starShips);
        return starShips;

}

await getShipsByHero();*/
