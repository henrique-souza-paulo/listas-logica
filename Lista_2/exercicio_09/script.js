/*Faça um programa que leia uma letra e informe se ela é uma vogal.*/

const vogal = () => {
    let letra = prompt("Digite uma letra")
    letra = letra.toLowerCase()

    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        window.alert(`
        A letra: ${letra}.
        É uma vogal`)
    } else {
        window.alert(`
        A letra: ${letra}.
        É uma consoante`)
    }
}