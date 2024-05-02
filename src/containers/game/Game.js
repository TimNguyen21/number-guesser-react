import { useState } from 'react';
import PlayerCard from './component/player-card/PlayerCard';
import Button from '../../components/button/Button';
import './Game.scss';

function Game(props) {
    const { gameData } = props;

    const defaultPlayersNumberStatus = {
        'playerOneCurrentNumber': '', 
        'playerOnePreviousNumber':'', 
        'playerTwoCurrentNumber': '',
        'playerTwoPreviousNumber':''
    };

    const [playersNumberGuess, setPlayersNumberGuess] = useState(defaultPlayersNumberStatus);

    const setPlayerCurrentNumberStatus = (currentPlayer, currentValue) => {
        setPlayersNumberGuess(previousGuess => ({...previousGuess, [currentPlayer]: currentValue}));
    }

    return (
        <div className="game">
            {/* {gameData['minValue']}
            {gameData['maxValue']} */}
            <section className="game__players-section">
                <PlayerCard 
                    playerName={gameData['playerOne']}
                    playerPreviousGuess={playersNumberGuess['playerOnePreviousNumber']}
                    getPlayerGuess={(e) => {setPlayerCurrentNumberStatus('playerOneCurrentNumber', e.target.value)}}/>
                <PlayerCard
                    playerName={gameData['playerTwo']}
                    playerPreviousGuess={playersNumberGuess['playerTwoPreviousNumber']}
                    getPlayerGuess={(e) => {setPlayerCurrentNumberStatus('playerTwoCurrentNumber', e.target.value)}}/>
            </section>
            <Button label={'Guess'} onClick={() => {
                    setPlayerCurrentNumberStatus('playerOnePreviousNumber', playersNumberGuess['playerOneCurrentNumber']);
                    setPlayerCurrentNumberStatus('playerTwoPreviousNumber', playersNumberGuess['playerTwoCurrentNumber']);
                }}/>
            {JSON.stringify(playersNumberGuess)}
        </div>
    );
}

export default Game;
