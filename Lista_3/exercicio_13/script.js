/*Um comerciante comprou um produto e quer vendê-lo com um lucro de 45% se o valor da compra 
for menor que R$ 20,00; caso contrário, o lucro será de 30%. Elabore um programa que leia o valor 
do produto e imprima o valor de venda para o produto.*/

const produtoDesc = () => {

    let produto = Number(prompt("Digite o valor do produto"))
   
    let novoProduto

    if( produto < 20.00 || produto < 20){
        novoProduto = produto + (produto * 45 / 100)
        window.alert(`O valor do produto é ${produto.toFixed(0)},00 e com o lucro o valor vai para ${novoProduto.toFixed(0)},00`)
    }else if ( produto > 20.00 || produto > 20){
        novoProduto = produto + (produto * 30 / 100)
        window.alert(`O valor do produto é ${produto.toFixed(0)},00 e com o lucro o valor vai para ${novoProduto.toFixed(0)},00`)
    }
}
 