import './Results.scss';
import './component/ResultsCard'
import ResultsCard from './component/ResultsCard';

function Results(props) {
    const { resultsData } = props;

    const testdata = ['test1', 'test2'];

    return (
        <div className='results'>
            {testdata.map(data => {return <ResultsCard label={data}/>})}
        </div>
    );
}

export default Results;
