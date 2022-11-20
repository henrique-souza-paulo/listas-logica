/*Faça um programa para ler três notas e o número de faltas de um aluno e escrever qual a sua 
situação final: Aprovado, Reprovado por Falta ou Reprovado por Média. A média para aprovação 
é 7,0 e o limite de faltas é 25% do total de aulas. O número de aulas ministradas no semestre foi 
de 80. A reprovação por falta sobrepõe a reprovação por Média. */

const notafalta = () => {

    let nota1 = Number(prompt("Digite a primeira nota"))
    let nota2 = Number(prompt("Digite a segunda nota"))
    let nota3 = Number(prompt("Digite a terceira nota"))
    let qtdFaltas = Number(prompt("Digite a quantidade de faltas"))
    const totalAulas = 80  // 255 disso é 20


    const media = (nota1 + nota2 + nota3) / 3



    if( qtdFaltas >= 21){
        window.alert(`Aluno faltou em ${qtdFaltas} aulas portanto ele foi REPROVADO por falta!`)
        
    }else if (qtdFaltas <= 20){
        if( media >= 7.0){
            window.alert(`A media do aluno foi ${media.toFixed(1)} e portanto ele está APROVADO`)
        }else if(media < 7.0){
            window.alert(`A media do aluno foi ${media.toFixed(1)} e portanto ele está REPROVADO pela média`) 
        }
    }
}
 