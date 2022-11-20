/*Faça um programa para calcular a área de uma circunferência, apresentando a medida da área
calculada. Fórmula : Area=Pi*Raio2. Considerar a constante Pi = 3.14.*/

const circuferencia = () => {

    const raio = Number(prompt("Digite o raio:"))
    const pi = 3.14

    const area = pi * (raio**2)

    window.alert(`A area da circunferência é ${area}`)
}
 