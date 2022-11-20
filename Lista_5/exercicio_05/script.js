/*Faça um programa que determine o maior entre N números. A condição de parada é a entrada
de um valor 0, ou seja, o programa deve ficar calculando o maior até que a entrada seja igual a
0 (ZERO). No final do programa, mostre o maior número.*/

const numeroSequencial = () => {
    let maior = -Infinity
    let numeros = []
    let entrada

    while (entrada !== 0){
        entrada = parseInt(prompt("Informe um valor: "))
        numeros.push(entrada)
    
        if (entrada !== 0){
            if (entrada > maior){
                maior = entrada
            }
        }
    }
    if (maior === -Infinity){
        window.alert(`Usuario não interagiu`)
    }else {
        window.alert(`Os numeros digitados são: ${numeros}
O maior numero é: ${maior}`)
    }

}
 