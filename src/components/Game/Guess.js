import { range } from '../../utils';

function Cell({ letter = '', status ='' }) {
  return (
    <span className={`cell ${status}`}>{letter}</span>
  )
}

function Guess({ thisGuess }) {
  return (
    <p className="guess">
      {range(0,5).map(cnum => {
        return (thisGuess && thisGuess[cnum])
          ? <Cell key={cnum} {...thisGuess[cnum]} />
          : <Cell key={cnum} />
      })}
    </p>
  )
}

export default Guess;