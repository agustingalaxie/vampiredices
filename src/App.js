import React, { useState } from "react";
import './App.css';
import Form from "./components/Form.js";
import RollButton from "./components/RollButton.js";

function App() {
  const [pool, setPool] = useState([]);
  return (
    <div className="App">
      <Form setPool={setPool} pool={pool} />
      <RollButton pool={pool}/>
    </div>
  );
}

export default App;
