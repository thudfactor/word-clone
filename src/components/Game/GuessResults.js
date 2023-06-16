import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from './Guess';
import { range } from '../../utils';

function GuessResults({guessList}) {
  return (
    <div className="guess-results">
      { range(0,NUM_OF_GUESSES_ALLOWED).map(rnum => {
        return <Guess key={rnum} thisGuess={guessList[rnum] || undefined} />
      })}
    </div>
  );
}

export default GuessResults;