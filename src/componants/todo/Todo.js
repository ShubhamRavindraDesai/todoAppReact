import React from "react";

const Todo = ({ todo, Id, todoHandler }) => {
  const deletetodo = (e) => {
    todoHandler(e);
  };
  return (
    <div>
      <h2>{todo}</h2>
      <button id={Id} onClick={deletetodo}>
        &#10060;
      </button>
    </div>
  );
};

export default Todo;
