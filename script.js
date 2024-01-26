let userScore=0;
let compScore=0;
 const choices=document.querySelectorAll(".choice");
 const msg=document.querySelector("#msg");
 const userScorePara=document.querySelector("#user-score");
 const compScorePara=document.querySelector("#comp-score");

 const genComputerChoice=()=>{
    //rock paper scissors
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

 }
 const drawGame=()=>{
    console.log("Game is draw");
    msg.innerText="Game is Draw Play Again";
    msg.style.backgroundColor="rgb(22,22,66)";
 }
 const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You win !!");
        msg.innerText=`You WIn!!Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You lost");
        msg.innerText=`You Lose !! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }

 };
 const playGame=(userChoice)=>{
    console.log("user choice = ",userChoice);
    //Generate Computer Choice->modular
     const compChoice=genComputerChoice();
     console.log("Computer choice ",compChoice);
if(userChoice===compChoice)
{
    //Draw game
    drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
        //scissors,paper
        userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        //rock, scissors
       userWin= compChoice=="scissors"?false:true;

    }
    else{
        //rock,paper 
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}

 };
 choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
playGame(userChoice);
    });

 });