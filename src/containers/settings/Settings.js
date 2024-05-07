import CustomInput from '../../components/custom-input/CustomInput';
import Button from '../../components/button/Button';
import './Settings.scss';

function Settings(props) {
    const { updateCurrentGameSettingsProperty, currentGameSettingsProperties, clearSettings } = props;

    const getWinningValue = () => {
        return Math.round(Math.random() * (currentGameSettingsProperties['maxValue'] - currentGameSettingsProperties['minValue'])
            + currentGameSettingsProperties['minValue']);
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
                </section>
            </section>
            <section className="settings__buttons-confirmation">
                <Button 
                    label={'Start Game'} 
                    onClick={
                        () => {
                            updateCurrentGameSettingsProperty('winningValue', getWinningValue());
                            updateCurrentGameSettingsProperty('gameIsSet', true);
                        }
                    }/>
                <Button 
                    label={'Clear Settings'} 
                    isInverseColor={true} 
                    onClick={clearSettings}/>
            </section>
        </section>
    );
}

export default Settings;