import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  function handleSubmit(e) {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="#f15025"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null}`}
          ></input>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} color={color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
