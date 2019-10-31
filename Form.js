import React from "react";

const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label for="name-input">Name</label>
      <input id="name-input" name="name-input" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
