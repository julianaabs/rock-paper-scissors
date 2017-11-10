function Jogador(nome, genero, tipoJogador){
	this.nome = nome;
	this.genero = genero;
	this.tipoJogador = tipoJogador;
	
}

function getRandom(min, max){
	return Math.random() * (max-min) + min;
}



function setJogador(){
	var player1 = new Jogador();
	while(player1.nome == "" || !(player1.nome)){
		player1.nome = prompt("Informe seu nome: ");
	}
	while(player1.genero == "" || !(player1.genero)){
		player1.genero = prompt("Informe seu gênero: ");
	}
	/*$("#sexo").dialog({
		autoOpen: true,
		buttons:{
			Feminino: function(){
				player1.sexo = "Feminino";
			},
			Masculino: function(){
				player1.sexo = "Masculino";
			}
		},
		width: "300px"
	}); */
	player1.tipoJogador = "Pessoa";

	var computer = new Jogador();
	computer.nome = "Computer";
	computer.genero = "None";
	computer.tipoJogador = "Computador"

	console.log(player1);
	console.log(computer);
}



function opcaoSelecionada(){
	if(tipoJogador == "Pessoa"){
		return "";
	}else{
		return getRandom(1, 4);
	}
}

function hidePlayButton(){
	var y = document.getElementById("playGame");
	var x = document.getElementById("playButton").addEventListener("click", function(){
		if (y.style.display === "none") {
        	y.style.display = "block";
    	} else {
        	y.style.display = "none";
    	}
	});
    
}