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

    const errorMessage = (errorCode) => {
        switch (errorCode) {
            case 1:
                return 'input empty';
            case 2:
                return 'grater than max';
            case 3:
                return 'lower than min';
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
            <div className="player-card__guess-summary">
                {playerGuessSummary(playerNumberGuessResultCode)}
            </div>
            {errorCode ? errorMessage(errorCode) : ''}
        </div>
    );
}

export default PlayerCard;
