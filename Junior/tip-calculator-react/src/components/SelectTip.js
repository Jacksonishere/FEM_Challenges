import React from 'react'
import Button from './Button'

const SelectTip = () => {
    return (
        <section className="container tip">
            <p>Select Tip %</p>
            <section className="select">
                <Button text="5%"/>
                <Button text="10%"/>
                <Button text="15%"/>
                <Button text="25%"/>
                <Button text="50%"/>
                <label><input type="number" placeholder="Custom"/></label>
                
            </section>
        </section>
    )
}

export default SelectTip
