/*Faça um programa que receba o preço por litro de um combustível, a quantidade de quilômetros
por litro de um determinado carro e a distância a percorrer desejada. Seu programa deverá exibir
quantos litros serão necessários para percorrer esta distância e quanto será gasto.*/

const combustivel = () => {

    let preComb = Number(prompt("Digite o preço do combustivel"))
    preComb = preComb.toFixed(2)
    let kmlitro = Number(prompt("Digite quantos km o carro faz por litro"))
    let kmPercorrer = Number(prompt("Digite a quantidade de km que ira percorrer"))
    
    let kmatualizado = kmPercorrer / kmlitro
    let novoVa2 = kmatualizado * preComb
    window.alert(`Sera necessario ${kmatualizado.toFixed(0)} litros e sera gasto ${novoVa2.toFixed(0)},00`)
}
 