import { useState } from 'react';
import CustomInput from './components/custom-input/CustomInput';
import './NumberGuesser.scss';

function NumberGuesser() {
  const defaultGameSettings = {'player-one': '', 'player-two': '', 'min-value': null, 'max-value': null};

  const [gameSettings, setGameSettings] = useState(defaultGameSettings);
  const [gameIsSet, setGameIsSet] = useState(false);

  return (
    <div className="number-guesser">
      <section className="number-guesser__header">Number Guesser</section>
      <section className="number-guesser__settings">
        <section className="number-guesser__settings-section">
          <label className="number-guesser__settings-label">Players Name</label>
          <CustomInput name={'player-one'} label={'Player 1'} inputType={'text'} />
          <CustomInput name={'player-two'} label={'Player 2'} inputType={'text'} />
        </section>
      </section>
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
