import React from 'react'
import Button from './Button'

const TipAmount = () => {
    return (
        <section className="tip_amt">
            <p className="tip-person"><b>Tip Amount</b> <br />/ person</p>
            <p className="tip-per">$0.00</p>
            <p className="total-person"><b>Total</b> <br />/ person</p>
            <p className="total-per">$0.00</p>
            <Button text="RESET"/>
        </section >
    )
}

export default TipAmount
