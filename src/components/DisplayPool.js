import React from "react";
import BlankDice from "./BlankDice"

const DisplayPool = ({ pool }) => {
    return (
        <div className="display-dice-container">
            <ul className="display-dice-ul">
            {pool.map((dice) => (
                    <BlankDice                        
                        type={dice.type} 
                        key={dice.id}
                    />
                ))}
            </ul>
        </div>
    )
};

export default DisplayPool;