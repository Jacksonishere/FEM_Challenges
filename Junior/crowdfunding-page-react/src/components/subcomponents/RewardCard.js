import React from 'react'
import { useContext } from 'react'
import { triggerContext } from '../../customHooks/triggerContext'

const RewardCard = ({title, price, desc, remaining}) => {
    const {toggleModal, setToggleModal} = useContext(triggerContext);

    return (
        <div className="card">
            <strong className="title">{title}</strong>
            <p className="price">{`Pledge $${price} or more`}</p>
            <p className="desc">{desc}</p>
            <div className="remaining"><b>{remaining}</b><span>left</span> </div>
            <button onClick={() => setToggleModal(true)} className="select">Select Reward</button>
        </div>
    )
}

export default RewardCard
