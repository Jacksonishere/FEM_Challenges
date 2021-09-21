import React, {useContext, useEffect} from 'react';
import { CountdownContext } from '../context/CountdownContext';

const Countdown = ({className}) => {
    const {remaining} = useContext(CountdownContext);

    useEffect(() => {
    }, [remaining])

    return (
        <div className={`countdown ${className}`}>
            <h3 className="countdown-date">Coming <span>4 Nov 2020</span></h3>
            <div className="countdown-clock">
                <div className="days">
                    <p><strong>{remaining.days}</strong> days</p>
                </div>
                <div className="hours">
                    <p><strong>{remaining.hours}</strong> hours</p>
                </div>
                <div className="min">
                    <p><strong>{remaining.minutes}</strong> min</p>
                </div>
                <div className="days">
                    <p><strong>{remaining.seconds}</strong> sec</p>
                </div>
            </div>
        </div>
    )
}

export default Countdown
