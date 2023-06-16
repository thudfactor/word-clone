import React from 'react';

function GuessInput({ handleGuess, disabled }) {
  const [pendingGuess, setPendingGuess] = React.useState('');

  const onGuessChange = (event) => {
    const newValue = event.target.value.toUpperCase();
    setPendingGuess(newValue);
  }

  const onGuessSubmit = (event) => {
    event.preventDefault();
    handleGuess(pendingGuess);
    setPendingGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onGuessSubmit}>
      <label htmlFor="guess-input">Guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern="[A-Za-z]{5}"
        title="Your guess must have precisely five letters."
        onChange={(onGuessChange)}
        value={pendingGuess}
        type="text"
        id="guess-input" />
    </form>
  )
}

export default GuessInput;