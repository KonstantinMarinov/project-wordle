export function GuessList({ guessList }) {
  const flippedGuessList = [...guessList].reverse();
  return (
    <>
      <div className="guess-results">
        {flippedGuessList.map((guess) => (
          <p key={guess.id} className="guess">
            <span className="cell">
              {guess.text.length > 0 ? guess.text[0] : ""}
            </span>
            <span className="cell">
              {guess.text.length > 0 ? guess.text[1] : ""}
            </span>
            <span className="cell">
              {guess.text.length > 0 ? guess.text[2] : ""}
            </span>
            <span className="cell">
              {guess.text.length > 0 ? guess.text[3] : ""}
            </span>
            <span className="cell">
              {guess.text.length > 0 ? guess.text[4] : ""}
            </span>
          </p>
        ))}
      </div>
    </>
  );
}
