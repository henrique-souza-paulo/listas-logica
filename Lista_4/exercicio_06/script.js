/*Faça um programa que apresente a sequência entre dois números quaisquer digitados pelo
usuário, desde que o segundo número seja maior do que o primeiro.*/
const doisNumeros = () => {
    let primeiroNumero = Number(document.getElementById("primeiroNumero").value)
    let segundoNumero = Number(document.getElementById("segundoNumero").value)
    if (segundoNumero > primeiroNumero){
        let mensagem = ""
        for(primeiroNumero ; primeiroNumero <= segundoNumero; primeiroNumero++){
            mensagem = `${mensagem} \n ${primeiroNumero}`
        }
        window.alert(mensagem)
    }else{
        window.alert("Segundo numero é menor!")
    }
}