/*Faça um programa que leia o instante do início e do término do jogo, ambos subdivididos em 2
valores distintos: horas e minutos. Calcular e escrever a duração do jogo, também em horas e
minutos, considerando que o jogo pode iniciar em um dia e terminar no dia seguinte, porém nunca
atingirá 24 horas.
*/

const jogoHoraMinuto = () => {
    let horaInicial = parseInt(prompt("Digite a hora inicial:"))
    let minutoInicial = parseInt(prompt("Digite o minuto inicial:"))
    let horaFinal = parseInt(prompt("Digite a hora final:"))
    let minutoFinal = parseInt(prompt("Digite o minuto final:"))
    let conferir = prompt(`Jogo começou ${horaInicial}:${minutoInicial} e terminou ${horaFinal}:${minutoFinal}.
Digite "Sim" para confirmar e "Nao" para cancelar`)
    conferir = conferir.toLowerCase()
    let horaTotal = 0
    let minutoTotal = 0
    
    console.log(`essa foi a hora inicial digitada ${horaInicial}:${minutoFinal} || essa foi a hora final digitada${horaFinal}:${minutoFinal} e foi isso que ele digitou ${conferir}`)

    if(conferir == "sim"){
        for(horaInicial; horaInicial !== horaFinal; horaInicial++) {
            horaTotal += 1
            if(horaInicial == 24){
                horaInicial = 0
            }
        }
    console.log(`${horaTotal}`)

        for(minutoInicial; minutoInicial!=minutoFinal; minutoInicial++){
            minutoTotal +=1
            if(minutoInicial == 60){
                minutoInicial = 0
            }
        }
        if(horaTotal == 0 && minutoTotal == 0){
            console.log("Jogo não pode ter durado 24 hrs")
        }else{
            console.log(`O jogo teve a duração de ${horaTotal} horas e ${minutoTotal} minutos`)
        }
    }else if (conferir == "nao"){
        console.log(`Reiniciando o codigo`)
       // window.location.reload(true);
    }
}