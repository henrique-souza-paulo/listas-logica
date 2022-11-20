/*Faça um programa que mostre todos os números de 100 até 1 (ordem decrescente).*/

const numerosDecrescente = () => { 
    let valor
    let mensagem = ""
    for (valor = 100; valor > 0; valor--) {
        mensagem = `${mensagem} \n ${valor}`
    }
    window,alert(mensagem)
    console.log(mensagem)

}