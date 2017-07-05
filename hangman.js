var parts = 0;
var buttons = "";
var word = "Zip per";
var arr = word.split("");
var len = word.length;
var numCorrect = 0;

//Initializes empty blanks to match the hidden word's length
var text = "<table><tr>";
for (i = 0; i < arr.length; i++) {
    if(arr[i]==" "){
         text += "<td class='h' id='box"+i+"'></td>";
    }
    else{
    text += "<td id='box"+i+"'></td>";
    }
}

text+="</tr></table>"
document.getElementById("blanks").innerHTML = text;

displayButtons();

//Display the letter buttons
document.getElementById("letters").innerHTML = buttons;

//Handles the event of a letter being chosen
function chooseLetter(b){
	b.style.color = "red";
    b.disabled = true;

    //Determines if the letter exists in the string
    if(word.indexOf(b.innerHTML) > -1 || word.indexOf(b.innerHTML.toLowerCase()) > -1){
    	addLetter(b.innerHTML);
    }
    else{
    	//Add a part to the man (when graphics are added)
    	parts++;

    	//Check to see if user lost the game
    	if(parts==6){
    		alert("Game Over!");
            reset();
    	}
    }
}

//Adds a letter to the display, handeling both upper/lower case
function addLetter(ch){
    for(j=0;j<arr.length;j++){
        if(ch==arr[j]){        
            document.getElementById("box"+j).innerHTML = ch;
            numCorrect++;
        }
        else if(ch.toLowerCase()==arr[j]){
            document.getElementById("box"+j).innerHTML = ch.toLowerCase();
            numCorrect++;
        }
    }
    if(numCorrect==len){
            alert("Congratulations! You Won!");
            reset();
        }
}

//Creates buttons
function displayButtons(){

    //Create buttons for letters A-Z
    for(i=0;i<26;i++){

        if(i==13){
            buttons+="</br>";
        }   

     buttons+="<button id='button"+i+"' onclick='chooseLetter(this)'>"+String.fromCharCode(i+65)+"</button>";
    }
}

//Reset the game and provide a new word to guess
function reset(){

    parts=0;
    numCorrect=0;
    buttons="";
    document.getElementById("letters").innerHTML = "";
    displayButtons();
    document.getElementById("letters").innerHTML = buttons;
    word = "Bowling";
    arr = word.split("");
    len = word.length;
    document.getElementById("blanks").innerHTML = "";
    text = "<table><tr>";
        if(arr[i]==" "){
            text += "<td class='h' id='box"+i+"'></td>";
        }
        else{
            text += "<td id='box"+i+"'></td>";
        }
     document.getElementById("blanks").innerHTML = text;
}


