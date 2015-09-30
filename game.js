var question1 = prompt('Are you a student at Code Fellows?');
if(question1 === 'yes') {
  alert('Correct! Nice job Alex, you are a student at Code Fellows.');
} else {
  alert('Incorrect Alex, you are a student at Code Fellows.');
}

var question2 = prompt('Were you born in the 80\'s?');
if(question2 === 'yes') {
  alert('Correct! Alex, your memory is in good condition.');
} else {
  alert('Incorrect Alex, you were born in 1988, the 80\'s!');
}

var question3 = prompt('Do you enjoy coding?');
if(question3 === 'yes') {
  alert('Correct! Yes Alex, you do enjoy coding!');
} else {
  alert('Incorrect Alex, I believe you enjoy coding...');
}


console.log('User response to question 1: ' + question1);
console.log('User response to question 2: ' + question2);
console.log('User response to question 3: ' + question3);

alert('Your answer to question 1 was ' + question1);
alert('Your answer to question 2 was ' + question2);
alert('Your answer to question 3 was ' + question3);
