//Faça um programa que leia três valores inteiros e imprima a soma deles. 

const calculo = () => {
    const num1 = Number(prompt("Informe o primeiro numero"))
    const num2 = Number(prompt("Informe o segundo numero"))
    const num3 = Number(prompt("Informe o terceiro numero"))

    const resultado = num1 + num2 + num3
    window.alert(`${num1} + ${num2} + ${num3} = ${resultado}`)

}