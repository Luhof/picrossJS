function Case(state, draw){
  
  /*
  *		state 0 = nothing
  *		state 1 = ticked 
  *		state 2 = crossed
  */

  this.state = 0;
  this.draw = draw; // is there a block here ?

  if(this.draw==1){
  	  this.correct = false; //bool - if players input matches correct answer
  }

  else{
  	this.correct = true; //if there is nothing, it's correct by default
  }

}

Case.prototype.caseClick = function(id){
	

	//IF PLAYER IS PEN
	if(playerState=="pen"){

		if(this.state==0){
			this.state = 1;
			document.getElementById(id).style.backgroundColor = "#27ae60";
			if(this.draw==1){
				this.correct = true; // if there is a block it becomes true
			}
			else{
				this.correct = false;
			}
		}

		else if(this.state==1){
			this.state = 0;
			document.getElementById(id).style.backgroundColor = "#fff";
			if(this.correct){
				this.correct = false;
			}
		}

	}


	//IF PLAYER IS CROSS
	else if(playerState=="cross"){
		if(this.state==0){
			this.state = 2;
			document.getElementById(id).style.backgroundImage = "url('img/cross.png')";
		}

	else if(this.state==2){
			this.state = 0;
			document.getElementById(id).style.backgroundImage = "";
		}

	}

	console.log(this)

	/*if(this.draw==0){
		this.state = 2;
		document.getElementById(id).style.backgroundImage = "url('img/cross.png')";
	}
	else if(this.draw==1){
		this.state = 1;
		document.getElementById(id).style.backgroundColor = "#00f";
	}
	*/

	this.checkWin();
}

Case.prototype.checkWin = function(){
	for(i=0; i<puzzleTab.length; i++){

		
		if((!puzzleTab[i].correct)){
			console.log("une erreur");
			return false;
		}
		

	}

	game.displayWin();
}