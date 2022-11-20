/*
Em uma eleição presidencial, existem quatro candidatos. Os votos são informados através de
códigos. Os códigos utilizados são:
• 1,2,3,4 - votos para os respectivos candidatos;
• 5 - voto nulo;
• 6 - voto em branco.
Assim, escreva um programa para receber um voto e imprima:
• Se o usuário votou em um candidato: "Voto contabilizado com sucesso..."
• Se o usuário votou nulo: "Voto nulo contabilizado..."
• Se o usuário votou em branco: "Voto branco contabilizado..."
a. Faça este programa utilizando estrutura de decisão.
b. Faça este programa utilizando estrutura de múltipla escolha.
*/

const votacao = () => {

    const voto = document.getElementById("voto").value

    if( voto <= 4){
        window.alert(`Voto contabilizado com sucesso...`)
    }else if( voto == 5 ){
        window.alert(`Voto nulo contabilizado...`)
    }else if( voto == 6 ){
        window.alert(`Voto branco contabilizado...`)
    }
}
 