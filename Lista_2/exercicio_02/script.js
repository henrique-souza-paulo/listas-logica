/*Faça um programa que leia um número inteiro X. Se o número for maior ou igual a 100 emitir
uma mensagem dizendo “Número maior ou igual a 100”, senão, emitir uma mensagem dizendo
“Número menor que 100”.*/

const numeros = () => {
	const numInteiro = Number(prompt("Digite um valor: "));

	if (numInteiro > 100) {
		window.alert(`Voce digitou o numero ${numInteiro} e é maior que 100`)
    } else if(numInteiro == 100){
		window.alert(`Voce digitou o numero ${numInteiro} e é igual a 100`)
	} else {
		window.alert(`Voce digitou o numero ${numInteiro} e é menor que 100`)
	}
}