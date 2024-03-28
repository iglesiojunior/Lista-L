import { question } from "readline-sync"

function print(mensagem){
    return console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    let valor_tabuada = pegar_numero('Insira o valor que você deseja a tabuada: ')
    let contador_tabuada = 1
    while(contador_tabuada <= 10){
        const resultado_multiplicação = valor_tabuada*contador_tabuada
        print(`${valor_tabuada}x${contador_tabuada} = ${resultado_multiplicação}`)
        contador_tabuada++
    }
}
main()