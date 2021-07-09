let hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

let btnValue = document.querySelector(".btn");
let colorValue = document.querySelector("#color");

btnValue.addEventListener('click', function(){
    let hexColor = "#";
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }

    document.body.style.backgroundColor = hexColor;
    colorValue.textContent = hexColor;
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}