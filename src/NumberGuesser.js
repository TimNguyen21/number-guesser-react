import { useState } from 'react';
import { generateRandomNumber } from './common_methods/Calculations';
import Settings from './containers/settings/Settings';
import Game from './containers/game/Game';
import './NumberGuesser.scss';

function NumberGuesser() {
  const defaultGameSettings = {
    'playerOne': '',
    'playerTwo': '',
    'minValue': '',
    'maxValue': '',
    'winningValue': null,
    // 'settingsFormHasError': false,
    'gameIsSet': false
  };

  const defaultPlayersNumberGuessData = {
    'playerOneCurrentNumber': '',
    'playerOnePreviousNumber': '',
    'playerTwoCurrentNumber': '',
    'playerTwoPreviousNumber':''
  };

  const [gameSettings, setGameSettings] = useState(defaultGameSettings);
  const [playersNumberGuessData, updatePlayersNumberGuess] = useState(defaultPlayersNumberGuessData);
  const [currentGameCount, setCurrentGameCount] = useState(0);
  const [isGameCompleted, confirmIsGameCompleted] = useState(false);
  // const [savedGameResults, setSavedGameResults] = useState([]);

  const updateCurrentGameSettingsProperty = (propertyName, value) => {
    setGameSettings(prevSettings => ({ ...prevSettings, [propertyName]: value }));
  }

  const updatePlayersNumberGuessData = (currentPlayerValueType, currentValue) => {
    updatePlayersNumberGuess(previousGuess => ({...previousGuess, [currentPlayerValueType]: currentValue}));
  }

  const restartNewGame = () => {
    const minValue = gameSettings['minValue'];
    const maxValue = gameSettings['maxValue'];

    updateCurrentGameSettingsProperty('winningValue', generateRandomNumber(minValue, maxValue));
    updatePlayersNumberGuess(defaultPlayersNumberGuessData);
  }

  const clearGameToDefault = () => {
    setGameSettings(defaultGameSettings); 
    updatePlayersNumberGuess(defaultPlayersNumberGuessData);
  }

  return (
    <div className="number-guesser">
      <section className="number-guesser__header">Number Guesser</section>
      <Settings 
        updateCurrentGameSettingsProperty={updateCurrentGameSettingsProperty}
        currentGameSettingsProperties={gameSettings}
        clearSettings={()=>{clearGameToDefault()}}/>
      <section className="number-guesser__main">
        <section className="number-guesser__game-section" 
                //  hidden={!gameSettings['gameIsSet']}
                 >
          <Game gameSettingsData={gameSettings}
                playersNumberGuessData={playersNumberGuessData}
                updatePlayersNumberGuessData={updatePlayersNumberGuessData}
                resetPlayerCardsToDefault={gameSettings['gameIsSet']}
                restartNewGame={()=>{restartNewGame()}}
                confirmIsGameCompleted={confirmIsGameCompleted}
                isGameCompleted={isGameCompleted}
                currentGameCount={setCurrentGameCount}/>
        </section>
        <section className="number-guesser__results-section">
          results section
        </section>
      </section>

      <br></br>
      <br></br>
      <br></br>
      {JSON.stringify(gameSettings)}
      {JSON.stringify(isGameCompleted)}
    </div>
  );
}

export default NumberGuesser;
