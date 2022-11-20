/*Faça um programa que receba o valor do salário mínimo e o valor do salário de um funcionário, 
calcule e mostre a quantidade de salários mínimos que ganha esse funcionário. */

const salarios = () => {

    let salarioMin = Number(prompt("Digite o valor do salario minimo"))
    let salarioFun = Number(prompt("Digite o valor do salario do funcionario"))
    let quantidade

    quantidade = salarioFun / salarioMin
    
    window.alert(`O funcionario recebe mais ou menos ${quantidade.toFixed(0)} salario(s) minimo(s)`)

}
 