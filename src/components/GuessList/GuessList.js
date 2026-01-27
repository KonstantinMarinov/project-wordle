import { checkGuess } from "../../game-helpers";
import { answer } from "../Game/Game";

export function GuessList({ guessList }) {
  const flippedGuessList = [...guessList].reverse();

  function getClasses(row, column) {
    if(flippedGuessList[row].text.length > 0) {
      const result = checkGuess(flippedGuessList[row].text, answer);
      return `cell ${result[column].status}`;
    }

    return "cell"
  }

  return (
    <>
      <div className="guess-results">
        {flippedGuessList.map((guess, index) => (
          <p key={guess.id} className="guess">
            <span className={getClasses(index, 0)}>
              {guess.text.length > 0 ? guess.text[0] : ""}
            </span>
            <span className={getClasses(index, 1)}>
              {guess.text.length > 0 ? guess.text[1] : ""}
            </span>
            <span className={getClasses(index, 2)}>
              {guess.text.length > 0 ? guess.text[2] : ""}
            </span>
            <span className={getClasses(index, 3)}>
              {guess.text.length > 0 ? guess.text[3] : ""}
            </span>
            <span className={getClasses(index, 4)}>
              {guess.text.length > 0 ? guess.text[4] : ""}
            </span>
          </p>
        ))}
      </div>
    </>
  );
}
