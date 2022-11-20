/*Faça um programa que leia 4 números e calcule o quadrado de cada um. Se o valor resultante do
quadrado do terceiro número for maior ou igual a 100, imprima-o. Caso contrário, imprima os
valores lidos e seus respectivos quadrados*/

const quadrados = () => {

    const num1 = Number(prompt("Digite o primeiro numero"))
    const num2 = Number(prompt("Digite o segundo numero"))
    const num3 = Number(prompt("Digite o terceiro numero"))
    const num4 = Number(prompt("Digite o quarto numero"))

    const num1Q = num1 ** 2
    const num2Q = num2 ** 2
    const num3Q = num3 ** 2
    const num4Q = num4 ** 2


    if( num3Q >= 100){
        window.alert(`O quadrado de ${num3} é ${num3Q}`)
    }else{
        window.alert(`
        ${num1}² = ${num1Q}
        ${num2}² = ${num2Q}
        ${num3}² = ${num3Q}
        ${num4}² = ${num4Q}
        `)
    }
}
 