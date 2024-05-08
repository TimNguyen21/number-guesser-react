import PlayerCard from './component/player-card/PlayerCard';
import Button from '../../components/button/Button';
import './Game.scss';

function Game(props) {
    const { gameSettingsData, playersNumberGuessData, updatePlayersNumberGuessData, resetPlayerCardsToDefault } = props;

    const savePlayersRecentNumberGuess = () => {
        updatePlayersNumberGuessData('playerOnePreviousNumber', playersNumberGuessData['playerOneCurrentNumber']);
        updatePlayersNumberGuessData('playerTwoPreviousNumber', playersNumberGuessData['playerTwoCurrentNumber']);
    }

    const getPlayerNumberGuessResultCode = (playerGuessValue) => {
        const winningGuessValue = gameSettingsData['winningValue'];
        const playerRecentGuessValue = parseInt(playerGuessValue);

        if (playerRecentGuessValue === winningGuessValue) {
            return 0;
        } 
        
        if (playerRecentGuessValue < winningGuessValue) {
            return 1;
        } 
        
        return 2;
    }

    return (
        <div className="game">
            <label>Guess Number Range:</label>
            <label>{gameSettingsData['minValue']} to {gameSettingsData['maxValue']}</label>
            <section className="game__players-section">
                <PlayerCard 
                    playerName={gameSettingsData['playerOne'] ? gameSettingsData['playerOne'] : 'Player #1'}
                    playerPreviousGuess={playersNumberGuessData['playerOnePreviousNumber'] ? playersNumberGuessData['playerOnePreviousNumber'] : '?'}
                    getPlayerGuess={(e) => {updatePlayersNumberGuessData('playerOneCurrentNumber', e.target.value)}}
                    playerNumberGuessResultCode={playersNumberGuessData['playerOnePreviousNumber'] ? 
                        getPlayerNumberGuessResultCode(playersNumberGuessData['playerOnePreviousNumber']) : ''}
                    setValue={!resetPlayerCardsToDefault ? '' : playersNumberGuessData['playerOneCurrentNumber']}/>
                <PlayerCard
                    playerName={gameSettingsData['playerTwo'] ? gameSettingsData['playerTwo'] : 'Player #2'}
                    playerPreviousGuess={playersNumberGuessData['playerTwoPreviousNumber']}
                    getPlayerGuess={(e) => {updatePlayersNumberGuessData('playerTwoCurrentNumber', e.target.value)}}
                    playerNumberGuessResultCode={playersNumberGuessData['playerTwoPreviousNumber'] ? 
                        getPlayerNumberGuessResultCode(playersNumberGuessData['playerTwoPreviousNumber']) : ''}
                    setValue={!resetPlayerCardsToDefault ? '' : playersNumberGuessData['playerTwoCurrentNumber']}/>
            </section>
            <Button label={'Guess'} 
                    onClick={savePlayersRecentNumberGuess}
                    disableButton={false}/>
            {JSON.stringify(playersNumberGuessData)}
        </div>
    );
}

export default Game;
