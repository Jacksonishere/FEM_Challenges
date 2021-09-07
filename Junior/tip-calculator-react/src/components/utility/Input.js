import React from 'react'

const Input = ({inputType, className, triggerEvent, value}) => {
    return (
        <section className={`${className}`} >
            <p>{inputType}</p>
            <label>
                <input type="number" placeholder="0" min="0" value={value} onChange={(e) => {
                    let currText= e.target.value;
                    if(currText === "0"){
                        e.target.value = "";
                        currText = NaN;
                    }
                    triggerEvent(parseFloat(currText));
                }}/>
            </label>
        </section>
    )
}

export default Input
