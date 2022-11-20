/*Faça um programa onde o usuário entra com o valor da compra, com a taxa (por dia) de juros 
pelo atraso do pagamento e com a quantidade de dias em atraso. Efetuar o cálculo do valor a 
pagar.
Se o valor a pagar for: 
• menor ou igual 100 → escreva "Pagamento deve ser realizado à vista." 
• entre 101 e 300 → escreva "Pagamento deve ser realizado em 2 parcelas." 
• entre 301 e 500 → escreva "Pagamento deve ser realizado em 3 parcelas." 
• entre 501 e 900 → escreva "Pagamento deve ser realizado em 5 parcelas." 
• entre 901 e 1000 → escreva "Pagamento deve ser realizado em 6 parcelas." 
• acima de 1000 → Solicite em quantas parcelas o usuário gostaria de pagar e escreva: "Seu 
pagamento será realizado em X parcelas", onde X será o número de parcelas. No entanto, 
se o usuário optar por uma única parcela, escreva: "Seu pagamento será a vista. " 
Importante: No caso de um pagamento parcelado, o programa deve calcular e mostrar o valor de 
cada parcela. 
*/
const produtoJuros = () => {

    let produto = Number(prompt("Digite o valor da compra: R$"))
    let juros = Number(prompt("Digite o taxa de juros diario"))
    let diasAtraso = Number(prompt("Digite a quantidade de dias em atraso:"))

    let pdtJuros = produto + (diasAtraso * (produto * juros / 100))

    if (pdtJuros <= 100) {
        window.alert(`O valor com juros é R$ ${pdtJuros},00 e o pagamento deve ser realizado à vista.`)
    } else if (pdtJuros >= 100 && pdtJuros <= 300) {
        window.alert(`O valor com juros é R$ ${pdtJuros},00 e o pagamento deve ser realizado em 2 parcelas.`)
    } else if (pdtJuros >= 301 && pdtJuros <= 500) {
        window.alert(`O valor com juros é R$ ${pdtJuros},00 e o pagamento deve ser realizado em 3 parcelas.`)
    } else if (pdtJuros >= 501 && pdtJuros <= 900) {
        window.alert(`O valor com juros é R$ ${pdtJuros},00 e o pagamento deve ser realizado em 5 parcelas.`)
    } else if (pdtJuros >= 901 && pdtJuros <= 100) {
        window.alert(`O valor com juros é R$ ${pdtJuros},00 e o pagamento deve ser realizado em 6 parcelas.`)
    } else if (pdtJuros > 1000) {
        let qtdparcelas = window.prompt(`Em quantas parcelas deseja pagar?`)
        if (qtdparcelas == 1) {
            window.alert(`O valor com juros é R$ ${pdtJuros},00 e voce escolheu pagar a vista.`)
        } else if (qtdparcelas > 1) {
            let valorFinal = pdtJuros / qtdparcelas
            window.alert(`
            O valor com juros é R$ ${pdtJuros.toFixed(0)},00.
            Voce escolheu pagar em ${qtdparcelas} parcelas de R$ ${valorFinal.toFixed(0)},00
            `)
        }

    }
}
