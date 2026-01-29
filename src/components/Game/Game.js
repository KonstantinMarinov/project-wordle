import React from "react";
import { useEffect } from "react";
import { checkGuess } from "../../game-helpers";
import { calculateNumberOfGuesses } from "../../game-helpers";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { GuessInput } from "../GuessInput";
import { GuessList } from "../GuessList";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  [guessList, setGuessList] = React.useState(() => createInitialState());
  [gameResult, setGameResult] = React.useState("ongoing");

  const numberOfGuesses = calculateNumberOfGuesses(guessList);

  function calculateGameResult() {
    console.log(guessList);
    if (guessList[5].text.length > 0) {
      const result = checkGuess(guessList[5].text, answer);
      const isGuessCorrect = result.every(
        (letter) => letter.status === "correct",
      );

      console.log(isGuessCorrect);

      if (isGuessCorrect) {
        return "win";
      }

      if (numberOfGuesses === 6) {
        return "lose";
      }
    }

    return undefined;
  }

  function createInitialState() {
    const initialState = [];

    for (let i = 0; i < NUM_OF_GUESSES_ALLOWED; i++) {
      console.log(i);
      initialState.push({ text: "", id: Math.random() });
    }

    return initialState;
  }

  useEffect(() => {
    const result = calculateGameResult();

    if (result && result !== gameResult) {
      setGameResult(result);
    }
  }, [guessList]);

  return (
    <>
      <GuessList
        guessList={guessList}
        setGameResult={setGameResult}
      ></GuessList>
      <GuessInput
        guessList={guessList}
        setGuessList={setGuessList}
        gameResult={gameResult}
      ></GuessInput>
      {gameResult === "win" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in {""}
            <strong>{numberOfGuesses} guesses</strong>.
          </p>
        </div>
      )}
      {gameResult === "lose" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
