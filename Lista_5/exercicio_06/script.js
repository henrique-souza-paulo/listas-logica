/*Faça um programa que determine o maior e o menor entre N números. A condição de parada é
a entrada de um valor 0, ou seja, o programa deve ficar calculando o maior e o menor até que a
entrada seja igual a 0 (ZERO). No entanto, no final deste programa, apresente os números lidos,
o maior e o menor número. O usuário poderá digitar no máximo até 100 números.*/

const numeroSequencial = () => {
    let maior = -Infinity
    let menor = Infinity
    let entrada
    let numeros = []

    while (entrada !== 0){
        entrada = parseInt(prompt("Informe um valor: "))
        numeros.push(entrada)
        if (numeros.length == 100){
            window.alert(`Limite maximo de numeros é 100`)
            break  
        }
        if (entrada !== 0){
            if (entrada > maior){
                maior = entrada
            }else if (entrada < menor){
                menor = entrada
            }
        }
    }
        window.alert(`Os numeros digitados foram: ${numeros}.
O maior numero foi: ${maior};
O menor numero é: ${menor}.
`)

    }