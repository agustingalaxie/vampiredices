import React from "react";
import DisplayPool from "./DisplayPool.js";

const Form = ({ pool, setPool }) => {
    const setPoolHandlerNormal = (e) => {
        const normalDicesPool = pool.filter((dice) => dice.type === "normal");
        const beastDicesPool = pool.filter((dice) => dice.type === "beast");
        let value = e.target.value;
        let length = normalDicesPool.length;
        if (value > length) {
            setPool([...pool, { type: "normal", id: Math.random() * 100 }]);
        } else if (value < length) {  //<--- ?????????????????????????????????????????????????????
            normalDicesPool.pop();
            const newPool = beastDicesPool.concat(normalDicesPool);
            setPool(newPool);
        }
    }
    const setPoolHandlerBeast = (e) => {
        const normalDicesPool = pool.filter((dice) => dice.type === "normal");
        const beastDicesPool = pool.filter((dice) => dice.type === "beast");
        let value = e.target.value;
        let length = beastDicesPool.length;
        if (value > length) {
            setPool([...pool, { type: "beast", id: Math.random() * 100 }]);
        } else if (value < length) {
            beastDicesPool.pop();
            const newPool = beastDicesPool.concat(normalDicesPool);
            setPool(newPool);
        };
    }
        return (
            <div>
                <h3>Pool de dados normales</h3>
                <input type="number" onChange={setPoolHandlerNormal} min="1" max="10" placeholder="0" />
                <h3>Dados de Bestia</h3>
                <input type="number" onChange={setPoolHandlerBeast} min="0" max="10" placeholder="0" />
                <DisplayPool pool={pool} />
            </div>
        )
    }

    export default Form;