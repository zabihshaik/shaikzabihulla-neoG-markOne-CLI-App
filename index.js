//markOne - Do you Know me CLI Quiz App for levelOne of neoGcamp

var readlineSync = require("readline-sync");
const chalk = require("chalk");
var score = 0;

//Input
console.log(chalk.blue("Welcome to the Quiz: DO YOU KNOW SHAIK ZABIHULLA \n"))
var userName = readlineSync.question("Please Enter your Name: ");
console.log("\n");

console.log("Welcome " + chalk.green.bold(userName.toUpperCase()) + " ! \n");

console.log("Play the Quiz of 5 Questions");
console.log("*************************** \n");

//play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("You are Right!"));
    score = score + 1;
    
  }
  else {
    console.log(chalk.red("You are Wrong!"));
    //score = score - 1;
   
  }
  console.log("Your current score is: " + score);
  console.log("------------");
}

//questions as objects
var questionOne = {
   question: "Which city do I belong to? ",
   answer: "Hyderabad"
  }
var questionTwo = {
   question: "Which University did I complete my M.Tech in CSE from? ",
   answer:"VIT"
  }
var questionThree = {
  question: "Who is my Favourite Cricketer? ",
  answer: "Sachin"
}
var questionFour = {
  question: "Who is my Favourite Tennis  Player? ",
  answer: "Federer"
}
var questionFive = {
  question: "Which Sport do I play other than Cricket? ",
  answer: "Badminton"
}
//array of questions
var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

//for loop to ask questions
for(var i=0 ; i<questions.length; i++) {
   play(questions[i].question, questions[i].answer);
}

console.log("Yay! Your Final Score is: " + score);

//data of high scores
var highScores = [{
  name: "Zabi",
  score: 5
}, { name: "Shaik", score: 4 }, { name: "Sankar", score: 4 }] 

// for loop to print high scores
for(var j=0; j< highScores.length ; j++) {
console.log("The high score is: " + chalk.cyan(highScores[j].score) + " scored by: " + chalk.yellow(highScores[j].name))
}

console.log(chalk.red.bold("If you have beaten the High Score, send the Screenshot to update in the list"));