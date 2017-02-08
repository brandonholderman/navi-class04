  var userName = prompt('What\'s your name?');
  alert('Hello ' + userName + '. Thanks for coming to my site!');
  console.log(userName);
  // We want to ask the user a question,
  // take their answer as input; stored in a var
  // Validate that their answer matches my answer
  // Depending on true or false, provide feedback

  //Question 1
  function questionOne() {
  var gameTally = 0;
  var answerTwo = prompt('Do you want to play a game?');
  var userAnswer = ('yes');
  console.log(answerTwo);

  if (answerTwo.toLowerCase() === userAnswer) {
    alert('Great let\'s start!');
    gameTally++;
    console.log(gameTally)

  } else {
    alert('Well... Maybe next time');
  }

  //Question 2
  var answerOne = prompt('Where did I grow up?');
  var myAnswerOne = ('washington');
  console.log(answerOne);

  if (answerOne.toLowerCase() === myAnswerOne) {
    alert('Correct! I grew up in Washington');
    gameTally++;
    console.log(gameTally)

  } else {
    alert('Sorry, that\'s wrong. I grew up in Washington');
  }

  //Question 3
  var home = prompt('Do I live in Seattle?');
  var localAnswer = ('yes')
  console.log(home);

  if (home.toLowerCase() === localAnswer) {
    alert('You\'re right I\'m Seattleite!');
    gameTally++;
    console.log(gameTally)

  } else {
    alert('Wrong, I\'m from Seattle');
  }

  //Question 4
  var hobbies = prompt('What are one of my favorite hobbies?');
  var hobbyChoice = ['cars', 'snowboarding', 'video games', 'coding'];
  console.log(hobbies);

  if (hobbyChoice.indexOf(hobbies) !== -1) {
    alert('Wow how did you know that?!');
    gameTally++;
    console.log(gameTally)

  } else {
    alert('Not even close, BUD!');
  }
}
questionOne();

  //Question 5
  var food = prompt('What are my favorite types of food?'); // prompting the user with a string message.
  var foodTypes = ['pizza', 'tacos', 'burgers']; // creating an array and asigning it a value

  console.log('You\'re answer is ' + food); //console logging the users answer to the prompted question
  // console.log(foodTypes.indexOf(food)); //console logging where in the array the users answer is found or not found

  if (foodTypes.indexOf(food) !== -1) {
    alert('Correct! They\'re delicious!');
    gameTally++;
    console.log(gameTally)

  } else {
    alert('Disgusting...');
  }

  //Question 6
  var myLanguage = prompt('What coding language would I like to learn?');
  var languageTypes = ['javascript', 'swift', 'html/css'];
  console.log(myLanguage);

  if (languageTypes.indexOf(myLanguage) !== -1) {
    alert('Wunderbar!');
    gameTally++;
    console.log(gameTally)

  } else {
    alert('Not today');
  }

  //Question 7
  var myNumber = 7;
  var count = 1;

  while (count < 5) {
    count++;
    var userNumber = parseInt(prompt('What number am I thinking of 1-50'));
    console.log(userNumber);
    if (count === 5) {
      alert('Sorry out of chances.');

    } else if (userNumber === myNumber) {
      alert('You are correct sir');
      gameTally++;
      console.log(gameTally)
      break;

    } else if (userNumber < myNumber) {
      alert('Too Low Joe');

    } else if (userNumber > myNumber) {
      alert('Too High Guy');
    }
  }

  //Question 8
  var favConsole = ['ps4', 'xbox', 'nintendo', 'sega', 'atari'];
  var rejectAnswer = ('pc')
  var counter = 1;

  while (counter < 6) {
    counter++;
    var userFav = prompt('What is your favorite game console?');
    console.log(userFav);

    if (counter === 6) {
      alert('Out of turns');

    } else if (favConsole.indexOf(userFav) != -1) {
      alert('Congrats you\'re a true gamer!');
      gameTally++
      console.log(gameTally)
      break;

    } else if (userFav === rejectAnswer) {
      alert('That\'s not a console! game over...');
      break;

    } else {
      alert('Try Again...');
    }
  }


  //Total score tally
  function score(gameTally) {

    if (gameTally === 8) {
      alert('You got them all correct! ' + userName + '.');
    }
    if (gameTally === 7) {
      alert('You got 7 out of 8 ' + userName + '. Great job!');
    }
    if (gameTally === 6) {
      alert('You got 6 out of 8 ' + userName + '. Nice work.');
    }
    if (gameTally === 5) {
      alert('You got 5 out of 8 ' + userName + '. Not too shabby.');
    }
    if (gameTally === 4) {
      alert('You got 4 out of 8 ' + userName + '. Not terrible.');
    }
    if (gameTally === 3) {
      alert('You got 3 out of 8 ' + userName + '. Could do better.');
    }
    if (gameTally === 2) {
      alert('You got 2 out of 8 ' + userName + '. Not very good.');
    }
    if (gameTally === 1) {
      alert('You got 1 out of 8 ' + userName + '. Awful...');
    }
    if (gameTally === 0) {
      alert('You got them all wrong...');
    }
  }

score(gameTally);
console.log(gameTally);
