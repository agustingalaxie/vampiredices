import React from 'react';
const img = "./images/50658-200.png"

const RollButton = ({pool}) => {
    return (
            <button type="button" className="button">
            <h1 className="button-text">Roll dices</h1>
            <img className="bite" src={img} alt="bite roll button" />
            </button>
    )
};

export default RollButton;