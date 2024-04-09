

function pokemonPrinter(){
	const pokemon = require('pokemon');

	let randomPokemon = pokemon.random();

	console.log(`Today's lucky Pokemon is ${randomPokemon}`);
}

module.exports = {
	pokemonPrinter
}