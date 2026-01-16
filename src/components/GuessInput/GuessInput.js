import React from 'react';

export function GuessInput() {
    [guessValue, setGuessValue] = React.useState('');

    function onSubmit(event) {
        event.preventDefault();
        console.log(event.target[0].value);
        setGuessValue('');
    }
    return (
        <form
            className="guess-input-wrapper"
            onSubmit={event => onSubmit(event)}
        >
            <label
                htmlFor="guess-input"
            >Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                value={guessValue}
                onChange={event => setGuessValue(event.target.value)}
            />
        </form>
    )
}