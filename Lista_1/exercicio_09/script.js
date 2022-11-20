/*Faça um programa que receba uma senha e teste se ela é igual à 904087. 
Se a senha estiver correta escreva “Acesso permitido”, 
do contrário, escreva a mensagem “Você não tem acesso ao sistema”
*/

const senhaf = () => {
	const usuario = document.getElementById("inputName").value;
	const senha = Number(document.getElementById("inputPassword1").value);

	if (senha == false) {
		window.alert(`Digite uma senha`);
	}else if (usuario == false) {
		window.alert(`Digite um usuario`);
	} else if (senha == 904087) {
		window.alert(`Acesso permitido! Bem vindo ${usuario.trim()}`);
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
