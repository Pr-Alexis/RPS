/*GAME*/
/*Game variables */
let gameScore=matchesWon=matchesLost=0;
let roundCounter=0;
let playerSelect;
let gameResult;
let nextRoundButton;


/*UTILITIES*/
/*Function to generate a rng for computer */
function rnGen(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCompuer(){
    let choice= rnGen(0,2);
    return choice;   
}

/*Hide/Show elements */
function hideElement(visibleElement){
    visibleElement.style.display="none";
}

function showElement(hiddenElement){
    hiddenElement.style.display="flex";
}

/*Translate a number into the equivalent choice 0->Rock 1->Paper 2->Scissors */
function translateToSymbol(choice){
    let itemChoice;
    switch(choice){
        case 0:
            itemChoice="rock";
        break;
        case 1:
            itemChoice="paper";
        break;
        case 2:
            itemChoice="scissors";
        break;
    }
    return itemChoice;
}


/*Translate a choice into the equivalent number 0->Rock 1->Paper 2->Scissors */
function translateToNumber(choice){
    let itemChoice;
    switch(choice){
        case "rock":
            itemChoice=0;
        break;
        case "paper":
            itemChoice=1;
        break;
        case "scissors":
            itemChoice=2;
        break;

    }
    return itemChoice;
}



/*Match funcion*/

function roundCalculator(playerChoice, computerChoice){

    
    if( (playerChoice+1)%3== computerChoice)
        return -1;
    else if( playerChoice==computerChoice)
        return 0;
    else 
        return 1;
}

function round(playerChoice){

    let playerScore= document.getElementById('playerScore');
    let computerScore= document.getElementById('computerScore');
    let roundResult= document.getElementById('roundResult');
    let computerChoice= generateCompuer();

    let roundCalc=roundCalculator(playerChoice,computerChoice);
    gameScore+= roundCalc;
    roundCounter++;

    if(roundCalc==-1){
        matchesLost++;
        computerScore.innerHTML="Computer score: "+matchesLost;
        roundResult.innerHTML='You chose: '+translateToSymbol(playerChoice)+". Computer chose: "+ translateToSymbol(computerChoice)+". You lost!";
    }
    else if(roundCalc==1){
        matchesWon++;
        playerScore.innerHTML="Player score: "+matchesWon;

        roundResult.innerHTML='You chose: '+translateToSymbol(playerChoice)+" Computer chose: "+ translateToSymbol(computerChoice)+". You won!";
    }
    else {

        roundResult.innerHTML='You chose: '+translateToSymbol(playerChoice)+" Computer chose: "+ translateToSymbol(computerChoice)+". It's a tie!";
    }
    

    hideElement(playerSelect);
    showElement(gameResult);

    if(roundCounter==5){
        setTimeout(()=>{
        if(gameScore<0) {
            alert("You lost! ");
        }
        else if(gameScore==0){
            alert('you tied ');
        }
        else{
            alert("Game won! ");
        }
        reset();
        }
    ,10);
    }   

}


function nextRound() {
    showElement(playerSelect);
    hideElement(gameResult);
}

document.addEventListener('DOMContentLoaded', (event) => {
    playerSelect = document.getElementById('playerSelect');
    gameResult = document.getElementById('gameResult');
    
    nextRoundButton = document.getElementById('nextRoundButton');
    nextRoundButton.addEventListener('click', nextRound);

});

/*Reset function */
function reset(){
    gameScore=matchesWon=matchesLost=0;
    roundCounter=0;
    computerScore.innerHTML="Computer score: 0";
    playerScore.innerHTML="Player score: 0";
    roundResult.innerHTML="";
}