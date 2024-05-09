import './Results.scss';
import './component/ResultsCard'
import ResultsCard from './component/ResultsCard';

function Results(props) {
    const { resultsData } = props;

    const showResultsCards = () => {
        return resultsData.map(result => {
            return <ResultsCard playerOneName={result['playerOne']['name']}
                                hasPlayerOneWon={result['playerOne']['winner']}
                                playerTwoName={result['playerTwo']['name']}
                                hasPlayerTwoWon={result['playerTwo']['winner']}/>
        })
    }

    return (
        <div className='results'>
            {showResultsCards()}
        </div>
    );
}

export default Results;
