import React from 'react'

const Button = ({text, classname, btnClick, disabled}) => {
    return (
        <button disabled={disabled} className={classname} onClick={btnClick}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    className: "",
    disabled: false,
};

export default Button
