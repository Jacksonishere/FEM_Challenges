import React from 'react'

const Input = ({inputType, className}) => {
    return (
        <section className={`container ${className}`} >
            <p>{inputType}</p>
            <label>
                <input type="number" placeholder="0" min="0"/>
            </label>
        </section>
    )
}

export default Input
