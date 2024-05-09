import './ResultsCard.scss';

function ResultsCard(props) {
    const { label } = props;
    
    return (
        <div className='results-card'>
            <label>{label}</label>
        </div>
    );
}

export default ResultsCard;
