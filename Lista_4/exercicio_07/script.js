/*Faça um programa que determine o maior e o menor número entre N números digitados pelo
usuário. A condição de parada é a entrada de um valor 0, ou seja, o programa deve ficar
calculando o maior e o menor número até que a entrada seja igual a 0 (Zero).*/

const numeroSequencial = () => {
    let maior = -Infinity
    let menor = Infinity
    let entrada
    let mensagem = ""

    while (entrada !== 0){
        entrada = parseInt(prompt("Informe um valor: ")) //
        console.log("entrada", entrada)
    
        if (entrada !== 0){
            if (entrada > maior){
                maior = entrada
            }else if (entrada < menor){
                menor = entrada
            }
        }
        
    }
    if (maior === -Infinity){
        window.alert(`Usuario não interagiu`)
    }else {
        window.alert(`O maior numero é: ${maior}`)
    }
    if (menor === Infinity){
        window.alert(`Usuario não interagiu`)
    }else {
        window.alert(`O menor numero é: ${menor}`)
    }

}
 