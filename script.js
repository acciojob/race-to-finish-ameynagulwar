indow.promises = [];

for(let i = 0; i < 5; i++){
    const rTime = Math.floor(Math.random()*5)+1;
    const promise = new Promise((resovle) => {
        setTimeout(()=> {
            resovle(`promise ${i+1} resovled after ${rTime} sec`);
        }, rTime*1000);
    })
    window.promises.push(promise);
}





Promise.any(window.promises).then((result) => {
    const div = document.getElementById("output");
    div.textContent = result;
})