const readlinesync = require("readline-sync");
const chalk = require('chalk');

let playerScore = 0, min = 10;

console.log(chalk.whiteBright("THIS IS THE QUIZ WHICH TESTS HOW MUCH DO YOU KNOW ABOUT ME!!!"));
console.log(chalk.blueBright("***************************"));
console.log(chalk.blueBright("***************************"));
console.log(chalk.blueBright("***************************"));
console.log(chalk.blueBright("***************************"));
console.log(chalk.blueBright("***************************"));
console.log(chalk.blueBright("***************************"));
console.log(chalk.bold.magenta("Hi, Please enter your name, and we will begin the Game"));
var firstName = readlinesync.question("Please enter your name:");
console.log(chalk.bold.green("Welcome " + firstName));
console.log(chalk.bold.magenta("Lets see how well do you know me!!"));
console.log(chalk.blueBright("***************************"));
console.log(chalk.blueBright("***************************"));
console.log(chalk.blueBright("***************************"));

const highScore = [
  {
    name: "Jason",
    score: 10
  },
  {
    name: "Mark",
    score: 9
  },
  {
    name: "Tyson",
    score: 7
  }
]

const questionArray = [
  {
    question: "What is my full name?",
    answer: "Surbhi Singh Chauhan"
  },
  {
    question: "What is my profession?",
    answer: "Software Engineer"
  },
  {
    question: "What is my favourite hobby?",
    answer: "Sketching"
  },
  {
    question: "What is my favourite holiday destination?",
    answer: "Bali"
  },
  {
    question: "Who do I idolize?",
    answer: "APJ Abdul Kalam"
  },
  {
    question: "What is the name of my hometown?",
    answer: "Bihar"
  },
  {
    question: "Where was I born?",
    answer: "Jharkhand"
  },
  {
    question: "Who is my favourite poet?",
    answer: "Rumi"
  },
  {
    question: "Which is my favourite cuisine?",
    answer: "Mughlai"
  },
  {
    question: "Which is my favourite season?",
    answer: "Winter"
  }
]

const playGame = (question, answer) => {
  let userResponse = readlinesync.question(question);

  if (answer.toLowerCase() == userResponse.toLowerCase()) {
    playerScore += 1;
    console.log(chalk.bold.bgGreenBright.blue("You are correct!!"));
    console.log(chalk.bold.bgYellow.magentaBright("Your score is " + playerScore));
    console.log(chalk.magentaBright("-------------------------------------------"));
    console.log(chalk.magentaBright("-------------------------------------------"));
    console.log(chalk.magentaBright("-------------------------------------------"));
  }

  else {
    console.log(chalk.bold.bgRed.blue("You are wrong!!"));
    console.log(chalk.bold.bgYellow.magentaBright("Do not Worry. Stay and Play ahead"));
    console.log(chalk.magentaBright("-------------------------------------------"));
    console.log(chalk.magentaBright("-------------------------------------------"));
    console.log(chalk.magentaBright("-------------------------------------------"));
  }
}


for (i = 0; i < questionArray.length; i++) {
  let q = questionArray[i];
  playGame(q.question, q.answer);
}

for(j=0;j<highScore.length;j++){
  if(highScore[i]<min){
    min=highScore[i];
  }
}

console.log(chalk.bold.bgMagentaBright.white("Your score is "+playerScore+"!!!"));
console.log(chalk.bold.magentaBright("Show Leaderboard:"));

for(i=0;i<highScore.length;i++){
  let player=highScore[i];
  if(player.score>=min){
      min=player.score;
  }
  console.log(chalk.bold.magenta(player.name));
  console.log(chalk.bold.magenta(player.score));
}

if(playerScore>=min){
  console.log(chalk.bold.bgGreenBright.blue("Well done!! Your score qualifies for the top 3 high scores"));
  console.log(chalk.bold.bgGreenBright.blue("Send the screenshot of you score, and it will be updated in the leaderboard"));
}
