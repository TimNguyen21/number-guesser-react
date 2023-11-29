import './CustomInput.scss';

function CustomInput(props) {
    const { name, label, inputType = 'text', getValue, currentValue } = props;

    return (
        <div className="custom-input">
            <label className="custom-input__label">
                { label }
            </label>
            <input 
                className="custom-input__input" 
                name={ name }
                type={ inputType }
                onChange={ getValue }
                value={ currentValue }/>
        </div>
    );
}

export default CustomInput;
