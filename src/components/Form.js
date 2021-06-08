import React from "react";
import DisplayPool from "./DisplayPool.js";

const Form = ({ pool, setPool }) => {
    const setPoolHandlerNormal = (e) => {
        let value = e.target.value;
        let length = pool.length;
        if (value > length) {
            console.log(value)
            setPool([...pool, { value: {value}, type: "normal", id: Math.random() * 100 }]);
        } else if(value <= length){
            console.log(value)
            setPool(pool.slice(0, value));
        }
    };
    const setPoolHandlerBeast = (e) => {
        let value = e.target.value;
        let length = pool.length;
        if (value > length) {
            console.log(value)
            setPool([...pool, { value: {value}, type: "beast", id: Math.random() * 100 }]);
        } else if(value <= length){
            console.log(value)
            setPool(pool.slice(0, value));
        }
    };
    return (
        <div>
            <h3>Pool de dados NORMALES</h3>
            <input type="number" onChange={setPoolHandlerNormal} min="1" max="10" placeholder="1" />
            <h3>Pool de dados DE BESTIA</h3>
            <input type="number" onChange={setPoolHandlerBeast} min="1" max="10" placeholder="1" />
            <DisplayPool pool={pool} />
        </div>
    )
}

export default Form;