// Export JSON to tab delimited text file

// Load modules
var fs = require('fs');
var readline = require('readline');

// Set language
var language = "italian"
var cardFile = "./cardDecks/" + language + ".json"

function exportDeck() {
    fs.readFile(cardFile, function (err, data) {

        if (err) throw err;
        cards = JSON.parse(data);
        
        // front/back side
        for (var x = 0; x < cards.length; x++) {
            currentCard = cards[x];
            console.log(currentCard)
            };
    });
};

// Start program
exportDeck();
