import React from 'react'

const RewardCard = ({title, price, desc, remaining}) => {
    return (
        <div className="card">
            <strong className="title">{title}</strong>
            <p className="price">{`Pledge $${price} or more`}</p>
            <p className="desc">{desc}</p>
            <div className="remaining"><b>{remaining}</b><span>left</span> </div>
            <button className="select">Select Reward</button>
        </div>
    )
}

export default RewardCard
