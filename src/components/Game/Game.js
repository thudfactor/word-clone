import React from 'react';
import GuessResults from './GuessResults';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GameResult from './GameResult';
import { checkGuess } from '../../game-helpers';


// Pick a random word on every pageload.
export const answer = sample(WORDS);

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function addGuess(guess) {
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
  }

  const parsedGuesses = guesses.map((guess) => {
    return checkGuess(guess, answer);
  });

  return (
    <>
      <GameResult guesses={parsedGuesses} answer={answer} addGuess={addGuess} />
      <GuessResults guessList={parsedGuesses} />
    </>
  );
}

export default Game;
