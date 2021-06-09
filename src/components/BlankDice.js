import React from "react";

const img = "./images/blank_dice_normal.png"
const img2 =  "./images/blank_dice_beast.png"

const BlankDice = ({ type }) => {
    return (
        <li className="blank-dice-li">
            <img className="blankDice" src={`${type ==="normal" ? img : img2}`} alt="blank dice"/>
        </li>
    )
};

export default BlankDice;