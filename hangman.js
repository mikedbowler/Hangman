var parts = 0;
var buttons = "";
var text = "zipper";
var arr = text.split("");
var len = text.length;
var numCorrect = 0;

//Create buttons for letters A-Z
for(i=0;i<26;i++){

	if(i==13){
	buttons+="</br>";
	}	

	buttons+="<button id='button"+i+"' onclick='chooseLetter(this)'>"+String.fromCharCode(i+65)+"</button>";
}

//Display the letter buttons
document.getElementById("letters").innerHTML = buttons;

//Handles the event of a letter being chosen
function chooseLetter(b){
	b.style.color = "red";
    b.disabled = true;

    //Determines if the letter exists in the string
    if(text.indexOf(b.innerHTML) > -1 || text.indexOf(b.innerHTML.toLowerCase()) > -1){
    	correct(b.innerHTML.toLowerCase());
    }
    else{
    	//Add a part to the man (when graphics are added)
    	parts++;

    	//Check to see if user lost the game
    	if(parts==6){
    		alert("Game Over!");
    	}
    }
}

function correct(ch){

	
}

