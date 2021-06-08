import React from "react";
const img = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages_k%2Fcross-silhouette-tattoo%2Fcross-silhouette-tattoo-6.png&f=1&nofb=1";

const BlankDice = ({ type }) => {
    return (
        <li className="blank-dice">
            <img className="blankDice" src={img} maxHeight={20} maxWidth={20}/>
        </li>
    )
};

export default BlankDice;