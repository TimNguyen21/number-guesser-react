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
    // 'settingsFormHasError': false,
    'gameIsSet': false
  };

  const [gameSettings, setGameSettings] = useState(defaultGameSettings);

  const updateCurrentGameSettingsProperty = (propertyName, value) => {
    setGameSettings(prevSettings => ({ ...prevSettings, [propertyName]: value }));
  }

  return (
    <div className="number-guesser">
      <section className="number-guesser__header">Number Guesser</section>
      <Settings 
        updateCurrentGameSettingsProperty={updateCurrentGameSettingsProperty}
        currentGameSettingsProperties={gameSettings}
        clearSettings={()=>{setGameSettings(defaultGameSettings)}}/>
      <section className="number-guesser__main">
        <section className="number-guesser__game-section" 
                //  hidden={!gameSettings['gameIsSet']}
                 >
          <Game gameData={gameSettings}
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
