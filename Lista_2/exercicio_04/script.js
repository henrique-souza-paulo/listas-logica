/*Faça um programa que receba um número inteiro e verifique se este número é par ou ímpar.
Identificamos se um número é par ou ímpar quando o dividimos por dois. Se o resto da divisão
for zero, o número é par, caso contrário, é ímpar.*/

const verificarPar = () => {
    const numPar = Number(prompt("Digite um valor: "))

    const resto = numPar % 2

    if (resto == 0) {
        window.alert(`Esse numero é par`)
    } else if (resto == 1) {
        window.alert(`Esse numero é impar`)
    }
}