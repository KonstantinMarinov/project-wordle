export function GuessList({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess) => (
        <p id={guess.id} className="guess">
          {guess.text}
        </p>
      ))}
    </div>
  );
}
