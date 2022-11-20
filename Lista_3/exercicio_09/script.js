/*Faça um programa que leia 5 números inteiros informados pelo usuário e, no final, mostre o maior
deles.*/

const numeros = () => {

    const num1 = Number(prompt("Digite o primeiro numero"))
    const num2 = Number(prompt("Digite o segundo numero"))
    const num3 = Number(prompt("Digite o terceiro numero"))
    const num4 = Number(prompt("Digite o quarto numero"))
    const num5 = Number(prompt("Digite o quinto numero"))

    const numero = Math.max(num1, num2, num3, num4, num5)
    
    window.alert(`O numero maior é ${numero}`)
}
 