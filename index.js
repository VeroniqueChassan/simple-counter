
let number = document.getElementById("number");
let integer = 0;

let incrementBtn = document.getElementById("increment");
let decrementBtn = document.getElementById("decrement");

incrementBtn.addEventListener("click", ()=> {
    integer++;
    number.innerHTML = integer;
})

decrementBtn.addEventListener("click", ()=> {
    integer--;
    number.innerHTML = integer;
})


