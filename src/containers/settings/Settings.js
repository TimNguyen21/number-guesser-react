import CustomInput from '../../components/custom-input/CustomInput';
import Button from '../../components/button/Button';
import './Settings.scss';

function Settings(props) {
    const { updateCurrentGameSettingsProperty, currentGameSettingsProperties, clearSettings } = props;

    return (
        <section className="settings">
            <label className="settings__label">Game Settings:</label>
            <section className="settings__criteria">
                <section className="settings__section">
                    <label className="settings__section-label">Players Name</label>
                    <CustomInput 
                        name={'playerOne'}
                        label={'Player 1:'}
                        getValue={updateCurrentGameSettingsProperty}
                        currentValue={currentGameSettingsProperties['playerOne']}/>
                    <CustomInput 
                        name={'playerTwo'}
                        label={'Player 2:'}
                        getValue={updateCurrentGameSettingsProperty}
                        currentValue={currentGameSettingsProperties['playerTwo']}/>
                </section>
                <section className="settings__section">
                    <label className="settings__section-label">Minimum/Maximum Values</label>
                    <CustomInput 
                        name={'minValue'}
                        label={'Minimum Value:'}
                        inputType={'number'}
                        getValue={updateCurrentGameSettingsProperty}
                        currentValue={currentGameSettingsProperties['minValue']}/>
                    <CustomInput 
                        name={'maxValue'}
                        label={'Maximum Value:'}
                        inputType={'number'}
                        getValue={updateCurrentGameSettingsProperty}
                        currentValue={currentGameSettingsProperties['maxValue']}/>
                </section>
            </section>
            <section className="settings__buttons-confirmation">
                <Button 
                    label={'Start Game'} 
                    onClick={() => {console.log('start game')}}/>
                <Button 
                    label={'Clear Settings'} 
                    isInverseColor={true} 
                    onClick={clearSettings}/>
            </section>
        </section>
    );
}

export default Settings;