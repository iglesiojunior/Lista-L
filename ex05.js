import { question } from "readline-sync"

function print(mensagem){
    return console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    let numero = pegar_numero('Insira o número que você deseja o fatorial: ')
    let resultado = numero
    let resultado_fatorial = 0
    while(numero !== 1){
        resultado_fatorial += numero*(numero-1)
        numero-= 2
    } 
    print(`O resultado do fatorial do seu numero ${resultado} = ${resultado_fatorial}`)
}
main()