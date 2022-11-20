/*Faça um programa para mostrar a tabuada de um número qualquer digitado pelo usuário.*/

    const makeTabuada = () => {
        let mensagem = ""
        let tablebody = ""
        const inputNumber = Number(prompt("Digite o numero para fazer a tabuada dele"))

        if(inputNumber<=0)return alert("informe um numero maior que zero!!")

        const table = document.getElementById("tabela_tabuada")

        for(let i = 0 ; i <= 10; i++){
            mensagem = `${mensagem}\n${inputNumber} X ${i} = ${inputNumber*i}`
            tablebody = `
                ${tablebody}
                <tr> 
                    <td>${inputNumber}</td>
                    <td>X</td>
                    <td>${i}</td>
                    <td>=</td>
                    <td>${inputNumber*i}</td> 
                </tr>
            `
        }
        window.alert(mensagem)
        table.innerHTML = `
        <tr>
        <td colspan="5"> Tabuada do nº ${inputNumber} </td>
        </tr> \n ${tablebody}`
    }