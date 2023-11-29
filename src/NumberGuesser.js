import { useState } from 'react';
import Settings from './containers/settings/Settings';
import './NumberGuesser.scss';

function NumberGuesser() {
  const defaultGameSettings = {
    'player-one': '',
    'player-two': '',
    'min-value': null,
    'max-value': null,
    'winning-value': null,
    'gameIsSet': false
  };

  const [gameSettings, setGameSettings] = useState(defaultGameSettings);

  const updateCurrentGameSettingsProperty = (propertyName, value) => {
    const updatedGameSettings = {...gameSettings, [propertyName]: value}

    setGameSettings(updatedGameSettings);
  }

  return (
    <div className="number-guesser">
      <section className="number-guesser__header">Number Guesser</section>
      <Settings updateCurrentGameSettingsProperty={(e) => {updateCurrentGameSettingsProperty(e.target.name, e.target.value)}}/>
      <section className="number-guesser__main">
        <section className="number-guesser__game-section">
          game section
        </section>
        <section className="number-guesser__results-section">
          results section
        </section>
      </section>
    </div>
  );
}

export default NumberGuesser;
