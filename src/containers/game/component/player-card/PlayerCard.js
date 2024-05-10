import './PlayerCard.scss';

function PlayerCard(props) {
    const { playerName, 
            getPlayerGuess, 
            playerPreviousGuess, 
            playerNumberGuessResultCode, 
            setValue = '', 
            errorCode = null } = props;

    const playerGuessSummary = (playerNumberGuessResultCode) => {
        switch (playerNumberGuessResultCode) {
            case 1:
                return 'Winner!';
            case 2:
                return 'Too Low! Guess Again.';
            case 3:
                return 'Too High! Guess Again.';
            default:
                return '';
        }
    }

    const summaryGuessColorClassName = (playerNumberGuessResultCode) => {
        const guessSummaryClassName = 'player-card__guess-summary';

        switch (playerNumberGuessResultCode) {
            case 1:
                return `${guessSummaryClassName} player-card__guess-summary-color--won`;
            case 2:
            case 3:
                return `${guessSummaryClassName} player-card__guess-summary-color--incorrect-guess`;
            default:
                return '';
        }
    }

    const errorMessage = (errorCode) => {
        switch (errorCode) {
            case 1:
                return 'Cannot have an empty input.  Please input a valid number.';
            case 2:
                return 'Current number guess is higher than the set max. Please guess again.';
            case 3:
                return 'Current number guess is lower than the set min. Please guess again.';
            default:
                return '';
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
                <input className="player-card__guess-input" 
                       type='number' 
                       onChange={getPlayerGuess}
                       value={setValue}/>
            </section>
            <div className={summaryGuessColorClassName(playerNumberGuessResultCode)}>
                {playerGuessSummary(playerNumberGuessResultCode)}
            </div>
            <div className='player-card__guess-error-message'>
                {errorCode ? errorMessage(errorCode) : ''}
            </div>
        </div>
    );
}

export default PlayerCard;
