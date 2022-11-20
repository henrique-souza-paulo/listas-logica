/*Faça um programa para calcular a velocidade de um objeto. O usuário irá fornecer para o programa
a velocidade inicial (vi), a aceleração (a) e o tempo (t). Utilize a equação: v=vi+a*t. Imprima o valor
da velocidade*/

const velocidade = () => {

    const veloIni = Number(prompt("Digite a velocidade inicial"))
    const acele = Number(prompt("Digite a aceleração"))
    const tempo = Number(prompt("Digite o tempo"))

    const velocidade = veloIni + acele * tempo

   window.alert(`A velocidade do objeto é ${velocidade} km/h`)
 
}
 