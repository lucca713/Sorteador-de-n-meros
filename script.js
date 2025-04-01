//world variables 
let qtd_choice = document.querySelector("#qtd_choice")
let min_number = document.querySelector("#min")
let max_number = document.querySelector("#max")

qtd_choice.oninput = () =>{
   console.log(qtd_choice.value)
}

min_number.oninput = () =>{
   console.log(qtd_choice.value)
}

max_number.oninput = () =>{
   console.log(qtd_choice.value)
}

//funcao para pegar numeros randoon

function getRandonNumber(min,max){
   Math.floor(Math.random(), (min - max + 1)) + min
}


qtd_choice.addEventListener("click", function() {
   console.log(qtd_choice.textContent)
  });
