//console.log(23)

/*const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(1);
    }, 3000)
}) 

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("It is ERROR"))
    }, 5000)
})*/

/*Promise.all([
    new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(1);
        }, 3000)
    }),

    new Promise((resolve, reject) => {
        setTimeout(() => {
            //reject(new Error("It is ERROR"))
            resolve(2)
        }, 1000)
    })
]).then((result)=> {
    console.log(result)
    return new Promise((res, rej) => {res(3)})
}).then((result) => {console.log(result)})
.catch((err) => console.log(err.message))
.finally(() => console.log("Finnaly"))*/


const chainPromise1 = () => {
    new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(1);
    }, 3000)
    })
    .then((res)=> {
    console.log(res)
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("It is ERROR"))
    }, 5000)
})
}).then((res)=>{
    console.log(res)
}).catch((err)=>{console.log(err.message)})
};
chainPromise1();

const chainFunction2 = async () => {
    try{
const res = await new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(1);
    }, 3000)
})
console.log(res)

    const res2 = await new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("It is ERROR"))
            //resolve(2)
        }, 5000)
    })
    console.log(res2)
} catch(err) {console.log(err.message)}
}

chainFunction2();



