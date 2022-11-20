/*Faça um programa que receba um golpe que um personagem deve executar. O programa
deve ficar solicitando golpes até o usuário responder que não deseja mais executá-lo. Para
identificar os golpes, utilize três números: 5 (chute), 6 (soco) e 7 (magia), onde: chute vale 2
pontos, soco 4 pontos e magia 10 pontos. No final, o programa deve exibir para o usuário o
número de vezes que executou cada golpe e a pontuação obtida por cada um, bem como a
pontuação total do usuário. */
const getSum = (total, num) => {
    return total + Math.round(num);}
const golpesPersonagem = () => {
    let entrada
    
    let arrayGolpeChute = []
    let totalChute , qtdChute

    arrayGolpeSoco.push(4, 3)


    let arrayGolpeSoco = []
    let totalSoco , qtdSoco

    let arrayGolpeMagia = []
    let totalMagia , qtdMagia

    //let mensagem = ""

    while (entrada !== 0){
        entrada = parseInt(prompt("Informe um codigo"))

        if (entrada == 5){
            arrayGolpeChute.push(2) //adicionando a pontuação no array

            totalChute = arrayGolpeChute.reduce(getSum) //somando os intens no array
            qtdChute = arrayGolpeChute.length //verificando quantas vezes o intem foi escolhido 


        } else if (entrada == 6){
            console.log(`voce escolheu soco`)
           arrayGolpeSoco.push(4)

           totalSoco = arrayGolpeSoco.reduce(getSum)

           qtdSoco = arrayGolpeSoco.length

         } else if (entrada == 7){
            console.log(`voce escolheu magia`)
           arrayGolpeMagia.push(10)

           totalMagia = arrayGolpeMagia.reduce(getSum)

           qtdMagia = arrayGolpeMagia.length

         }else {
            console.log(`Opcao invalida`)
         }
    }

    window.alert(`Voce escolheu "Chute" ${qtdChute} vezes, e a pontuação total foi ${totalChute} pts;
Voce escolheu "Soco" ${qtdSoco} vezes, e a pontuação total foi ${totalSoco} pts;
Voce escolheu "Magia" ${qtdMagia} vezes, e a pontuação total foi ${totalMagia} pts.
    `)
}

/*
    if( arrayGolpeChute.length != 0 ){
        mensagem = `\n Voce escolheu "Chute" ${qtdChute} vezes, e a pontuação total foi ${totalChute} pts;`
    } else{
        mensagem = ""  
    } 
    
    if( arrayGolpeSoco != 0 ){
        mensagem = `\n Voce escolheu "Soco" ${qtdSoco} vezes, e a pontuação total foi ${totalSoco} pts;`
    } else {
        mensagem = ""
    }
    
    if( arrayGolpeMagia != 0){
        mensagem = `\n Voce escolheu "Magia" ${qtdMagia} vezes, e a pontuação total foi ${totalMagia} pts.`
    }

    window.alert(mensagem) */