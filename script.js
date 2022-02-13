const btn = document.getElementById("btn");
let inputText = document.getElementById("text");
let square = document.getElementById("square");
let btnE = document.getElementById("e_btn");
let range = document.getElementById("range");
const rangeSpan = document.getElementById("range-span");
const circle = document.getElementById("circle")
btn.onclick = function (){
    let inputVal = inputText.value
    square.style.backgroundColor = inputVal;
    btnE.style.display = "none";
}

range.onclick = function () {
    let rangeMovement = range.value + "%";
    rangeSpan.innerHTML = rangeMovement;
    circle.style.width = rangeMovement;
    circle.style.height = rangeMovement;
}





