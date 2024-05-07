import './PlayerCard.scss';

function PlayerCard(props) {
    const { playerName, getPlayerGuess, playerPreviousGuess, playerGuessResult } = props;

    const playerGuessSummary = (playerGuessResult) => {
        if (playerGuessResult === 0) {
            return 'Winner!'
        } else if (playerGuessResult === 1) {
            return 'Too Low! Guess Again.'
        } else if (playerGuessResult === 2) {
            return 'Too High! Guess Again.'
        }
    }

    return (
        <div className='player-card'>
            <label className="player-card__name">
                {playerName}
            </label>
            <div className="player-card__guess-number">
                {playerPreviousGuess ? playerPreviousGuess : '?'}
            </div>
            <section className="player-card__guess-input-section">
                <label>Guess A Number</label>
                <input className="player-card__guess-input" type='number' onChange={getPlayerGuess}/>
            </section>
            <div className="player-card__guess-summary">
                {playerGuessSummary(playerGuessResult)}
            </div>
        </div>
    );
}

export default PlayerCard;
