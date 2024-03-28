import {question} from 'readline-sync'


function verificar_primos(num){
   let contador_primos = 0
   let divisores = num
   while(contador_primos > 1){
       if(num%divisores === 1 && (num%(divisores-1)) === 1){
           divisores--
           contador_primos++
       }
       if(contador_primos > 2){
           return(false)
       }else{
           return(true)
       }
   }
}




function mostrar(mensagem){
   console.log(mensagem)
}


function pegar_numero(mensagem){
   return Number(question(mensagem))
}


function main(){
   let lim_inferior = pegar_numero('Insira o limite inferior: ')
   let lim_superior = pegar_numero('Insira o limite superior: ')
   while(lim_inferior <= lim_superior){
       let verificação = verificar_primos(lim_inferior)
       if(verificação === true){
           mostrar(verificação)
       }
       lim_inferior++
   }
  


}
main()