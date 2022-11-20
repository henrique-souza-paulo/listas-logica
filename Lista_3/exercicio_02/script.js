/*Faça um programa que leia um número inteiro e verifique se este número
é divisível por 5 e por 3 ao mesmo tempo.*/

const numInteiro = () => {

    const inteiro = Number(prompt("Digite um numero inteiro:"))

    const resto3 = inteiro % 3
    const resto5 = inteiro % 5

    if( resto3 == 0 && resto5 == 0){
        window.alert(`O numero digitado foi: ${inteiro}, e ele é divisivel por 3 e por 5`)
    }else if(resto3 == 0 && resto5 != 0){
        window.alert(`O numero digitado foi: ${inteiro}, e ele é divisivel por 3 mas não é por 5`)
    }else if(resto5 == 0 && resto3 != 0){
        window.alert(`O numero digitado foi: ${inteiro}, e ele não é divisivel por 3 mas é por 5`)
    }
}
 