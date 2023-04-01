
import "./Button.cmp.scss";

const BUTTON_TYPE = {
    primary: "btn-primary",
    inverted: "btn-inverted"
}

const Button = ({buttonType, ...otherProps}) => {

    return (
        <button className={`btn ${BUTTON_TYPE[buttonType]}`} {...otherProps}></button>
    )
}

export default Button;