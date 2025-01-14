# Wordle Game

This is a simple Wordle game built with React. The objective of the game is to guess a 5-letter target word within 6 attempts. The app provides feedback on each guess by changing the color of the tiles to indicate how close the guess was to the target word.

## How to Play

1. Guess the Wordle in 6 tries.
2. Each guess must be a valid 5-letter word.
3. Press the Enter key to submit your guess.
4. The color of the tiles will change to show how close your guess was to the target word:
   - Green: The letter is in the word and in the correct spot.
   - Yellow: The letter is in the word but in the wrong spot.
   - Gray: The letter is not in the word in any spot.
5. If you guess the correct word, a message "YOU WIN!" will be displayed.
6. If you use all 6 attempts without guessing the correct word, a message "Better luck next time!" will be displayed.
7. After the game ends, a reset button will appear to allow you to start a new game.

## Features

- 6x5 grid for six guesses.
- Keyboard input handling.
- Reset button to start a new game.

## How to Run

Clone the repo, then run:

```sh
npm i && npm run build && npm run dev
```
