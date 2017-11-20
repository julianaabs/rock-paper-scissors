var player;
var computer;
var allPlayers = [];
var allComputers = [];
var match;

function Jogador(name, gender, typePlayer){
	this.name = name;
	this.gender = gender;
	this.typePlayer = typePlayer;
	this.jogada;
	this.jogadaPlayer = [];
	this.result = 0;
	this.points = 0;
	this.match = 0;
	
	this.getName = function(){
		return this.name;
	}

	this.getGender = function(){
		return this.gender;
	}

	this.getTypePlayer = function(){
		return this.typePlayer;
	}

	this.getPoints = function(){
		return this.points;
	}

	this.setPoints = function(points){
		this.points += points;
	}

	this.getJogada = function(){
		return this.jogada;
	}

	this.setJogada = function(jogada){
		this.jogada = jogada;
	}

	this.getJogadaPlayer = function(i){
		return this.jogadaPlayer[i];
	}

	this.setJogadaPlayer = function(x){
		this.jogadaPlayer.push(x);
	}

	this.jogadaPC = function(){
		return Math.floor((Math.random() * 3) + 1);;
	}

	this.getMatch = function() {
    	return this.match;
    }
    this.setMatch = function() {
    	this.match = this.match + 1;
    }

}

function getGenderButton(){
	var radios = document.getElementsByName("gender"); 
    for (var i = 0; i < radios.length; i++) { 
        if (radios[i].checked == true) {
        	return radios[i].value;
        }  
    }
}

function playGame(){
	var nome = document.getElementById('nomePlayer').value;
	var genero = getGenderButton();

	var x = allPlayers.length;

	if(x > 0){
		for(var i = 0; i < x; i++){
			if(allPlayers[i].getName() == nome){
				player.setMatch();
				computer.setMatch();
				player = allPlayers[i];
				computer = allComputers[i];
				allPlayers.splice(i, 1);
				allComputers.splice(i, 1);
			}else{
				player = new Jogador(nome, genero, "Pessoa");
				computer = new Jogador("Computer", "Masculino", "Computador");
				computer.setMatch();
				computer.setMatch();
			}
		}
	}
	else{
		player = new Jogador(nome, genero, "Pessoa");
		computer = new Jogador("Computer", "Masculino", "Computador");
		player.setMatch();
		computer.setMatch();
	}
	cleanResult();
	console.log(player);
}

function game(jogada){	
	//document.getElementById('initialScreen').style.display = "none";
	//document.getElementById('gameOn').style.display = "block";
	var table = document.getElementById('score');
	var row = table.insertRow(0);
	var cell1 = row.insertCell(0); 
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	player.setJogada(jogada);
	player.setJogadaPlayer(player.getJogadaPlayer());
	computer.setJogada(computer.jogadaPC());

	if(player.getJogada() == 1){
		if(computer.getJogada() == 1){
			player.setPoints(1);
			computer.setPoints(1);
			cell1.innerHTML = player.getPoints();
			cell2.innerHTML = computer.getPoints();
			cell3.innerHTML = "EMPATE";
			alert("EMPATE!");
		}
		else if (computer.getJogada() == 2){
			computer.setPoints(3);
			cell1.innerHTML = player.getPoints();
			cell2.innerHTML = computer.getPoints();
			cell3.innerHTML = "DERROTA";
			alert("DERROTA");
		}
		else if(computer.getJogada() == 3){
			player.setPoints(3);
			cell1.innerHTML = player.getPoints();
			cell2.innerHTML = computer.getPoints();
			cell3.innerHTML = "VITÓRIA";
			alert("VITÓRIA");
		}
	}
	else if(player.getJogada() == 2){
		if(computer.getJogada() == 1){			
			player.setPoints(3);
			cell1.innerHTML = player.getPoints();
			cell2.innerHTML = computer.getPoints();
			cell3.innerHTML = "VITÓRIA";
			alert("VITÓRIA");
		}
		else if(computer.getJogada() == 2){
			player.setPoints(1);
			computer.setPoints(1);
			cell1.innerHTML = player.getPoints();
			cell2.innerHTML = computer.getPoints();
			cell3.innerHTML = "EMPATE";
			alert("EMPATE");
		}
		else if(computer.getJogada() == 3){
			computer.setPoints(3);
			cell1.innerHTML = player.getPoints();
			cell2.innerHTML = computer.getPoints();
			cell3.innerHTML = "DERROTA";
			alert("DERROTA");
		}
	}
	else if(player.getJogada() == 3){
		if(computer.getJogada() == 1){
			computer.setPoints(3);
			cell1.innerHTML = player.getPoints();
			cell2.innerHTML = computer.getPoints();
			cell3.innerHTML = "DERROTA";
			alert("DERROTA");
		}
		else if(computer.getJogada() == 2){			
			player.setPoints(3);
			cell1.innerHTML = player.getPoints();
			cell2.innerHTML = computer.getPoints();
			cell3.innerHTML = "VITÓRIA";
			alert("VITÓRIA");
		}
		else if(computer.getJogada() == 3){			
			player.setPoints(1);
			computer.setPoints(1);
			cell1.innerHTML = player.getPoints();
			cell2.innerHTML = computer.getPoints();
			cell3.innerHTML = "EMPATE";
			alert("EMPATE");
		}
	}

	console.log(computer.jogada);
	console.log("player points: " + player.getPoints());
	console.log("computer points: " + computer.getPoints());

}

function endGame(){
	finalResult();
	var tableHeaderRowCount = 0;
	var table = document.getElementById('score');
	var rowCount = table.rows.length;
	for (var i = tableHeaderRowCount; i < rowCount-1; i++) {
    	table.deleteRow(tableHeaderRowCount);
	}

	allPlayers.push(player);
	allComputers.push(computer);
}

function finalResult(){
	document.getElementById('numberMatch').innerHTML = player.getMatch();

	if(player.getPoints() > computer.getPoints()){
		document.getElementById('matchResult').innerHTML = "You win!";
	}else{
		document.getElementById('matchResult').innerHTML = "You lose!";
	}
}

function cleanResult(){
	document.getElementById('numberMatch').innerHTML = "";
	document.getElementById('matchResult').innerHTML = "";
}