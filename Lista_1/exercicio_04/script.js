/*Faça um programa para ler uma temperatura em graus Kelvin e apresentar a temperatura convertida em graus Celsius.
A fórmula de conversão é: C = K – 273.15, sendo K a temperatura em Kelvin e C a temperatura em Celsius.  */

const conversao = () => {
    const kelvin = Number(prompt("Digite a temperatura em Kelvin:")) // Number() converte string em number
    const celsius = kelvin - 273.15
    
    window.alert(`Ola, a temperatura ${kelvin}ºK convertida em  graus Celsius é ${celsius.toFixed(1)}ºC`)
}
 


