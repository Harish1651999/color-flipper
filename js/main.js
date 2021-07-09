let colors = ["red","green","blue","yellow"];

let btnValue = document.querySelector(".btn");
let colorValue = document.querySelector("#color");

btnValue.addEventListener('click', function(){
    let randomNumber = parseInt(Math.random() * colors.length);
    
    document.body.style.backgroundColor = colors[randomNumber];
    colorValue.textContent = colors[randomNumber];
})