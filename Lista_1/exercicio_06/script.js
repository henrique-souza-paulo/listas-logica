//Faça um programa que leia um número e imprima o resultado do quadrado desse número. 

const quadradoValor = () => {
    const quadrado = parseInt(prompt("Digite um valor"))
    const resultado = quadrado ** 2
    
    window.alert(`O numero ${quadrado} ao quadrado é: ${resultado}`)
}