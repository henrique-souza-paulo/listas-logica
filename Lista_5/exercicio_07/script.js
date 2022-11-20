/*Faça um programa que construa um vetor de 8 posições de números inteiros armazenando em
sua primeira posição o valor 10, na segunda posição, o dobro do valor da primeira posição, 20,
na terceira posição, o dobro do valor da segunda posição, 40, e assim por diante. Ao final,
mostre o valor armazenado na 8ª posição e a soma de todos os valores armazenados no vetor.*/

const numeroSequencial = () => {
    let valores = []
    let resultadoSoma
    let entrada

    /* pegando o valor inicial */
    entrada = Number(prompt("Digite um valor"))
    valores.push(entrada)

    /* fazendo o array pegar o dobro da posição anterior */
    for (let index = 0; index < 8; index++) {
        resultadoSoma = valores[index] * 2
        valores.push(resultadoSoma)
    }
    /* fazendo a soma dos valores do array */
    let soma = valores.reduce(function(soma, i) {
        return soma + i;
    });

    /* mostrando as informações na tela */
    window.alert(`
    O valor inicial do vetor é ${entrada}
    Os valores do vetor são ${valores}
    Na posição 8 o valor é ${valores[8]}
    A soma de todos os valores do vetor é ${soma}
    `)
 }