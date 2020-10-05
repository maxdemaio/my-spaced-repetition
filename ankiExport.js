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
            var currentCard = cards[x];
            var front = currentCard.side1;
            var back = currentCard.side2;

            fs.appendFile(`${language}.txt`, front + "\t" + back + "\n", function (err) {
                if (err) throw err;
            });
        };   
    });
};

// Start program
exportDeck();
console.log('Exported!');
