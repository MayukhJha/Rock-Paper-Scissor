const choices=["rock","paper","scissor"];
const playerdisplay=document.getElementById("playerdisplay");
const computerdisplay=document.getElementById("computerdisplay");
const resultdisplay=document.getElementById("resultdisplay");
const playerscoredisplay=document.getElementById("playerscoredisplay");
const computerscoredisplay=document.getElementById("computerscoredisplay");
let playerscore=0;
let computerscore=0;

function playgame(playerchoice){
    const computerchoice=String(choices[Math.floor(Math.random()*3)]).toLowerCase();
    let result="";
    if(playerchoice===computerchoice){
        result="IT'S A TIE !";
    }
    else{
        switch(playerchoice){
            case "rock":
                result = (computerchoice==="scissor")?"YOU WIN !" : " YOU LOSE !";
                result = (computerchoice!=="paper")?"YOU WIN !" : " YOU LOSE !";
                break;
            case "paper":
                result = (computerchoice==="rock")?"YOU WIN !" : " YOU LOSE !";
                result = (computerchoice!=="scissor")?"YOU WIN !" : " YOU LOSE !";
                break;
            case "scissor":
                result = (computerchoice==="rock")?"YOU WIN !" : " YOU LOSE !";
                result = (computerchoice!=="paper")?"YOU WIN !" : " YOU LOSE !";
                break;
        }
    }
    resultdisplay.textContent=result;
    playerdisplay.textContent=` PLAYER :${playerchoice.toUpperCase()}`;
    computerdisplay.textContent=` COMPUTER : ${computerchoice.toUpperCase()}`;

    switch(result){
        case "YOU WIN !":
            resultdisplay.style.color="green";
            playerscore++;
            playerscoredisplay.textContent=playerscore;
            break;
        case " YOU LOSE !":
            resultdisplay.style.color="red";
            computerscore++;
            computerscoredisplay.textContent=computerscore;
            break;
        case "IT'S A TIE !":
            resultdisplay.style.color="white";
            break;
    }
}
