import {question} from 'readline-sync'


function mostrar(mensagem){
   console.log(mensagem)
}


function pegar_numero(mensagem){
   return Number(question(mensagem))
}


function main(){
   const num_N = pegar_numero('Insira o número N: ')
   let lim_inferior = pegar_numero('Insira o limite inferior: ')
   const lim_superior = pegar_numero('Insira o limite superior: ')
   let contador_multiplos = 1
   while(lim_inferior <= lim_superior){
       const multiplo = num_N*contador_multiplos
       if(multiplo >= lim_inferior && multiplo <= lim_superior){
           mostrar(multiplo)
       }
       contador_multiplos++
       lim_inferior++
   }
}
main()