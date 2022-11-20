/*Analise a seguinte informação:

Um posto está vendendo combustíveis com a seguinte tabela de descontos:

preço do litro do álcool é R$ 2.70
Álcool <= 20 == 2% de desconto por litro
Álcool > 20 == 5% de desconto por litros

preço do litro da gasolina é R$ 4.10
Gasolina <= 20 == desconto de 3% por litro
Gasolina > 20 == desconto de 6% por litro

Após à análise, faça um programa que leia o número de litros vendidos e o tipo de combustível
(codificado da seguinte forma: 1-álcool, 2-gasolina), calcule e imprima o valor a ser pago pelo cliente*/

const verificar = () => {

    let combustivel = Number(prompt("Digite o codigo do combustivel:")) // codigo do combustivel
    let litros = Number(prompt("Digite a quantidade de litros:")) // litros do combustivel
    let valorFinal

        //teste logico do alcool
    if (combustivel == 1) {

        if (litros <= 20) {

            litros = litros * 2.70
            valorFinal = litros - (litros * 2 / 100)
            
            window.alert(`Voce selecionou Álcool.
O valor original é R$${litros.toFixed(2)} e o valor com desconto é R$${valorFinal.toFixed(2)}`)
        } else if (litros > 20) {
            
            litros = litros * 2.70
            valorFinal = litros - (litros * 5 / 100)

            window.alert(`Voce selecionou Álcool.
O valor original é R$${litros.toFixed(2)} e o valor com desconto é R$${valorFinal.toFixed(2)}`)
        }

        //teste logico da gasolina
    } else if (combustivel == 2) {

        if (litros <= 20) {

            litros = litros * 4.10
            valorFinal = litros - (litros * 3 / 100)

            window.alert(`Voce selecionou Gasolina.
O valor original é R$${litros.toFixed(2)} e o valor com desconto é R$${valorFinal.toFixed(2)}`)

        } else if (litros > 20) {
            
            litros = litros * 4.10
            valorFinal = litros - (litros * 6 / 100)
            

            window.alert(`Voce selecionou Gasolina.
O valor original é R$${litros.toFixed(2)} e o valor com desconto é R$${valorFinal.toFixed(2)}`)

        }
    } else {
        window.alert(`Digite um codigo de combustivel`)
    }
}