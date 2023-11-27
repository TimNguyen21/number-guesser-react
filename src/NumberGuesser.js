import './NumberGuesser.scss';

function NumberGuesser() {
  return (
    <div className="number-guesser">
      <section className="number-guesser__header">Number Guesser</section>
      <section className="number-guesser__settings-section">
        Settings
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
