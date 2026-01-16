import React from 'react';

export function GuessInput() {
    [guessValue, setGuessValue] = React.useState('');

    const isGuessValid =
        guessValue.length > 0 && guessValue.length < 5;

    function onChange(event) {
        const formattedGuess = event.target.value
            .toUpperCase()
            .replace(/[^A-Z]/g, '')
            .slice(0, 5);

        setGuessValue(formattedGuess);
    }

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
                onChange={event => onChange(event)}
            />
            {isGuessValid && (
                <p
                    style={{ color: 'red' }}
                    className="validation-warning"
                >
                    Guess must be exactly 5 letters
                </p>
            )}
        </form>
    )
}