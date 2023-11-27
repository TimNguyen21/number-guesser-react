import './CustomInput.scss';

function CustomInput(props) {
    const { name, label, inputType } = props;

    return (
        <div className="custom-input">
            <label className="custom-input__label">
                { label }
            </label>
            <input className="custom-input__input" name={ name } type={ inputType } />
        </div>
    );
}

export default CustomInput;