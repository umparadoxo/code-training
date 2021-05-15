var resultado = document.getElementById('resultado');
var age = document.getElementsByName('quantity');
var choice;

function defineYes(){
	choice = 'yes'	
}
function defineNo() {
	choice = 'no'	
}


//Função para validar a permissão de CNH
function validate() {
	let ageValue = age[0].value;

	if (ageValue !== ""){
		if (choice !== undefined){
			if (ageValue >= 18 && choice === 'yes'){
				document.getElementById('resultado').innerHTML = 'Tem permissão para dirigir.'
			}else{
				if (ageValue < 18){
					document.getElementById('resultado').innerHTML = 'Você não tem a idade mínima.'
				}else{
					if (choice === 'no'){
						document.getElementById('resultado').innerHTML = 'Você não possui CNH, providencie uma.'
					}
				}
			}
		}else{
			document.getElementById('resultado').innerHTML = 'Responda se tem CNH.'
		}

	}else{
		document.getElementById('resultado').innerHTML = 'Insira sua idade.'
	}

}






function pulaLinha(){
	document.write("<br>")
}

function escreve(frase){
	document.write(frase)
	pulaLinha();
}