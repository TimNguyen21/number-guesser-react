import CustomInput from '../../components/custom-input/CustomInput';
import './Settings.scss';

function Settings(props) {
    const { name, label, inputType } = props;

    return (
        <section className="settings">
            <label className="settings__label">Game Settings:</label>
            <section className="settings__criteria">
                <section className="settings__section">
                    <label className="settings__section-label">Players Name</label>
                    <CustomInput name={'player-one'} label={'Player 1:'}/>
                    <CustomInput name={'player-two'} label={'Player 2:'}/>
                </section>
                <section className="settings__section">
                    <label className="settings__section-label">Minimum/Maximum Values</label>
                    <CustomInput name={'min-value'} label={'Minimum Value:'} inputType={'number'}/>
                    <CustomInput name={'max-value'} label={'Maximum Value:'} inputType={'number'}/>
                </section>
            </section>
            <section>buttons sections</section>
        </section>
    );
}

export default Settings;