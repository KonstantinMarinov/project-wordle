export function GuessList({ guessList }) {
  return (
    <>
      <div className="guess-results">
        {guessList.map((guess) => (
          <p key={guess.id} className="guess">
            <span className="cell">{guess.text[0]}</span>
            <span className="cell">{guess.text[1]}</span>
            <span className="cell">{guess.text[2]}</span>
            <span className="cell">{guess.text[3]}</span>
            <span className="cell">{guess.text[4]}</span>
          </p>
        ))}
      </div>
    </>
  );
}
