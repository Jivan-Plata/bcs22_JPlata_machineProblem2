let tries = 0;
let triesLeft = 10;
let running = true;

function getRandom(a){
	return Math.floor(Math.random()*a);
};

let chosenNumber = parseInt(getRandom (101));

alert("Guess the number game! You have 10 tries to guess the number between 1 - 100!")

do{
	triesLeft = triesLeft - 1
	tries = tries + 1;
	let userNumber = parseInt(prompt("The number is: " +chosenNumber +"Enter a number between 1 and 100: "));

	if(chosenNumber == userNumber){
		running = false;
		alert('Congratulations! You guessed the number in ' +tries + 'tries.')

	} else if (userNumber > chosenNumber){
		alert("Too high! Enter a new number. You have " +triesLeft + "tries left.")
	} else if (userNumber < chosenNumber){
		alert("Too low! Enter a new number. You have " +triesLeft + "tries left.")
	}

} while (running == true);


