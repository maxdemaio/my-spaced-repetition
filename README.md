Command Line Spaced Repetition
======

### Learn foreign languages with spaced repetition

<img src="./static/memo-graph.webp"  width=500>

Overview
------

This is a command line spaced repetition program written in Javascript using Node.js.

[Spaced repetition](http://en.wikipedia.org/wiki/Spaced_repetition) is a learning technique that incorporates increasing intervals of time between subsequent review of 
previously learned material in order to exploit the psychological spacing effect.
It is very useful for learning a new language or specific sets of information.

**Basically, information you know well is shown less often and information you don't know well is shown more often.**

The algorithm implemented in this app is the SM-2 algorithm used in the SuperMemo-2 software as well as the popular 
open source Anki software. The algorithm is described in detail here: https://www.supermemo.com/en/archives1990-2015/english/ol/sm2


To run
------

- Make sure you have [Node.js](http://nodejs.org) installed.
- Clone the repo and create your word list (see `cardsExample.json`)
- Navigate to `spaced.js` and change the language variable to "Example"
- On the command line run: 
    - `node spaced.js`


Add cards via the command line
------

- If you prefer to add cards via the command line rather than editting the raw JSON file you can run:
    - `node addCards.js`

Here you will be able to add new cards to a specified deck. You can also provide examples (delimited by underscores). Each example will be shown along with the answer in spaced repetition practice.


The Best Way to Learn a Foreign Language
------

The best way to learn a foreign language is described by Luca Lampariello in a [YouTube video](https://www.youtube.com/watch?v=SDLlhUv519k) dispelling there actually is no "best" way to learn one. Everyone is different, so there's no cookie cutter way to achieving foreign language success. Here I will provide cliff notes to his methodology, and how to use this program to help you learn a foreign language.

### Methodology
1. Unique to your circumstances
2. Enjoyable in a way that suits your interests
3. Flexible to different learning scenarios and environments
4. Enables you to learn every day
5. Built around comprehensible input
6. It should incorporate all 4 language skills
    - Reading
    - Writing
    - Listening
    - Speaking
7. It should grow and evolve according to your own experiences and desires

Using `my-spaced-repetition`, you can start compounding your vocabulary progression. As shown on the graph, the more you revisit a word the more likely you are to remember it. You can run this program from the command line anytime and anywhere, no Wi-Fi needed.

In my opinion, the best way to use this program is through steps 2, 5, and 6. While you are learning from content you enjoy, write down in the program vocabulary you would like to learn along with an example in the context in which you found it. This should really help solidify your language learning skills over time the more you practice.
