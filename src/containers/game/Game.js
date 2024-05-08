import { useState, useEffect } from 'react';
import PlayerCard from './component/player-card/PlayerCard';
import Button from '../../components/button/Button';
import './Game.scss';

function Game(props) {
    const { gameSettingsData, playersNumberGuessData, updatePlayersNumberGuessData, resetPlayerCardsToDefault, confirmIsGameCompleted, isGameCompleted } = props;

    const [playerErrorCode, setPlayerErrorCode] = useState({'playerOne': null, 'playerTwo': null});
    const [hasGuessingError, setHasGuessingError] = useState(false);

    const savePlayersRecentNumberGuess = () => {
        checkForGuessingErrors();

        if (!hasGuessingError) {
            updatePlayersNumberGuessData('playerOnePreviousNumber', playersNumberGuessData['playerOneCurrentNumber']);
            updatePlayersNumberGuessData('playerTwoPreviousNumber', playersNumberGuessData['playerTwoCurrentNumber']);
        }
    }

    const getPlayerNumberGuessResultCode = (playerGuessValue) => {
        const winningGuessValue = gameSettingsData['winningValue'];
        const playerRecentGuessValue = parseInt(playerGuessValue);

        // Player Guess Results Codes: 
        // [1]: Guess matches winning value
        // [2]: Guess is lower than winning value
        // [3]: Guess is higher than winning value

        if (playerRecentGuessValue === winningGuessValue) {
            return 1;
        } 
        
        if (playerRecentGuessValue < winningGuessValue) {
            return 2;
        } 
        
        return 3;
    }

    const checkForGuessingErrors = () => {
        const players = ['playerOne', 'playerTwo'];

        players.forEach(player => {
            const currentNumberKey = `${player}CurrentNumber`;
            const playerGuessValue = parseInt(playersNumberGuessData[currentNumberKey]);
            const gameMinValue = parseInt(gameSettingsData['minValue']);
            const gameMaxValue = parseInt(gameSettingsData['maxValue']);

            // Player Guess Error Codes: 
            // [1]: Empty input field
            // [2]: Guess is higher than the Max Value
            // [3]: Guess is lower than the Min Value

            if (!playersNumberGuessData[currentNumberKey]) {
                setPlayerErrorCode(prevSettings => ({ ...prevSettings, [player]: 1 }));
            } else if (playerGuessValue > gameMaxValue) {
                setPlayerErrorCode(prevSettings => ({ ...prevSettings, [player]: 2 }));
            } else if (playerGuessValue < gameMinValue) {
                setPlayerErrorCode(prevSettings => ({ ...prevSettings, [player]: 3 }));
            } else {
                setPlayerErrorCode(prevSettings => ({ ...prevSettings, [player]: null }));
            }
        });
    }

    useEffect(() => {
        const confirmGuessSubmission = () => {
        
            if (!playerErrorCode['playerOne'] && !playerErrorCode['playerTwo']) {
                setHasGuessingError(false);
            } else {
                setHasGuessingError(true);
            }
        }
    
        confirmGuessSubmission();
    }, [playerErrorCode]);

    useEffect(() => {
        const checkForWinningGuess = () => {
            const winningValue = parseInt(gameSettingsData['winningValue']);
            const playerOneValue = parseInt(playersNumberGuessData['playerOnePreviousNumber']);
            const playerTwoValue = parseInt(playersNumberGuessData['playerTwoPreviousNumber']);
    
            confirmIsGameCompleted((playerOneValue === winningValue) || (playerTwoValue === winningValue));
        }

        checkForWinningGuess();
    }, [playersNumberGuessData]);

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
                    setValue={!resetPlayerCardsToDefault ? '' : playersNumberGuessData['playerOneCurrentNumber']}
                    errorCode={playerErrorCode['playerOne']}/>
                <PlayerCard
                    playerName={gameSettingsData['playerTwo'] ? gameSettingsData['playerTwo'] : 'Player #2'}
                    playerPreviousGuess={playersNumberGuessData['playerTwoPreviousNumber']}
                    getPlayerGuess={(e) => {updatePlayersNumberGuessData('playerTwoCurrentNumber', e.target.value)}}
                    playerNumberGuessResultCode={playersNumberGuessData['playerTwoPreviousNumber'] ? 
                        getPlayerNumberGuessResultCode(playersNumberGuessData['playerTwoPreviousNumber']) : ''}
                    setValue={!resetPlayerCardsToDefault ? '' : playersNumberGuessData['playerTwoCurrentNumber']}
                    errorCode={playerErrorCode['playerTwo']}/>
            </section>
            <Button label={'Guess'} 
                    onClick={savePlayersRecentNumberGuess}
                    disableButton={isGameCompleted}/>
            {JSON.stringify(playersNumberGuessData)}
            {JSON.stringify(playerErrorCode)}
            {JSON.stringify(hasGuessingError)}
        </div>
    );
}

export default Game;
