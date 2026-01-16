export function GuessInput() {

    return <form className="guess-input-wrapper" onSubmit={event => event.preventDefault()}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" type="text" />
    </form>
}