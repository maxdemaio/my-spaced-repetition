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
    - vfi:  reflexive intransitive verb
    - prep: preposition
    - loc:  locution

---
## `spaced.js`
- Global variables
    - `cardFile` - String for the name of the current card file
    - `quizTimer` - Integer that represents the amount of milliseconds before the answer is shown
    - `today` - Date object for today's date
    - `prevDate` - Date of card creation (first time studied) and does not change
    - `cards` - Array of card objects
    - `nextDate` - The next date the flash card is to be reviewed
    - `cardCount` - Integer that is incremented in order to grab current card from array

- Algorithm
    - **repetitions**: this is the number of times a user sees a flashcard. 0 means they haven't studied it yet, 1 means it is their first time, and so on. It is also referred to as `n` in some of the documentation.
    - **grade**: also known as quality of assessment. This is how difficult (as defined by the user) a flashcard is. The scale is from 0 to 5.
    - **easiness**: this is also referred to as the easiness factor or EFactor or EF. It is multiplier used to increase the "space" in spaced repetition. The range is from 1.3 to infinity (The easier it is, the harder [longer intervals] it gets, so it's self balancing).
    - **interval**: this is the length of time (in days) between repetitions. It is the "space" of spaced repetition.
    - **nextPractice**: This is the date/time of when the flashcard comes due to review again.

---
## `addCards.js`
- Prompt user for side1, if already exists it cannot be added.
- Prompt user for side2 and any examples. The examples (string delimited by underscores) will be split and the list will be appended to the respective object in the specified JSON file.