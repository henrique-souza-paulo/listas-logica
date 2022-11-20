/*Faça um programa que pergunte a idade de uma pessoa. Caso esta pessoa tenha entre 0 e 17 anos,
o programa deverá emitir uma mensagem informando quantos anos faltam para a sua maioridade.
Ex.: “Você é menor de idade e falta ...... anos para completar a maioridade.” Caso a pessoa seja
maior de 18, emitir a mensagem “Você é maior de idade há .... anos!"*/

const idadeC = () => {

    var idade = Number(prompt("Digite sua idade"))
    
    if( idade <= 17){
        var menoridade = 18 - idade
        window.alert(`Você é menor de idade e falta ${menoridade} ano(s), para você completar a maioridade`)
    } else if( idade == 18){
        window.alert(`Você virou maior de idade há menos de 1 ano`)
    } else if( idade >= 18){
        var maioridade = idade - 18
        window.alert(`Você é maior de idade há ${maioridade} ano(s)`)
    }
}
 