import { useState } from 'react';
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
    // 'gameCompleted': false,
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
  // const [savedGameResults, setSavedGameResults] = useState([]);

  const updateCurrentGameSettingsProperty = (propertyName, value) => {
    setGameSettings(prevSettings => ({ ...prevSettings, [propertyName]: value }));
  }

  const updatePlayersNumberGuessData = (currentPlayerValueType, currentValue) => {
    updatePlayersNumberGuess(previousGuess => ({...previousGuess, [currentPlayerValueType]: currentValue}));
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
                resetPlayerCardsToDefault={gameSettings['gameIsSet']}/>
        </section>
        <section className="number-guesser__results-section">
          results section
        </section>
      </section>

      <br></br>
      <br></br>
      <br></br>
      {JSON.stringify(gameSettings)}
    </div>
  );
}

export default NumberGuesser;
