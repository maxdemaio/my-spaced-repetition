# Design of Project

## Conventions
    - adv:  adverb
    - pron: pronoun
    - adj:  adjective
    - noun: noun
    - nm:   masculine noun
    - nf:   feminine noun
    - nn:   neutral noun
    - conj: conjuction
    - phr:  phrase
    - det:  determiner
    - vi:   intransitive verb
    - vf:   reflexive verb
    - vtr:  transitive verb
    - vftr: reflexive transitive verb
    - vfi: reflexive intransitive verb
    - prep: preposition
    - loc:  locution

## Functionality (In process)

### `spaced.js`
- Global variables
    - `cardFile` - String for the name of the current card file
    - `quizList` - 
    - `quizTimer` - Integer that represents the amount of milliseconds before the answer is shown
    - `today` - 
    - `cards` - Array of card objects
    - `cardCount` - Integer that is incremented in order to grab current card from array

### `addCards.js`
- Prompt user for side1, if already exists it cannot be added.
- Prompt user for side2 and any examples. The examples (string delimited by underscores) will be split and the list will be appended to the respective object in the specified JSON file.


# Ideas 

- Perhaps access Duolingo API and get the words learned and just add them to the JSON?
    - https://www.duolingo.com/vocabulary/overview shows all the words for the last language you practiced
    - Note: for russian it doesn't use the cyrillic alphabet, just the roman version
    - Note: None of the words have accents in the roman examples

- Add Cards
    - Somehow import from sth like google sheets csv? just clear it out every time
    - Read from csv/excel if file provided in option command line arg 'node addCards.js exampleWithTerm.csv

- Fix count function (essentially it's the difference between count and cardcount)
    - why would they be different?
    - It is fine with cards w/o dates

    - Possible fixes
        - try old version and see if it counts
        - note old version works! (refactor not spaced)

- Add optional parameter to spaced.js and addCards.js where you can specify the deck at the command line so you don't have to open the program every time to change languages

- For spaced.js, have an optional param to go over all decks at once