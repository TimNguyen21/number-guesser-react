import { useState } from 'react';
import { generateRandomNumber } from '../../common_methods/Calculations';
import CustomInput from '../../components/custom-input/CustomInput';
import Button from '../../components/button/Button';
import './Settings.scss';

function Settings(props) {
    const { updateCurrentGameSettingsProperty, 
            currentGameSettingsProperties, 
            clearSettings } = props;

    const [errorType, setErrorType] = useState(null);

    const setErrorMessageType = () => {
        if (errorType === 0) {
            return '*Minimum and/or Maximum Value(s) fields cannot be empty. Please set values.';
        } else if (errorType === 1) {
            return '*Minimum Value cannot be bigger or equal to Max Value. Please check values.';
        } else {
            return '';
        }
    }

    const confirmGameSettings = () => {
        const currentMinValue = parseInt(currentGameSettingsProperties['minValue']);
        const currentMaxValue = parseInt(currentGameSettingsProperties['maxValue']);

        if (!currentGameSettingsProperties['minValue'] || !currentGameSettingsProperties['maxValue']) {
            setErrorType(0);
        } else if (currentMinValue >= currentMaxValue) {
            setErrorType(1);
        } else {
            setErrorType(null);

            updateCurrentGameSettingsProperty('winningValue', generateRandomNumber(currentMinValue, currentMaxValue));
            updateCurrentGameSettingsProperty('gameIsSet', true);
        }
    }

    return (
        <section className="settings">
            <label className="settings__label">Game Settings:</label>
            <section className="settings__criteria">
                <section className="settings__section">
                    <label className="settings__section-label">Players Name</label>
                    <CustomInput 
                        name={'playerOne'}
                        label={'Player 1:'}
                        getValue={(e) => {updateCurrentGameSettingsProperty(e.target.name, e.target.value)}}
                        currentValue={currentGameSettingsProperties['playerOne']}
                        disabledInput={currentGameSettingsProperties['gameIsSet']}/>
                    <CustomInput 
                        name={'playerTwo'}
                        label={'Player 2:'}
                        getValue={(e) => {updateCurrentGameSettingsProperty(e.target.name, e.target.value)}}
                        currentValue={currentGameSettingsProperties['playerTwo']}
                        disabledInput={currentGameSettingsProperties['gameIsSet']}/>
                </section>
                <section className="settings__section">
                    <label className="settings__section-label">Minimum/Maximum Values</label>
                    <CustomInput 
                        name={'minValue'}
                        label={'Minimum Value:'}
                        inputType={'number'}
                        getValue={(e) => {updateCurrentGameSettingsProperty(e.target.name, e.target.value)}}
                        currentValue={currentGameSettingsProperties['minValue']}
                        disabledInput={currentGameSettingsProperties['gameIsSet']}/>
                    <CustomInput 
                        name={'maxValue'}
                        label={'Maximum Value:'}
                        inputType={'number'}
                        getValue={(e) => {updateCurrentGameSettingsProperty(e.target.name, e.target.value)}}
                        currentValue={currentGameSettingsProperties['maxValue']}
                        disabledInput={currentGameSettingsProperties['gameIsSet']}/>
                    <label className='settings__label-error'>{setErrorMessageType()}</label>
                </section>
            </section>
            <section className="settings__buttons-confirmation">
                <Button 
                    label={'Start Game'} 
                    onClick={confirmGameSettings}
                    disableButton={currentGameSettingsProperties['gameIsSet']}/>
                <Button 
                    label={!currentGameSettingsProperties['gameIsSet'] ? 'Clear Settings' : 'Reset Game'} 
                    isInverseColor={true} 
                    onClick={clearSettings}/>
            </section>
        </section>
    );
}

export default Settings;