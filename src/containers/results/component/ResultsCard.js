import './ResultsCard.scss';

function ResultsCard(props) {
    const { resultsID,
            playerOneName,
            hasPlayerOneWon,
            playerTwoName,
            hasPlayerTwoWon,
            removeResultsCard } = props;
    
    return (
        <div className='results-card'>
            <div id={resultsID} onClick={removeResultsCard}>x</div>
            <div>{resultsID}</div>
            <div>{playerOneName}</div>
            <div>{JSON.stringify(hasPlayerOneWon)}</div>
            <div>{playerTwoName}</div>
            <div>{JSON.stringify(hasPlayerTwoWon)}</div>
        </div>
    );
}

export default ResultsCard;
