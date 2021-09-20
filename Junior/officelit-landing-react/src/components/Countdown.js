import React from 'react'

const Countdown = ({className}) => {
    return (
        <div className={`countdown ${className}`}>
            <h3 className="countdown-date">Coming <span>4 Nov 2020</span></h3>
            <div className="countdown-clock">
                <div className="days">
                    <p><strong>47</strong> days</p>
                </div>
                <div className="hours">
                    <p><strong>07</strong> hours</p>
                </div>
                <div className="min">
                    <p><strong>56</strong> min</p>
                </div>
                <div className="days">
                    <p><strong>14</strong> sec</p>
                </div>
            </div>
        </div>
    )
}

export default Countdown
