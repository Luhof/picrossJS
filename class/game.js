


function Game(puzzle, squareSize, puzzleId){


		this.puzzle = puzzle;
		this.squareSize = squareSize;
		this.createHelperRow();
		this.extractPuzzle();
		this.createHelpers();
		this.puzzleId = puzzleId;

		console.log(this.puzzleId);
	
		
		
		
}

	

	Game.prototype.createHelperRow = function(){
		//To display column headers, we create a supplementary row.
		//--this is a cheap fix before tweaking some display magic.
		var helperRow = document.createElement('div');
		helperRow.setAttribute("id", "headerRow");
		gameWindow.appendChild(helperRow);

		for(i=0; i<this.squareSize; i++){
			var helperColumn = document.createElement('div');
			helperColumn.setAttribute("id", "columnHelper"+i);
			helperColumn.setAttribute("class", "columnHelper");
			document.getElementById("headerRow").appendChild(helperColumn);
		}
	}

	Game.prototype.extractPuzzle = function(){
		// We extract content from puzzle.js in the DOM - and in an array


		for(i=0; i<this.squareSize; i++){
			var row = document.createElement('div');
			row.setAttribute("id", "row"+i);
			row.setAttribute("class", "row");
			gameWindow.appendChild(row);
			currentRow = document.getElementById('row'+i);




			//displaying row helpers
			var rowHelpers = document.createElement('div');
			rowHelpers.setAttribute("id", "rowHelper"+i);
			rowHelpers.setAttribute("class", "rowHelper");

			currentRow.appendChild(rowHelpers);





			for(j=0; j<this.squareSize; j++){

				var littleBox = document.createElement('div');
				littleBox.setAttribute("class", "case");
				var id = (j)+((i)*this.squareSize);
				littleBox.setAttribute("id", id);


				
				currentRow.appendChild(littleBox);

				puzzleTab.push(new Case(0, this.puzzle[i][j]));
				littleBox.setAttribute("onclick", "caseClick("+id+")");
			}
		}
	}





Game.prototype.caseClick = function (id){
	
	puzzleTab[id].caseClick(id);
}


Game.prototype.changeState = function(input){

	/*if(input=="pen"){
		playerState = "pen";
		console.log(playerState);
	}
	else if(input=="cross"){
		playerState = "cross";
		console.log(playerState);
	}*/

}

Game.prototype.createHelpers = function(){

	//rows

	var temp = 0;

	for(i=0; i<this.squareSize; i++){

		var rowHelpers = [];

		for(j=0; j<this.squareSize; j++){

			var id=j+(i*this.squareSize);
			
			if(puzzleTab[id].draw == 1){
				temp++;
			}
			else{
				if(temp>0) rowHelpers.push(temp);
				temp = 0;
			}
			
		}
		//checking last case
		if(temp>0) rowHelpers.push(temp);
		temp = 0;


		//console.log(i +"-"+ rowHelpers);
		//document.getElementById("rowHelper"+i).innerHTML=rowHelpers;

		for(k=0; k<rowHelpers.length; k++){
			rowHelpers[k] = "<span>"+rowHelpers[k]+"</span>";
			document.getElementById("rowHelper"+i).innerHTML+=rowHelpers[k];
		}
		if(rowHelpers.length==0) document.getElementById("rowHelper"+i).innerHTML = "<span>0</span>";
		}


	//columns

	var length = puzzleTab.length;

	for(i=0; i<this.squareSize; i++){

		var columnHelpers = [];
		for(j=0; j<this.squareSize; j++){

			var id= i+(this.squareSize*j);
			
			if(puzzleTab[id].draw == 1){
				temp++;
			}
			else{
				if(temp>0) columnHelpers.push(temp);
				temp = 0;
			}


		}
		//checking last case
		if(temp>0) columnHelpers.push(temp);
		temp = 0;
		

		//time to insert helpers

		for(k=0; k<columnHelpers.length; k++){
			columnHelpers[k] = "<span>"+columnHelpers[k]+"</span>";
			currDoc = document.getElementById("columnHelper"+i).innerHTML
			document.getElementById("columnHelper"+i).innerHTML+=columnHelpers[k];
			
		}
		if(columnHelpers.length==0) document.getElementById("columnHelper"+i).innerHTML = "<span>0</span>";
		

	}


}



Game.prototype.displayWin = function(){

displayWin(this.puzzleId);

}