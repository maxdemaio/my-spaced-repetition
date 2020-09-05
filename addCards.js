/// Add a card to a given deck with a front/back side with optional examples
/// This allows users to store examples for each of their cards in a deck


// Load modules
var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

// Set card deck
language = "French"
var cardFile = 'cards' + language + '.json'

console.log(`Language: ${language}\n` +
    "Welcome to Command Line Spaced Repetition (Add cards)!\n" +
    "Here you can add cards to your specified deck:\n" +
    "When prompted for the front side, type what should be displayed.\n" +
    "When asked for the back side, type what the answer should be.\n" + 
    "Examples for the card should be delimited by underscores.\n");


function getUserInput() {
    rl.question("Front side: ", function (front) {
        rl.question("Back side: ", function (back) {
            rl.question("Examples (delimit with underscores): ", function (examples) {
                // Check if front or back is blank
                if (front === "" || back === "") {
                    console.log("Front/Back side cannot be blank");
                    process.exit(1);
                };

                // Populate new card
                let newCard = {};
                newCard["side1"] = front;
                newCard["side2"] = back;
                // Check if examples are blank, otherwise don't add attribute
                if (examples != "") {
                    newCard["examples"] = examples.split("_");
                };
                console.log(`\nFront side: "${front}"\nBack side: "${back}"\nExamples: "${examples}"\n`);

                updateDeck(newCard);
                rl.close();
            });
        });
    });
};


function updateDeck(newCard) {
    fs.readFile(cardFile, function (err, data) {

        if (err) throw err;
        cards = JSON.parse(data);

        // Check if front side already exists in cards
        for (var x = 0; x < cards.length; x++) {
            currentCard = cards[x];
            if (currentCard.side1.toLowerCase() === newCard.side1.toLowerCase()) {
                console.log("Side1 already exists in deck");
                process.exit(2);
            };
        };

        // Adding new data to card deck object
        cards.push(newCard);

        // Write changes to card deck and beautify
        console.log("Adding new card...");
        fs.writeFile(cardFile, JSON.stringify(cards, null, 2), err => {

            // Checking for errors
            if (err) throw err;

            console.log("Card added"); // Success 
        });
    });
};

// Start addCards program
getUserInput();
