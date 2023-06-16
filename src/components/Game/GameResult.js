import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from './GuessInput';

function gameStatus({guesses = []}) {
  const lastGuess = guesses[guesses.length - 1] || null;
  if (lastGuess?.every((cell) => cell.status === 'correct')) return "won";
  if (guesses.length >= NUM_OF_GUESSES_ALLOWED) return "lost";
  return "running";
};

function BannerBase({mood, children}) {
  return (
    <div className={`${mood} banner`}>
      {children}
    </div>
  )
}

function SadBanner({ answer }) {
  return (
    <BannerBase mood="sad">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </BannerBase>
  )
}

function HappyBanner({numGuesses}) {
  const guessStr = (numGuesses === 1) ? 'one guess' : `${numGuesses} guesses`;
  return (
    <BannerBase mood="happy">
      <strong>Congratulations!</strong> Got it in{' '}
      <strong>{guessStr}</strong>.
    </BannerBase>
  )
}

export default function GameResult({guesses, answer, addGuess}) {
  const status = gameStatus({guesses});
  if (status === "running") {
    return <GuessInput handleGuess={addGuess} />;
  } else if (status === "won") {
      return <HappyBanner numGuesses={guesses.length} />;
  }
  return <SadBanner answer={answer} />;
}