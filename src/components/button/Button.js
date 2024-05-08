import './Button.scss';

function Button(props) {
    const { label, 
            isInverseColor = false, 
            onClick, 
            disableButton = false, 
            isHidden = false } = props;

    return (
        <div>
            <input
                className={!isInverseColor ? 'button' : 'button-alternative'}
                type='button' value={label}
                onClick={onClick}
                disabled={disableButton} 
                hidden={isHidden}/>
        </div>
    );
}

export default Button;
