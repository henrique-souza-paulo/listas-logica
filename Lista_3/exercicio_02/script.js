/*Faça um programa que leia um número inteiro e verifique se este número
é divisível por 5 e por 3 ao mesmo tempo.*/

const numInteiro = () => {

    const inteiro = Number(prompt("Digite um numero inteiro:"))

    if( inteiro % 3 == 0 && inteiro % 5 == 0){
        window.alert(`O numero digitado foi: ${inteiro}, ele é divisivel por 3 e por 5`)
    }else if(inteiro % 3 == 0 && inteiro % 5 != 0){
        window.alert(`O numero digitado foi: ${inteiro}, ele é divisivel por 3 mas não é por 5`)
    }else if(inteiro % 5 == 0 && inteiro % 3 != 0){
        window.alert(`O numero digitado foi: ${inteiro}, ele não é divisivel por 3 mas é por 5`)
    }else{
        window.alert(`O numero digitado foi: ${inteiro}, ele não é divisivel por 3 e nem por 5`)
    }
}