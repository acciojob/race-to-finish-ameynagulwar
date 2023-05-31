window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

window.promises = [];

let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("a")
    },1000)
})

let prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("b")
    },2000)
})

let prom3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("c")
    },4000)
})

let prom4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("d")
    },500)
})

let prom5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("e")
    },5000)
})

let result = Promise.any([prom1, prom2, prom3, prom4, prom5])

result.then((data) => {
    info(data);
})

function info (data) {
    let div = document.getElementById("output");
    div.innerHTML = data;
}