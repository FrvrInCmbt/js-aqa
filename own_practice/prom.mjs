/*let prom = () => fetch("https://swapi.dev/api/people/14/")
    .then((response) => response.json())
    .then((res) => {
        let starShipLinks = res.starships
        let shipNames = starShipLinks.map((starShipLink) => {
            return fetch(starShipLink)
            .then((pro) => pro.json())
            .then((resp) => {
                return resp.name
            })
        }
    )
    return Promise.all(shipNames)
    })

const res = await prom();
console.log(res)*/

let getUserById = (userId) => {
    return fetch(`https://swapi.dev/api/people/${userId}`).then((response) => response.json());
};

let getStarShipsByLinks = (links) => {
    let shipNames = links.map((starShipLink) => {
        return fetch(starShipLink).then((pro) => pro.json());
    });
    return Promise.all(shipNames);
};

/*try{
let user = await getUserById(b);
let starShipList = await getStarShipsByLinks(user.starships)
let starShipNames = starShipList.map((starShip) => starShip.name)
console.log(starShipNames)
} catch(err){
    console.log(err.message)
}*/
getUserById(t)
    .then((user) => {
        return getStarShipsByLinks(user.starships);
    })
    .then((ships) => {
        return ships.map((ships) => ships.name);
    })
    .then((names) => console.log(names))
    .catch((err) => console.log(err, "ERROR"));
