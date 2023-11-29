import './Button.scss';

function Button(props) {
    const { label, isInverseColor = false, onClick } = props;

    return (
        <div>
            <input
                className={!isInverseColor ? 'button' : 'button-alternative'}
                type='button' value={ label }
                onClick={onClick}/>
        </div>
    );
}

export default Button;