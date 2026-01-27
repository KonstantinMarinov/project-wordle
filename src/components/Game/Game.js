import React from "react";

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

  function createInitialState() {
    const initialState = [];

    for (let i = 0; i < NUM_OF_GUESSES_ALLOWED; i++) {
      console.log(i);
      initialState.push({ text: "", id: Math.random() });
    }

    return initialState;
  }

  return (
    <>
      <GuessList guessList={guessList}></GuessList>
      <GuessInput
        guessList={guessList}
        setGuessList={setGuessList}
      ></GuessInput>
    </>
  );
}

export default Game;
