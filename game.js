var question1;
var question2;
var question3;
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var playerName = 'Alex';
var gameInfo = 0;

var answers = ['YES', 'Y', 'NO', 'N'];
var questions = ['Are you a student at Code Fellows?','Were you born in the 80\'s?','Do you enjoy coding?'];

function ques1() {
question1 = prompt(questions[0]);

  if (question1.toUpperCase() === answers[0] || question1.toUpperCase() === answers[1]) {
    gameInfo++;
    one1.innerHTML = 'Correct! Nice job ' + playerName +', you are a student at Code Fellows.';
    img1.innerHTML = '<img src="img/code-fellows-logo.png" width="200">';
  } else if (question1.toUpperCase() === answers[2] || question1.toUpperCase() === answers[3]) {
    one2.innerHTML = 'Incorrect ' + playerName + ', you are a student at Code Fellows.';
  }
}

function ques2() {
question2 = prompt(questions[1]);

  if (question2.toUpperCase() === answers[0] || question2.toUpperCase() === answers[1]) {
    gameInfo++;
    two1.innerHTML = 'Correct ' + playerName + ', your memory is in good condition.';
    img2.innerHTML = '<img src="img/1980.png" width="200">';
  } else if (question2.toUpperCase() === answers[2] || question2.toUpperCase() === answers[3]) {
    two2.innerHTML = 'Incorrect ' + playerName + ', you were born in 1988, the 80\'s!';
  }
}

function ques3() {
question3 = prompt(questions[2]);

  if (question3.toUpperCase() === answers[0] || question3.toUpperCase() === answers[1]) {
    gameInfo++;
    three1.innerHTML = 'Correct! Yes ' + playerName + ', you do enjoy coding!';
    img3.innerHTML = '<img src="img/javascript_logo.png" width="200">';
  } else if (question3.toUpperCase() === answers[2] || question3.toUpperCase() === answers[3
    ]) {
    three2.innerHTML = 'Incorrect ' + playerName + ', I believe you enjoy coding...';
  }
}

ques1();
ques2();
ques3();

alert('Your answer to question 1 was ' + question1.toUpperCase());
alert('Your answer to question 2 was ' + question2.toUpperCase());
alert('Your answer to question 3 was ' + question3.toUpperCase());

if (gameInfo > 0) {
  alert('Your scores are in ' + playerName + '... You got ' + gameInfo + ' out of 3 correct, thanks for playing!');
} else {
  alert('Your scores are in ' + playerName + '... You got ' + gameInfo + ' out of 3 correct. Game over!!!!!!!!!!!!!!!!!!!!!!!!... But Thanks for playing!');
}

console.log('User response to question 1: ' + question1.toUpperCase());
console.log('User response to question 2: ' + question2.toUpperCase());
console.log('User response to question 3: ' + question3.toUpperCase());

