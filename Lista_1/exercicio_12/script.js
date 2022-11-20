/*Faça um programa que deve receber duas notas de provas (P1 e P2), duas notas de trabalho (T1 e T2)
e imprimir se o aluno foi aprovado ou reprovado. As notas de provas têm peso 7 e as de trabalho peso 3.
Assim, a média deve ser calculada com base na seguinte fórmula: (P1 * 0.7 + T1 * 0.3 + P2 * 0.7 + T2 * 0.3) / 2.
O aluno estará aprovado se sua média for superior ou igual a 6, caso contrário estará reprovado. 
*/

const professor = prompt("Professor digite seu nome: ")
const aluno = prompt("Digite o nome do seu aluno: ")

const escola = () => {
    const prova1 = Number(prompt(`Qual foi a primeira nota de prova do ${aluno}?`))
    const trabalho1 = Number(prompt(`Qual foi a primeira nota de trabalho do ${aluno}`))
    const prova2 = Number(prompt(`Qual foi a segunda nota de prova do ${aluno}`))
    const trabalho2 = Number(prompt(`Qual foi a segunda nota de trabalho do ${aluno}`))

    const resultado = ((prova1 * 0.7) + (trabalho1 * 0.3) + (prova2 * 0.7) + (trabalho2 * 0.3)) / 2

    if(resultado.toFixed(2) >= 6){
        window.alert(`Ola Professor ${professor}, o aluno ${aluno} ficou com a media ${resultado.toFixed(1)} e foi aprovado`)
    }else{
        window.alert(`Ola Professor ${professor}, o aluno ${aluno} ficou com a media ${resultado.toFixed(1)} e foi reprovado`)
    }
}