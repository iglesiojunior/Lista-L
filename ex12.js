import {question} from 'readline-sync'


function mostrar(mensagem){
   console.log(mensagem)
}


function pegar_numero(mensagem){
   return Number(question(mensagem))
}


function main(){
   const contador_qtd_num = pegar_numero('Insira o número N: ')
   let contador_num_contados = 0
   let soma_numeros = 0
   while(contador_num_contados < contador_qtd_num){
       const pedido_de_num = pegar_numero('Insira um número a ser somado: ')
       soma_numeros+=pedido_de_num
       contador_num_contados++
   }
   let media_numeros = soma_numeros/contador_qtd_num
   mostrar(`
   A soma de todos os números é: ${soma_numeros}
   A media dos números é igual a ${media_numeros.toFixed(1)}
   `)


}
main()