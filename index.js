var readlineSync = require('readline-sync');

var score = 0;

var highScores = [
  {
    name: "Koushik",
    score: 5
  },
  {
    name: "Greeshma",
    score: 3
  }
]

var questionsList = [
  {
    question:"Is my age greater than 25?[yes/no]",
    answer:"no"
  },
  {
    question:"Where do I live?",
    answer:"Sironcha"
  },
  {
    question: "Who is my favorite superhero?",
    answer: "Batman"
  },
  {
    question: "Which is my favorite sad song?",
    answer: "Channa Meraya"
  },
  {
    question: "Which college did I graduate from?",
    answer: "COEP"
  }
]

//get user name
var userName = readlineSync.question("May I have your name?");

//greet the user
console.log("Welcome " + userName + " to DO YOU KNOW Koushik?");

//ex08: function to check the answer
function checkAnswer(question, anwser){
  var userAnswer = readlineSync.question(question);
  
  //assuming all answers are of type string
  if(userAnswer.toLowerCase()===anwser.toLowerCase()){
  score+=1;
  console.log(`You are right!
current score: ${score}
-------------`);
  }else{
  score-=1;
  console.log(`You are wrong!
current score: ${score}
-------------`);
  }
}

//quiz
questionsList.forEach((item)=>{
  checkAnswer(item.question, item.answer);
})

//final score
console.log("HURRAY!, Your FINAL SCORE is " + score);

//calculate the highest score
var maxScore = highScores[0].score;
highScores.forEach((item)=>{
  if(item.score>maxScore){
    maxScore = item.score;
  }
});

console.log("The highest score of this quiz is " + maxScore);