let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepra = document.querySelector("#user-score");
const compScorepra = document.querySelector("#computer-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx];
};

const drawGame = () => {
  console.log("game was draw");
  msg.innerText = "game was draw. paly again";
  msg.style.backgroundColor = "black";
};
const showwiner = (userwin, userChoice, compChoice) => {
  if (userwin) {
    userScore++;
    userScorepra.innerText = userScore;
    msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorepra.innerText = compScore;
    msg.innerText = `you lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playgame = (userChoice) => {
  console.log("user choice =", userChoice);
  // genrate computre choice
  const compchoice = genCompChoice();
  console.log("compchoice=", compchoice);

  if (userChoice === compchoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      // paper,scissor
      userWin = compchoice == "paper" ? false : true;
    } else if (userChoice == "paper") {
      // rock,scissor
      userwin = compchoice == "scissor" ? false : true;
    } else {
      // rock paper
      userWin = compchoice == "rock" ? false : true;
    }
    showwiner(userWin, userChoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});
