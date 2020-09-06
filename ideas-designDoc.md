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
    - vtr:  transitive verb
    - vf:   reflexive verb
    - prep: preposition

## Functionality

### `spaced.js`
- To be added

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