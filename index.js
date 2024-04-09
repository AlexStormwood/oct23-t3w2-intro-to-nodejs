require('dotenv').config();
// The above is equivalent to the next two lines:
// const dotenv = require('dotenv');
// dotenv.config();
const pokemonPrinterFile = require("./pokemonPrinter");


// import blahblah from 'dotenv';

console.log(process.env.ENVIRONMENT_MESSAGE)



console.log("Terminal app is running!");


pokemonPrinterFile.pokemonPrinter();

console.log("Bye bye, terminal app finished!");

