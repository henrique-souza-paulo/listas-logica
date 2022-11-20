/*
Faça um programa que leia a idade de um nadador e classifique-o em uma das seguintes
categorias:
 Infantil A  5 a 7 anos.
 Infantil B  8 a 11 anos.
 Juvenil A  12 a 13 anos.
 Juvenil B  14 a 17 anos.
 Adulto  18 anos ou mais.
*/

const categorias = () => {
    const idade = Number(prompt("Digite sua idade"))

    if (idade <= 4) {
        window.alert(`Nao classificado`)
    } else if (idade <= 7) {
        window.alert(`Você é Infantil A`)
    } else if (idade <= 11) {
        window.alert(`Você é Infantil B`)
    } else if (idade <= 13) {
        window.alert(`Você é Juvenil A`)
    } else if (idade <= 17) {
        window.alert(`Você é Juvenil B`)
    } else if (idade >= 18) {
        window.alert(`Você é Adulto`)
    }
}