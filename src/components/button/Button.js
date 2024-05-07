import './Button.scss';

function Button(props) {
    const { label, isInverseColor = false, onClick, disableButton = false } = props;

    return (
        <div>
            <input
                className={!isInverseColor ? 'button' : 'button-alternative'}
                type='button' value={ label }
                onClick={onClick}
                disabled={disableButton}/>
        </div>
    );
}

export default Button;
