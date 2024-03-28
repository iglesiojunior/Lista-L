import {question} from 'readline-sync'


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
       if(lim_inferior%2 === 0){
           mostrar(lim_inferior)
       }
       lim_inferior++
   }
  


}
main()