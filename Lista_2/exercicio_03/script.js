/*Sabendo que o latão é obtido fundindo-se sete partes de cobre com três partes de zinco,
escreva um programa que solicite ao usuário quantos quilos de latão ele quer produzir e
imprima na tela quantos quilos de cobre e zinco serão necessários.*/

const ferreiro = () => {
    const latao = Number(prompt("Digite o valor do latão"))

        const cobre = latao * 7
        const zinco = latao * 3

        window.alert(`Sera necessario ${cobre} parte(s) de cobre e ${zinco} parte(s) de zinco`)
}

