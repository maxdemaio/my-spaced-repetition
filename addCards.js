//// Add a card to a given deck with a front/back side

// Load modules
var fs = require('fs');
var readline = require('readline');

// Set card deck
var cardFile = 'exampleDeck.json'


console.log("Welcome to Command Line Spaced Repetition (Add cards)!\n" +
    "Here you can add cards to your specified deck:\n" +
    "When prompted for the front side, type what should be displayed.\n" +
    "When prompted for the back side, type what the answer should be.\n");

// Read card deck
fs.readFile(cardFile, function (err, data) {
    if (err) throw err;
    cards = JSON.parse(data);
    console.log(cards);
});

// Defining new card 
let newCard = {
    side1: "porte",
    side2: "(nf) door",
    examples: ["Ouvre la porte!", "Ferme la porte!"]
}; 