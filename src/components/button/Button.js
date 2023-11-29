import './Button.scss';

function Button(props) {
    const { label, inverseColor = false, onClick } = props;

    return (
        <div>
            <input className={!inverseColor ? 'button' : 'button-alternative'} type='button' value={ label } onClick={onClick} />
        </div>
    );
}

export default Button;