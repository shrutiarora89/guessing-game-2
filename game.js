var question1 = prompt('Are you a student at Code Fellows?');
if(question1.toUpperCase() === 'Y' || question1.toUpperCase() === 'YES') {
  alert('Correct! Nice job Alex, you are a student at Code Fellows.');
} else if(question1.toUpperCase() === 'N' || question1.toUpperCase() === 'NO') {
  alert('Incorrect Alex, you are a student at Code Fellows.');
}

var question2 = prompt('Were you born in the 80\'s?');
if(question2.toUpperCase() === 'Y' || question1.toUpperCase() === 'YES') {
  alert('Correct! Alex, your memory is in good condition.');
} else if(question2.toUpperCase() === 'N' || question1.toUpperCase === 'NO') {
  alert('Incorrect Alex, you were born in 1988, the 80\'s!');
}

var question3 = prompt('Do you enjoy coding?');
if(question3.toUpperCase() === 'Y' || question1.toUpperCase() === 'YES') {
  alert('Correct! Yes Alex, you do enjoy coding!');
} else if(question3.toUpperCase() === 'N' || question1.toUpperCase() === 'NO') {
  alert('Incorrect Alex, I believe you enjoy coding...');
}

console.log('User response to question 1: ' + question1.toUpperCase());
console.log('User response to question 2: ' + question2.toUpperCase());
console.log('User response to question 3: ' + question3.toUpperCase());

alert('Your answer to question 1 was ' + question1.toUpperCase());
alert('Your answer to question 2 was ' + question2.toUpperCase());
alert('Your answer to question 3 was ' + question3.toUpperCase());
