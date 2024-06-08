async function getShipsByHero() {
    let res = await fetch("https://swapi.dev/api/people/14/");
    let hero = await res.json();
    let links = hero.starships;
    let starShips = [];
    for (let link of links) {
        let result = await fetch(link);
        let starShip = await result.json();
        starShips.push(starShip.name);
    }
    console.log(starShips);
    //return starShips;
}

await getShipsByHero();

let getShipsNameByUserId = () =>
    fetch("https://swapi.dev/api/people/14/")
        .then((response) => response.json())
        .then((res) => {
            let shipNames = res.starships.map((starShipLink) => {
                return fetch(starShipLink)
                    .then((shipObj) => shipObj.json())
                    .then((shipRes) => {
                        return shipRes.name;
                    });
            });
            return Promise.all(shipNames);
        });

const res = await getShipsNameByUserId();
console.log(res);
