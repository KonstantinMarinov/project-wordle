import React from "react";

export function GuessInput({ guessList, setGuessList }) {
  [guessValue, setGuessValue] = React.useState("");

  const isGuessValid = guessValue.length === 5 || guessValue.length === 0;

  function onChange(event) {
    const formattedGuess = event.target.value
      .toUpperCase()
      .replace(/[^A-Z]/g, "")
      .slice(0, 5);

    setGuessValue(formattedGuess);
  }

  function onSubmit(event) {
    event.preventDefault();
    setGuessValue("");
    const isGuessValid = event.target[0].value.length === 5;

    if (!isGuessValid) {
      return;
    }

    const newGuessList = [...guessList];
    newGuessList.push({ text: event.target[0].value, id: Math.random() });
    if (newGuessList.length > 6) {
      const slicedGuessList = newGuessList.slice(1, 7);
      setGuessList(slicedGuessList);
      return;
    }
    setGuessList(newGuessList);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={(event) => onSubmit(event)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guessValue}
        onChange={(event) => onChange(event)}
      />
      {!isGuessValid && (
        <p style={{ color: "red" }} className="validation-warning">
          Guess must be exactly 5 letters
        </p>
      )}
    </form>
  );
}
