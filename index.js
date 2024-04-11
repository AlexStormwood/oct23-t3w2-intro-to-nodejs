require('dotenv').config();
// The above is equivalent to the next two lines:
// const dotenv = require('dotenv');
// dotenv.config();
const pokemonPrinterFile = require("./pokemonPrinter");


// import blahblah from 'dotenv';



// Style 1 for setting up prompt-sync:
var prompt = require('prompt-sync')({sigint: true});

// Style 2 for setting up prompt-sync:
let promptPackage = require('prompt-sync');
let promptInstance = promptPackage({sigint: true});


//
// get input from the user.
//
// var n = prompt('What number of Pokemon do you want to see?');


let userWantsToExit = false;

do {

	let n = parseFloat(prompt("What number of Pokemon do you want to see?"));
	console.log("You entered " + n);

	let userInputToExit = prompt("Would you like to try again?");

	if (userInputToExit == "y"){
		userWantsToExit = false;
	} else {
		userWantsToExit = true;
	}

} while (userWantsToExit == false);




// console.log("User entered: " + n);
// console.log(typeof(n));

// let nAsNumber = parseFloat(n);
// console.log(typeof(nAsNumber));

















console.log(process.env.ENVIRONMENT_MESSAGE)



console.log("Terminal app is running!");


pokemonPrinterFile.pokemonPrinter();

console.log("Bye bye, terminal app finished!");

