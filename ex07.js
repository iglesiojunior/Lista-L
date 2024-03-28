import { question } from "readline-sync"

function print(mensagem){
    return console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    const numero_limite = pegar_numero('Insira um número limite: ')
    let numeros_intervalos = 1
    let soma_intervalos = 0
    while(numeros_intervalos <= numero_limite){
        soma_intervalos += numeros_intervalos
        numeros_intervalos++
    }
    print(`A soma dos números entre 1 e ${numero_limite} é igual a: ${soma_intervalos}`)
}
main()