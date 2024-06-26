import { useState } from 'react';
import { generateRandomNumber } from './common_methods/Calculations';
import Settings from './containers/settings/Settings';
import Game from './containers/game/Game';
import Results from './containers/results/Results';
import './NumberGuesser.scss';

function NumberGuesser() {
  const defaultGameSettings = {
    'playerOne': '',
    'playerTwo': '',
    'minValue': '',
    'maxValue': '',
    'winningValue': null,
    'gameIsSet': false
  };

  const defaultPlayersNumberGuessData = {
    'playerOneCurrentNumber': '',
    'playerOnePreviousNumber': '',
    'playerTwoCurrentNumber': '',
    'playerTwoPreviousNumber':'',
    'guessCount': 0
  };

  const [gameSettings, setGameSettings] = useState(defaultGameSettings);
  const [playersNumberGuessData, updatePlayersNumberGuess] = useState(defaultPlayersNumberGuessData);
  const [isGameCompleted, confirmIsGameCompleted] = useState(false);
  const [savedGameResults, setSavedGameResults] = useState([]);

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

  const registerCompletedGameResults = (winningPlayer) => {
    const gameSummaryData = { 
      'id': Date.now(),
      'minValue': gameSettings['minValue'],
      'maxValue': gameSettings['maxValue'],
      'winningValue': gameSettings['winningValue'],
      'guessCount': playersNumberGuessData['guessCount'],
      'playerOne': {'name': gameSettings['playerOne'] ? gameSettings['playerOne'] : 'Player #1', 
                    'winner': (winningPlayer === 'playerOne')
                   }, 
      'playerTwo': {'name': gameSettings['playerTwo'] ? gameSettings['playerTwo'] : 'Player #2', 
                    'winner': (winningPlayer === 'playerTwo')
                   }
    };

    const updatedGameResultsData = [...savedGameResults, gameSummaryData];
    const sortedGameResultsDataDecendingByID = updatedGameResultsData.sort((a, b) => { 
      return b.id - a.id;
    });

    setSavedGameResults(sortedGameResultsDataDecendingByID);
  }

  const removeResultsCard = (resultsID) => {
    const updatedGameResults = savedGameResults.filter(result => result['id'] !== parseInt(resultsID));

    setSavedGameResults([...updatedGameResults]);
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
                 hidden={!gameSettings['gameIsSet']}>
          <Game gameSettingsData={gameSettings}
                playersNumberGuessData={playersNumberGuessData}
                updatePlayersNumberGuessData={updatePlayersNumberGuessData}
                resetPlayerCardsToDefault={gameSettings['gameIsSet']}
                restartNewGame={()=>{restartNewGame()}}
                confirmIsGameCompleted={confirmIsGameCompleted}
                isGameCompleted={isGameCompleted}
                getCompletedGameResults={registerCompletedGameResults}/>
        </section>
        <section className="number-guesser__results-section">
          <Results resultsData={savedGameResults}
                   removeResultsCard={(e) => {removeResultsCard(e.target.id)}}/>
        </section>
      </section>
    </div>
  );
}

export default NumberGuesser;
