import React, { useState } from "react";
import './App.css';
import Form from "./components/Form.js";

function App() {
  const [pool, setPool] = useState([]);
  return (
    <div className="App">
      <Form setPool={setPool} pool={pool} />
    </div>
  );
}

export default App;
