/// Add a card to a given deck with a front/back side with optional examples

/// If optional parameter is given with initial startup ex) 'node addCards.js newCards.csv'
/// Then cards will be added from that specified file, rather than manually in the command line
/// This will work for CSV and Excel files, so long as they have the following headers:
/// side1, side2, examples
/// Note: if there are any examples, delimit them with underscores

// Load modules
var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

// Set card deck
var cardFile = 'exampleDeck.json'

console.log("Welcome to Command Line Spaced Repetition (Add cards)!\n" +
    "Here you can add cards to your specified deck:\n" +
    "When prompted for the front side, type what should be displayed.\n" +
    "When asked for the back side, type what the answer should be.\n" + 
    "Examples for the card should be delimited by underscores.\n");


// Get input from user and add card to deck
rl.question("Front side: ", function (front) {
    rl.question("Back side: ", function (back) {
        rl.question("Examples (delimit with underscores): ", function (examples) {
            // Populate new card
            // TODO do error checking on front/back/examples
            let newCard = {};
            newCard["side1"] = front;
            newCard["side2"] = back;
            newCard["examples"] = examples.split("_");

            console.log(`\nFront side: "${front}"\nBack side: "${back}"\nExamples: "${examples}"\n`);

            updateDeck(newCard);
            rl.close();
        });
    });
});

function updateDeck(newCard) {
    console.log("Adding new card...");
    fs.readFile(cardFile, function (err, data) {

        if (err) throw err;
        cards = JSON.parse(data);

        // TODO check if front side already exists in cards

        // Adding new data to card deck object
        cards.push(newCard);

        // Write changes to card deck
        fs.writeFile(cardFile, JSON.stringify(cards), err => {

            // Checking for errors 
            if (err) throw err;

            console.log("Card added"); // Success 
        });
    });
};
