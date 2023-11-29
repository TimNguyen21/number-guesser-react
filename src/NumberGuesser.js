import { useState } from 'react';
import Settings from './containers/settings/Settings';
import './NumberGuesser.scss';

function NumberGuesser() {
  const defaultGameSettings = {
    'playerOne': '',
    'playeTwo': '',
    'minValue': null,
    'maxValue': null,
    'winningValue': null,
    'settingsFormHasError': false,
    'gameIsSet': false
  };

  const [gameSettings, setGameSettings] = useState(defaultGameSettings);

  const updateCurrentGameSettingsProperty = (propertyName, value) => {
    setGameSettings(prevSettings => ({ ...prevSettings, [propertyName]: value }));
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
