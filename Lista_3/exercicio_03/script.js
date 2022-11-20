/*Faça um programa para calcular o peso ideal (PI) de uma pessoa adulta. Entrar com o sexo ‘m’ para
masculino e ‘f’ para feminino e a altura. Se sexo for igual a ‘m’ usar a fórmula: PI=altura2 * 23.
Senão, usar a formula: PI=altura2 * 22*/

const pesoIdeal = () => {

    let sexo = document.getElementById("sexo").value
    sexo = sexo.toLowerCase()
    let altura = Number(prompt("Digite sua altura:"))
    let pi
    
    if( sexo == "1"){
        pi = (altura**2) * 23
        pi = pi.toFixed(1)
        window.alert(`Seu peso ideal é: ${pi}`)
    }else if (sexo == "2"){
        pi = (altura**2) * 22
        pi = pi.toFixed(1)
        window.alert(`Seu peso ideal é: ${pi}`)
    }
}