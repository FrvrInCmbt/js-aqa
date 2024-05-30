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

await getShipsByHero();