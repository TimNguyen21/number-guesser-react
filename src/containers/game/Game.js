import { useState, useEffect } from 'react';
import PlayerCard from './component/player-card/PlayerCard';
import Button from '../../components/button/Button';
import './Game.scss';

function Game(props) {
    const { gameData, resetPlayerCardsToDefault } = props;

    const defaultPlayersNumberStatus = {
        'playerOneCurrentNumber': '',
        'playerOnePreviousNumber': '',
        'playerTwoCurrentNumber': '',
        'playerTwoPreviousNumber':''
    };

    const [playersNumberGuess, setPlayersNumberGuess] = useState(defaultPlayersNumberStatus);

    const setPlayerCurrentNumberStatus = (currentPlayer, currentValue) => {
        setPlayersNumberGuess(previousGuess => ({...previousGuess, [currentPlayer]: currentValue}));
    }

    const savePlayersRecentNumberGuess = () => {
        setPlayerCurrentNumberStatus('playerOnePreviousNumber', playersNumberGuess['playerOneCurrentNumber']);
        setPlayerCurrentNumberStatus('playerTwoPreviousNumber', playersNumberGuess['playerTwoCurrentNumber']);
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

    useEffect(() => {
        setPlayersNumberGuess(defaultPlayersNumberStatus);
    }, [resetPlayerCardsToDefault]);

    return (
        <div className="game">
            <label>Guess Number Range:</label>
            <label>{gameData['minValue']} to {gameData['maxValue']}</label>
            <section className="game__players-section">
                <PlayerCard 
                    playerName={gameData['playerOne'] ? gameData['playerOne'] : 'Player #1'}
                    playerPreviousGuess={playersNumberGuess['playerOnePreviousNumber'] ? playersNumberGuess['playerOnePreviousNumber'] : '?'}
                    getPlayerGuess={(e) => {setPlayerCurrentNumberStatus('playerOneCurrentNumber', parseInt(e.target.value))}}
                    playerGuessResult={playersNumberGuess['playerOnePreviousNumber'] ? 
                        playerNumberGuessResult(playersNumberGuess['playerOnePreviousNumber'], gameData['winningValue']) : ''}
                    setValue={!resetPlayerCardsToDefault ? '' : playersNumberGuess['playerOneCurrentNumber']}/>
                <PlayerCard
                    playerName={gameData['playerTwo'] ? gameData['playerTwo'] : 'Player #2'}
                    playerPreviousGuess={playersNumberGuess['playerTwoPreviousNumber']}
                    getPlayerGuess={(e) => {setPlayerCurrentNumberStatus('playerTwoCurrentNumber', parseInt(e.target.value))}}
                    playerGuessResult={playersNumberGuess['playerTwoPreviousNumber'] ? 
                        playerNumberGuessResult(playersNumberGuess['playerTwoPreviousNumber'], gameData['winningValue']) : ''}
                    setValue={!resetPlayerCardsToDefault ? '' : playersNumberGuess['playerTwoCurrentNumber']}/>
            </section>
            <Button label={'Guess'} 
                    onClick={savePlayersRecentNumberGuess}
                    disableButton={false}/>
            {/* {JSON.stringify(playersNumberGuess)} */}
        </div>
    );
}

export default Game;
