//world variables 
let qtd_choice = document.querySelector("#qtd_choice")
let min_number = document.querySelector("#min")
let max_number = document.querySelector("#max")
const show_number = document.querySelector("#show_number")
const button = document.querySelector("button")
let max_number1
qtd_choice.oninput = () =>{
   console.log(qtd_choice.value)
}

min_number.oninput = () =>{
   min_number = Number(min_number.value)  
}

max_number.oninput = () =>{
   max_number1 = Number(max_number.value)
   
}

console.log(max_number1)

//funcao para pegar numeros randoon

function getRandonNumber(min,max){
   Math.floor(Math.random(), (min - max + 1)) + min
}

button.onclick = () => {
   show_number.innerHTML = getRandonNumber(min_number, max_number)
}

qtd_choice.addEventListener("click", function() {
   console.log(qtd_choice.textContent)
  });
