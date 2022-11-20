/*Um pescador comprou um microcomputador para controlar o rendimento diário de seu
trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento
de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo
excedente. Assim, faça um programa que leia o peso de peixes e verifique se há excesso. Se
houver, o programa também deve calcular o valor da multa que o pescador deverá pagar. No
final, o programa deve imprimir o excesso e a multa paga pelo pescador.


peso estabelecido = 50 quilos
se passar disso é 4,00 por quilo

ler o peso e verificar se ha excesso

se tiver calcule o valor da multa que o pescador paga

imprima o valor do excesso e a multa*/

const peixada = () => {
    const nome = prompt("Digite seu nome")
    const peixe = Number(prompt("Digite o peso dos peixes"))

    if (peixe > 50) {

        let excesso = peixe - 50
        let valorFinal = excesso * 4
        window.alert(`Olá, ${nome}. Houve um excesso de ${excesso} quilos e a multa é de R$ ${valorFinal},00 reais`)
    } else {
        window.alert(`Parabens, não houve excesso`)
    }
}