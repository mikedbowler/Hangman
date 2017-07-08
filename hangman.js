var parts = 0;
var buttons = "";
var word = "Zipper";
var arr = word.split("");
var len = word.length-occurs(arr," ");
var numCorrect = 0;
var gameWon = false;
var c = document.getElementById("myCanvas");

//Displays the gallows
displayGallows();

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
    else if(!gameWon){
    	//Add a part to the man
    	parts++;
        drawBodyPart();

    	//Check to see if user lost the game
    	if(parts==6){
    		setTimeout(function() {alert("Game Over!\nThe correct word was "+word);},1);
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
            gameWon = true;
            setTimeout(function(){alert("Congratulations! You Won!");},1);
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

//Counts the number of occurences of a character in an array
function occurs(ar,ch){
    var count=0;
    for(var i=0;i<ar.length;i++){
        if(ar[i]==ch){
            count++;
        }
    }
return count;
}

//Reset the game and provide a new word to guess
function reset(){

    parts=0;
    numCorrect=0;
    gameWon = false;
    displayGallows();
    buttons="";
    document.getElementById("letters").innerHTML = "";
    displayButtons();
    document.getElementById("letters").innerHTML = buttons;
    word = "Bowling";
    arr = word.split("");
    len = word.length-occurs(arr," ");
    document.getElementById("blanks").innerHTML = "";
    text = "<table><tr>";
    for (i = 0; i < arr.length; i++) {
        if(arr[i]==" "){
            text += "<td class='h' id='box"+i+"'></td>";
        }
        else{
            text += "<td id='box"+i+"'></td>";
        }
    }
     document.getElementById("blanks").innerHTML = text;
}

//Display empty gallows with no man on it
function displayGallows(){
   
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,c.width,c.height);

    //Gallows base
    var base = c.getContext("2d");
    base.beginPath();
    base.moveTo(10,250);
    base.lineTo(110,250);
    base.stroke();
    base.closePath();
    //Gallows support
    var support = c.getContext("2d");
    support.beginPath();
    support.moveTo(60,250);
    support.lineTo(60,50);
    support.stroke();
    support.closePath();
    //Gallows beam
    var beam = c.getContext("2d");
    beam.beginPath();
    beam.moveTo(60,50);
    beam.lineTo(150,50);
    beam.stroke();
    beam.closePath();
    //Gallows bar
    var bar = c.getContext("2d");
    bar.beginPath();
    bar.moveTo(60,100);
    bar.lineTo(105,50);
    bar.stroke();
    bar.closePath();
    //Gallows noose
    var noose = c.getContext("2d");
    noose.beginPath();
    noose.moveTo(150,50);
    noose.lineTo(150,80);
    noose.stroke();
    noose.closePath();
}

//Draws the next body part 
function drawBodyPart(){

    switch(parts){
    
    case 1:
        var head = c.getContext("2d");
        head.beginPath();
        head.arc(150,100,20,0,2*Math.PI);
        head.stroke();
        head.closePath();
        break;
    case 2:
        var body = c.getContext("2d");
        body.beginPath();
        body.moveTo(150,120);
        body.lineTo(150,180);
        body.stroke();
        body.closePath();
        break;
    case 3:
        var leftLeg = c.getContext("2d");
        leftLeg.beginPath();
        leftLeg.moveTo(150,180);
        leftLeg.lineTo(130,220);
        leftLeg.stroke();
        leftLeg.closePath();
        break;
    case 4:
        var rightLeg = c.getContext("2d");
        rightLeg.beginPath();
        rightLeg.moveTo(150,180);
        rightLeg.lineTo(170,220);
        rightLeg.stroke();
        rightLeg.closePath();
        break;
    case 5:
        var leftArm = c.getContext("2d");
        leftArm.beginPath();
        leftArm.moveTo(150,150);
        leftArm.lineTo(120,140);
        leftArm.stroke();
        leftArm.closePath();
        break;
    case 6:
        var rightArm = c.getContext("2d");
        rightArm.beginPath();
        rightArm.moveTo(150,150);
        rightArm.lineTo(180,140);
        rightArm.stroke();
        rightArm.closePath();
        break;
    default:
        break;
    }

}

