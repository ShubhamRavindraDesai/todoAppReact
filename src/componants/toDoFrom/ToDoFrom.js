import React, { useState } from "react";

const ToDoFrom = ({ saveTodo }) => {
  const [value, setValue] = useState({});
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    const id = Math.random().toString();
    const obj = { work: value, id: id };
    saveTodo(obj);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Todo:
        <input type="text" onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ToDoFrom;
