/*
Para sacar dinheiro em um banco precisamos informar a senha correta e ter saldo suficiente.
Vamos supor que temos R$ 1000.00 na conta e a senha é 123456. Faça um programa que
receba o valor que será sacado pelo usuário e a senha da conta (senha numérica). Com esses
dados, o programa deve informar ao usuário se o saque pode ou não ser realizado. Caso o
saque possa ser realizado, o programa também deve exibir o novo saldo do usuário


Faça um programa que receba o valor que será sacado pelo usuário e a senha da conta

200,00
*/

const banco = () => {
    const valorSacado = Number(document.getElementById("inputNumber").value)
    const senha = Number(document.getElementById("inputPassword1").value)

    if (senha == false) {
        window.alert(`Digite uma senha`);
    } else if (senha == 123456) {
        window.alert(`Acesso permitido!`);
        if (valorSacado <= 1000) {
            let resultado = 1000 - valorSacado
            window.alert(`Voce tinha ${1000},00 na conta, sacou ${valorSacado},00 e agora tem ${resultado},00`)
        } else if (valorSacado > 1000) {
            window.alert(`Voce tem apenas ${1000},00 em sua conta... Tente de novo`)
        }

    } else {
        window.alert(`Voce nao tem acesso ao sistema!`);
    }
}

const mostrarSenha = () => {
	const senha = document.getElementById("inputPassword1");
	if (senha.type == "password") {
		senha.type = "text";
	} else {
		senha.type = "password";
	}
}