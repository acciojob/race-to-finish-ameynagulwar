window.promises = [];

let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("a")
    },1000)
})
promises.push(prom1);
let prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("b")
    },2000)
})
promises.push(prom2);
let prom3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("c")
    },4000)
})
promises.push(prom3);
let prom4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("d")
    },500)
})
promises.push(prom4);
let prom5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("e")
    },5000)
})
promises.push(prom5);
let result = Promise.any([prom1, prom2, prom3, prom4, prom5])

result.then((data) => {
    info(data);
})