/*Três amigos jogaram na loteria. Caso eles ganhem, o prêmio deve ser repartido proporcionalmente
ao valor que cada um deu para a realização da aposta. Faça um programa que leia quanto cada
apostador investiu, o valor do prêmio, e imprima quanto cada um ganharia do prêmio com base no valor investido.
*/

const calculoLoteria = () => {
    const valorPremio = Number(prompt("Valor do premio: "))
    const nomeAmigo1 = (prompt("Nome do primeiro amigo: "))
    const investimento1 = Number(prompt(`Valor que ${nomeAmigo1} investiu: `))

    const nomeAmigo2 = (prompt("Nome do segundo amigo: "))
    const investimento2 = Number(prompt(`Valor que ${nomeAmigo2} investiu: `))

    const nomeAmigo3 = (prompt("Nome do terceiro amigo: "))
    const investimento3 = Number(prompt(`Valor que ${nomeAmigo3} investiu: `))

    const valoresInvestidos = investimento1 + investimento2 + investimento3
    const novoValor = valorPremio / valoresInvestidos

    //calculando o novo valor pelo valor investido e mandando para a variavel newAmigo1
    const newAmigo1 = (novoValor * investimento1).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })
    //calculando o novo valor pelo valor investido e mandando para a variavel newAmigo2
    const newAmigo2 = (novoValor * investimento2).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })
    //calculando o novo valor pelo valor investido e mandando para a variavel newAmigo3
    const newAmigo3 = (novoValor * investimento3).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })
    //mandando o valor do premio para uma nova variavel para converter ele em R$
    const novoValorPremio = (valorPremio).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })

    //mandando a janela na tela mostrar os nomes e valores
    window.alert(`
    O valor do premio é ${novoValorPremio} 

    ${nomeAmigo1} investiu R$${investimento1.toFixed(0)},00 e recebeu ${newAmigo1}!
    ${nomeAmigo2} investiu R$${investimento2.toFixed(0)},00 e recebeu ${newAmigo2}!
    ${nomeAmigo3} investiu R$${investimento3.toFixed(0)},00 e recebeu ${newAmigo3}!
    `)
}