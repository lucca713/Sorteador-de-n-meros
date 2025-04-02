//world variables 
let qtd_choice = document.querySelector("#qtd_choice")
let min_number = document.querySelector("#min")
let max_number = document.querySelector("#max")
const show_number = document.querySelector("#show_number")
const button = document.querySelector("button")
let max_number1, min_number1


//inicio input
   qtd_choice.oninput = () =>{
      console.log(qtd_choice.value)
   }

   min_number.oninput = () =>{
      min_number1 = Number(min_number.value)  
   }

   max_number.oninput = () =>{
      max_number1 = Number(max_number.value)
   }
//fim input

//funcao aonde gera o numero na tela
   button.onclick = () => {
      try{  
         let resultado = getRandonNumber(min_number1, max_number1)

         if(isNaN(resultado)){
            throw new Error("voce nao digitou nenhum numero")
         }
         
         show_number.innerHTML = resultado

      }catch(error){
         alert(error.message)
      } 
   }
//fim funcao aonde gera numero na tela


//funcao para gera numeros randoon
   function getRandonNumber(min,max){

   return Math.floor(Math.random() * (min - max + 1)) + min
   }
//fim funcao que gera numero na tela



