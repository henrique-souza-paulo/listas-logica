//Faça um programa que leia um número inteiro e imprima o seu antecessor e o seu sucessor. 

const antesuce = () => {
    const num1 = Number(prompt("Digite um valor:"))

    if (isNaN(num1) == true) {
        window.alert(`Não é valor valido`)
    } else {

        const ante = num1 - 1
        const suce = num1 + 1

        window.alert(`O seu antecessor é ${ante}, e o seu sucessor é ${suce}`)

    }
}