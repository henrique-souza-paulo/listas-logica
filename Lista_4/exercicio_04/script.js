/*Faça um programa que mostre todos os números ímpares de 1 até 200 (ordem crescente). Pense
em duas formas diferentes de escrever este programa.*/

/* forma 1 */
const numerosImpares = () => {
    console.log("teste")
    for (let valor = 0; valor <= 200; valor++) {
        let resto = valor % 2
        if (resto != 0 ){
            console.log(valor)
        }
    }
}
/* forma 2 */
const numerosImpares2 = () => {
    for (let valor = 1; valor <= 200; valor = valor+2) {
        console.log(valor)
    }
}