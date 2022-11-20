/*Faça um programa que receba dois números inteiros e mostre o maior deles.
Não se esqueça que eles podem ser iguais.*/

const numeros = () => {
	const numero1 = Number(prompt("Digite o primeiro numero: "));
	const numero2 = Number(prompt("Digite o primeiro numero: "));

	if (numero1 == numero2) {
		window.alert(`Voce digitou os numeros: ${numero1} e ${numero2} 
		Os numeros sao iguais`);
	} else if (numero1 > numero2) {
		window.alert(`Voce digitou os numeros: ${numero1} e ${numero2} 
		O ${numero1} é o maior`);
	} else {
		window.alert(`Voce digitou os numeros: ${numero1} e ${numero2} 
		O ${numero2} é o maior`);
	} 
	}

