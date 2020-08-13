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

function addCard() {
    // TODO
    // Say how many cards are in {placeholder} deck
    getUserInput("Press Enter to Begin...", startStopQuiz);
}


function getUserInput(question, next, card) {
    var rl = readline.createInterface(process.stdin, process.stdout);
    rl.setPrompt(question);
    rl.prompt();
    rl.on('line', function (line) {
        rl.close();
        if (!card) {
            next(line);
        } else {
            next(line, card);
        }
    });
}