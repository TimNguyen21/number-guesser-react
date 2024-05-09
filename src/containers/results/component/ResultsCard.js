import './ResultsCard.scss';

function ResultsCard(props) {
    const { playerOneName,
            hasPlayerOneWon,
            playerTwoName,
            hasPlayerTwoWon } = props;
    
    return (
        <div className='results-card'>
            <div>{playerOneName}</div>
            <div>{JSON.stringify(hasPlayerOneWon)}</div>
            <div>{playerTwoName}</div>
            <div>{JSON.stringify(hasPlayerTwoWon)}</div>
        </div>
    );
}

export default ResultsCard;
