import './Results.scss';
import './component/ResultsCard'
import ResultsCard from './component/ResultsCard';

function Results(props) {
    const { resultsData,
            removeResultsCard } = props;

    const showResultsCards = () => {
        if (resultsData.length === 0) {
            return 'Currently no game history';
        }

        return resultsData.map(result => {
            return <ResultsCard resultsID={result['id']}
                                key={result['id']}
                                minValue={result['minValue']}
                                maxValue={result['maxValue']}
                                winningValue={result['winningValue']}
                                playerOneName={result['playerOne']['name']}
                                hasPlayerOneWon={result['playerOne']['winner']}
                                playerTwoName={result['playerTwo']['name']}
                                hasPlayerTwoWon={result['playerTwo']['winner']}
                                guessCount={result['guessCount']}
                                removeResultsCard={removeResultsCard}/>
        })
    }

    return (
        <div className='results'>
            <label>Game History</label>
            <section className='results_cards'>
                {showResultsCards()}
            </section>
        </div>
    );
}

export default Results;
