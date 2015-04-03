var gameWindow = document.getElementById("game");
var playerState = "pen";
var puzzleTab = [];
initMenu();
var game = new Game(puzzleArray[0][1], 10, 0);


function changestate(input){
	if(input=="pen"){
		playerState = "pen";
		console.log(playerState);
		document.getElementById("pen").setAttribute("class", "toolButton active");
		document.getElementById("cross").setAttribute("class", "toolButton");
	}
	else if(input=="cross"){
		playerState = "cross";
		console.log(playerState);
		document.getElementById("cross").setAttribute("class", "toolButton  active");
		document.getElementById("pen").setAttribute("class", "toolButton");
	}
}

function caseClick(id){
	game.caseClick(id);
}

function changeLevel(level){
	document.getElementById("game").innerHTML = "";
	puzzleTab = [];
	game = new Game(puzzleArray[level][1], 10, level);
}

function initMenu(){
	for(i=0; i<puzzleArray.length; i++){
		var level = document.createElement('div');
		level.setAttribute("class", "level");
		level.setAttribute("id", "level"+i);
		level.setAttribute("onclick", "changeLevel("+i+")")
		level.innerHTML = puzzleArray[i][0];
		document.getElementById("levels").appendChild(level);
				
	}
}

function displayWin(puzzleId){
	console.log(puzzleId);
	curr = "level"+puzzleId;
	console.log(curr);
	currDOM = document.getElementById(curr);
	currDOM.innerHTML = "<img src='img/royalty13.png' alt='win'/> " + currDOM.innerHTML;
	
}