const axios = require("axios")

test("Getting list of posts", async () => {
    let res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    expect(res.status).toBe(200)
})

test("Getting list of albums", async () => {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users/10")
    expect(res.data.name).toContain("menti")
    //console.log(res.data.name)
})

test("Post new user info", async () => {
    let response = await axios.post("https://jsonplaceholder.typicode.com/users", {
        "id": 11,
        "name": "Oleksii Lysovenko",
        "username": "OleLy",
        "email": "testofjest@gmail.com",
        "address": {
            "street": "Staroportofrankivska",
            "suite": "1",
            "city": "New York",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3139",
                "lng": "81.1496"
            }
        }
    })
    expect(response.data.address.city).toEqual("New York")
    //console.log(response.data.address.city)
})

test("Add the photo", async () => {
    let response = await axios.post("https://jsonplaceholder.typicode.com/albums/1/photos", {
            "albumId": 1,
            "id": 52,
            "title": "some photo of nature",
            "url": "https://via.placeholder.com/600/6ad431",
            "thumbnailUrl": "https://via.placeholder.com/150/6ad437"
    })
    expect(response.data.albumId).toEqual = 1
    //console.log(response.data.albumId)
})

test("Get comment by ID", async () => {
    let response = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
    expect(response.data)
})