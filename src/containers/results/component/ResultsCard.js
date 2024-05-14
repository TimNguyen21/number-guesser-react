import './ResultsCard.scss';

function ResultsCard(props) {
    const { resultsID,
            minValue,
            maxValue,
            winningValue,
            playerOneName,
            hasPlayerOneWon,
            playerTwoName,
            hasPlayerTwoWon,
            guessCount,
            removeResultsCard } = props;
    
    const confirmWinnerLabel = (playerHasWon) => {
       const resultsLabelClass = playerHasWon ? 'results-card__players-summary-results-winner-label' : 'results-card__players-summary-results-loser-label';
       const resultsText = playerHasWon ? 'Winner' : 'Loser';

       return (<div className={resultsLabelClass}>{resultsText}</div>);
    }

    return (
        <div className='results-card'>
            <div className='results-card__remove-icon' id={resultsID} onClick={removeResultsCard}>x</div>
            <section className='results-card__players-summary'>
                <div className='results-card__players-summary-results'>
                    <label>{playerOneName}</label>
                    {confirmWinnerLabel(hasPlayerOneWon)}
                </div>
                <label>vs.</label>
                <div className='results-card__players-summary-results'>
                    <label>{playerTwoName}</label>
                    {confirmWinnerLabel(hasPlayerTwoWon)}
                </div>
            </section>
            <section className='results-card__game-info'>
                <div className='results-card__game-info-number-range'>Number Range: {minValue} - {maxValue}</div>
                <div className='results-card__game-info-winning-number'>Winning Number: {winningValue}</div>
                <div className='results-card__game-info-guess-count'>Guess Count: {guessCount}</div>
            </section>
        </div>
    );
}

export default ResultsCard;
