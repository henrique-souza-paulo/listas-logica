/*Faça um programa que leia um valor inteiro em segundos, e imprima-o em horas, minutos e segundos.*/

const horas = () => {
    const segundos2 = Number(prompt("Digite um valor inteiro em segundos:"))
    let segundos = segundos2

    const hora = parseInt(segundos / 3600)
    segundos = segundos % 3600

    const minuto = parseInt(segundos / 60)
    segundos = segundos % 60

    window.alert(`${segundos2} segundos convertido em é ${hora} hora(s), ${minuto} minuto(s) e ${segundos} segundo(s)`)
}
