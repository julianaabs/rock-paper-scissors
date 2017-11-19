function Jogador(name, gender, typePlayer){
	this.name = name;
	this.gender = gender;
	this.typePlayer = typePlayer;
	this.jogadaPlayer = 0;
	this.jogadaPC = 0;
	this.result = 0;
	this.points = 0;
	
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

	this.jogadaPC = function(){
		return Math.random() * (4-1) + 1;
	}

}

function getGenderButton(){
	var radios = document.getElementsByName("gender");
	for (var i = 0; i < radios.length; i++){
		if(radios[i].check == true){
			return radios[i].value;
		}
	}
}

function playGame(){
	var nome = document.getElementById('nomePlayer').value;
	var genero = getGenderButton();

	player = new Jogador(nome, genero, "Pessoa");

	console.log(player);
}