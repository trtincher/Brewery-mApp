import React, { useState } from "react";
import "./Form.css";

function Form({ setSearch }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    //console.log(e.target.value);
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //console.log('Form.js onSubmit Clicked');
    setSearch(input);
    setInput("");
  };

  return (
    <div className="Form">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="City,State,or Name"
          value={input}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
