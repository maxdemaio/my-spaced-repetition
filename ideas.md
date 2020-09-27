# Ideas 

- Overall
    - Perhaps access Duolingo API and get the words learned and just add them to the JSON?
        - https://www.duolingo.com/vocabulary/overview shows all the words for the last language you practiced
        - Note: for russian it doesn't use the cyrillic alphabet, just the roman version
        - Note: None of the words have accents in the roman examples

- Add Cards
    - Somehow import from sth like google sheets csv? just clear it out every time
    - Read from csv/excel if file provided in option command line arg 'node addCards.js exampleWithTerm.csv

- Spaced.js
    - For spaced.js, have an optional param to go over all decks at once. 
        - Just make a boolean flag set, and if it is true then loop over all files in the `cardDecks` folder.