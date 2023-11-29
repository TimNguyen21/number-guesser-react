import './PlayerCard.scss';

function PlayerCard(props) {
    const { playerName, getPlayerGuess, playerPreviousGuess } = props;

    return (
        <div className='player-card'>
            <label className="player-card__name">
                {playerName ? playerName : 'Player #1'}
            </label>
            <div className="player-card__guess-number">
                {playerPreviousGuess ? playerPreviousGuess : '?'}
            </div>
            <section className="player-card__guess-input-section">
                <label>Guess A Number</label>
                <input className="player-card__guess-input" type='number' onChange={getPlayerGuess}/>
            </section>
            <div className="player-card__guess-summary">
                'guess summary'
            </div>
        </div>
    );
}

export default PlayerCard;
