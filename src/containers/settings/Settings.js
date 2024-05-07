import { useState } from 'react';
import CustomInput from '../../components/custom-input/CustomInput';
import Button from '../../components/button/Button';
import './Settings.scss';

function Settings(props) {
    const { updateCurrentGameSettingsProperty, currentGameSettingsProperties, clearSettings } = props;

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

    const getWinningValue = () => {
        const minValue = Math.ceil(currentGameSettingsProperties['minValue']);
        const maxValue = Math.floor(currentGameSettingsProperties['maxValue']);
        const winningValue = Math.round(Math.random() * (maxValue - minValue + 1) + minValue);

        return winningValue;
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

            updateCurrentGameSettingsProperty('winningValue', getWinningValue());
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
                        currentValue={currentGameSettingsProperties['playerOne']}/>
                    <CustomInput 
                        name={'playerTwo'}
                        label={'Player 2:'}
                        getValue={(e) => {updateCurrentGameSettingsProperty(e.target.name, e.target.value)}}
                        currentValue={currentGameSettingsProperties['playerTwo']}/>
                </section>
                <section className="settings__section">
                    <label className="settings__section-label">Minimum/Maximum Values</label>
                    <CustomInput 
                        name={'minValue'}
                        label={'Minimum Value:'}
                        inputType={'number'}
                        getValue={(e) => {updateCurrentGameSettingsProperty(e.target.name, e.target.value)}}
                        currentValue={currentGameSettingsProperties['minValue']}/>
                    <CustomInput 
                        name={'maxValue'}
                        label={'Maximum Value:'}
                        inputType={'number'}
                        getValue={(e) => {updateCurrentGameSettingsProperty(e.target.name, e.target.value)}}
                        currentValue={currentGameSettingsProperties['maxValue']}/>
                    <label className='settings__label-error'>{setErrorMessageType()}</label>
                </section>
            </section>
            <section className="settings__buttons-confirmation">
                <Button 
                    label={'Start Game'} 
                    onClick={confirmGameSettings}/>
                <Button 
                    label={'Clear Settings'} 
                    isInverseColor={true} 
                    onClick={clearSettings}/>
            </section>
        </section>
    );
}

export default Settings;