async function collectResidents () {
    let res = await fetch("https://swapi.dev/api/films/3/");
    let filmInfo = await res.json();
    let planetLinks = filmInfo.planets;

    let finalResult = [];
    for(let planetLink of planetLinks){
        let result = await fetch(planetLink);
        let planet = await result.json();
        let residentLinks = planet.residents;
        let residentsRes = await Promise.all(residentLinks.map((link) => fetch(link)));
        let residents = await Promise.all(residentsRes.map((res) => res.json()));
        let residentsName = residents.map((resident) => resident.name)
        finalResult.push({planetName: planet.name, residents: residentsName});
    }
        console.log(finalResult)
}

await collectResidents();