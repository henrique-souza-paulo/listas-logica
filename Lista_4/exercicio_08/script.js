/*Faça um programa que solicite a idade de várias pessoas e mostre:
a. Total de pessoas com menos de 21 anos.
b. Total de pessoas com mais de 50 anos.
c. A média de idade das pessoas.
Importante: O programa termina quando a idade informada for -1 (Menos 1).*/

const variasIdades = () => {
    let mais50 = 0
    let menos21 = 0
    let soma = 0 
    let idade1
    let arIdades = []

    do {
        entrada = parseInt(prompt(`Digite uma idade`))
        arIdades.push(entrada)
    } while (entrada != 0);

    console.log("esse valor deu certo", arIdades)

        for(let i = 0; i < arIdades.length; i++){
            if (arIdades[i] === 0){
                break;
            } else {
                soma += arIdades[i]
                if(arIdades[i] > 50){
                    mais50++
                }
                if (arIdades[i] < 21){
                    menos21++
                }
            }
            let maismenos = [mais50, menos21]
            var indice = i+1
            console.log(`Temos ${maismenos[0]}, pessoas com idade maior que 50 anos e ${maismenos[1]}, pessoas com idade menor que 21 anos`)
            var media = soma/(i+1)
        } 

        console.log(`Como a ${indice+1}º idade que voce digitou é -1 paramos de analisar!`)
        console.log(`A media das idades é ${media.toFixed(0)}`)
   }

/*
const variasIdades = () => {
    let entrada 
    let idades = [3]
    let mais50 = 0
    let menos21 = 0
    let soma = 0 


    while (idades > 0) {
        entrada = parseInt(prompt(`Digite uma idade`))
        idades.push(entrada)
   
        for(let i = 0; i < idades.length; i++){
            if (idades[i] === -1){
                break;
            } else {
                soma += idades[i]
                if(idades[i] > 50){
                    mais50++
                }
                if (idades[i] < 21){
                    menos21++
                }
            }
            let maismenos = [mais50, menos21]
            let indice = i+1
            console.log(`Até a ${indice}º idade que voce digitou, temos ${maismenos[0]}, pessoas com idade maior que 50 anos e ${maismenos[1]}, pessoas com idade menor que 21 anos`)
            let media = soma/(i+1)
        } 

        console.log(`Como a ${indice+1}º idade que voce digitou é -1 paramos de analisar!`)
        console.log(`A media das idades é ${media}`)
    }
} */