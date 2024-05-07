import { useState } from 'react';
import PlayerCard from './component/player-card/PlayerCard';
import Button from '../../components/button/Button';
import './Game.scss';

function Game(props) {
    const { gameData } = props;

    const defaultPlayersNumberStatus = {
        'playerOneCurrentNumber': null,
        'playerOnePreviousNumber': null,
        'playerTwoCurrentNumber': null,
        'playerTwoPreviousNumber':null
    };

    const [playersNumberGuess, setPlayersNumberGuess] = useState(defaultPlayersNumberStatus);

    const setPlayerCurrentNumberStatus = (currentPlayer, currentValue) => {
        setPlayersNumberGuess(previousGuess => ({...previousGuess, [currentPlayer]: currentValue}));
    }

    const playerNumberGuessResult = (playerGuessValue, winningValue) => {
        if (playerGuessValue === winningValue) {
            return 0;
        } else if (playerGuessValue < winningValue) {
            return 1;
        } else if (playerGuessValue > winningValue) {
            return 2;
        }
    }

    return (
        <div className="game">
            {/* {gameData['minValue']}
            {gameData['maxValue']} */}
            <section className="game__players-section">
                <PlayerCard 
                    playerName={gameData['playerOne'] ? gameData['playerOne'] : 'Player #1'}
                    playerPreviousGuess={playersNumberGuess['playerOnePreviousNumber'] ? playersNumberGuess['playerOnePreviousNumber'] : '?'}
                    getPlayerGuess={(e) => {setPlayerCurrentNumberStatus('playerOneCurrentNumber', parseInt(e.target.value))}}
                    playerGuessResult={playersNumberGuess['playerOnePreviousNumber'] ? 
                        playerNumberGuessResult(playersNumberGuess['playerOnePreviousNumber'], gameData['winningValue']) : ''}/>
                <PlayerCard
                    playerName={gameData['playerTwo'] ? gameData['playerTwo'] : 'Player #2'}
                    playerPreviousGuess={playersNumberGuess['playerTwoPreviousNumber']}
                    getPlayerGuess={(e) => {setPlayerCurrentNumberStatus('playerTwoCurrentNumber', parseInt(e.target.value))}}
                    playerGuessResult={playersNumberGuess['playerTwoPreviousNumber'] ? 
                        playerNumberGuessResult(playersNumberGuess['playerTwoPreviousNumber'], gameData['winningValue']) : ''}/>
            </section>
            <Button label={'Guess'} 
                    onClick={() => {
                        setPlayerCurrentNumberStatus('playerOnePreviousNumber', playersNumberGuess['playerOneCurrentNumber']);
                        setPlayerCurrentNumberStatus('playerTwoPreviousNumber', playersNumberGuess['playerTwoCurrentNumber']);
                    }}
                    disableButton={false}/>
            {JSON.stringify(playersNumberGuess)}
        </div>
    );
}

export default Game;
