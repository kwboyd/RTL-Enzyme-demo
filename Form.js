import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name-input">Name: </label>
      <input
        id="name-input"
        name="name-input"
        onChange={handleChange}
        value={name}
      />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
