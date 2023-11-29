import { useState } from 'react';
import PlayerCard from './component/player-card/PlayerCard';
import Button from '../../components/button/Button';
import './Game.scss';

function Game(props) {
    const { gameData } = props;

    const defaultPlayersNumberGuess = {
        'playerOneCurrentNumber': '', 
        'playerOnePreviousNumber':'', 
        'playerTwoCurrentNumber': '',
        'playerTwoPreviousNumber':''
    };

    const [playersNumberGuess, setPlayersNumberGuess] = useState(defaultPlayersNumberGuess);

    const setPlayerCurrentNumberGuess = (currentPlayer, currentValue) => {
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
                    getPlayerGuess={(e) => {setPlayerCurrentNumberGuess('playerOneCurrentNumber', e.target.value)}}/>
                <PlayerCard
                    playerName={gameData['playerTwo']}
                    playerPreviousGuess={playersNumberGuess['playerTwoPreviousNumber']}
                    getPlayerGuess={(e) => {setPlayerCurrentNumberGuess('playerTwoCurrentNumber', e.target.value)}}/>
            </section>
            <Button label={'Guess'} onClick={() => {console.log('guess')}}/>
            {/* {JSON.stringify(playersNumberGuess)} */}
        </div>
    );
}

export default Game;
