/*Faça um programa que leia 3 números a, b e c, e os escreva em ordem crescente.*/

const orgazinar = () => {

    const num1 = Number(prompt("Digite o primeiro numero: "))
    const num2 = Number(prompt("Digite o segundo numero: "))
    const num3 = Number(prompt("Digite o terceiro numero: "))

    let numbers = [num1, num2, num3]

    numbers.sort(function(a,b){
        if(a > b) return 1;
        if(a < b) return -1;
        if(a == b) return window.alert("Existe numeros iguais")
        return 0;
    })
    window.alert(`${numbers}`)
    
/*
    if ((num1 < num2) && (num1 < num3) && (num2 < num3)) {
        window.alert(`${num1}, ${num2} e ${num3}`)

    } else if ((num1 < num3) && (num1 < num2) && (num3 < num2)) {
        window.alert(`${num1}, ${num3} e ${num2}`)

    } else if ((num2 < num1) && (num2 < num3) && (num1 < num3)) {
        window.alert(`${num2}, ${num1} e ${num3}`)

    } else if ((num2 < num3) && (num2 < num1) && (num3 < num1)) {
        window.alert(`${num2}, ${num3} e ${num1}`)

    } else if ((num3 < num1) && (num3 < num2) && (num1 < num2)) {
        window.alert(`${num3}, ${num1} e ${num2}`)

    } else if ((num3 < num2) && (num3 < num1) && (num2 < num1)) {
        window.alert(`${num3}, ${num2} e ${num1}`)
    } else{
        window.alert("existe numeros iguais")
    }
    */
}
