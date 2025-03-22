let userScore = 0;
let compScore = 0;
const msg=document.querySelector("#msg");
const userMsg=document.querySelector("#user-score");
const compMsg=document.querySelector("#comp-score");
let choices = document.querySelectorAll(".choice");
const showWinner = (userChoice, compChoice) => {
  if (userChoice === compChoice) {
    msg.textContent = `It's a Draw! 🤝 Both chose ${userChoice}`;
    document.body.style.background =
      "linear-gradient(135deg, #FFCB77, #FF6F61)"; 
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "scissors" && compChoice === "paper") ||
    (userChoice === "paper" && compChoice === "rock")
  ) {
    userScore++;
    userMsg.textContent = `${userScore}`;
    msg.textContent = `You Win! 🥳 ${userChoice} beats ${compChoice}`;
    document.body.style.background =
      "linear-gradient(135deg, #00FF7F, #32CD32)";

;
  } else {
    compScore++;
    compMsg.textContent = `${compScore}`;
    msg.textContent = `Computer Wins! 🤖 ${compChoice} beats ${userChoice}`;
    document.body.style.background =
      "linear-gradient(135deg, #FF6F61, #B71C1C)";
  }
};

const generateCompChoice=()=>{
 const options=["rock","paper","scissors"];
 // To get numbers from 0 to n then we multiply with n+1
 let idx=Math.floor(Math.random()*3); // Normally it generates between 0 to 1
 return options[idx];
}
const playGame=(userChoice)=>{

  const compChoice=generateCompChoice();
  showWinner(userChoice,compChoice);
  
  
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
  
    playGame(userChoice);
  });
});
