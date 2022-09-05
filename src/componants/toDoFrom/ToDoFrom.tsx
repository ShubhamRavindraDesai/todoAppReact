import React, { useState } from "react";
import "./todoFrom.css";

const ToDoFrom = (props: any) => {
  const [value, setValue] = useState({});
  const handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined = (
    event
  ) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    const randomId = Math.random().toString();
    const obj = { work: value, id: randomId };
    props.saveTodo(obj);
    event.preventDefault();
  };

  return (
    <form className="from" onSubmit={handleSubmit}>
      <label>
        Todo:
        <input type="text" onChange={handleChange} />
      </label>
      <input type="submit" value="Add Todo" />
    </form>
  );
};

export default ToDoFrom;
