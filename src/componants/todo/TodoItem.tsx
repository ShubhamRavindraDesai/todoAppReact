import React from "react";
import Todo from "../../models/Todo";
import "./todoItem.css"

const TodoItem: React.FC<{
  todo: Todo
  todoHandler: () => void
}> = ({ todo,  todoHandler }) => {
  return (
    <div className="item">
      <h2>{todo.work}</h2>
      <button id={todo.id} onClick={todoHandler}>
        &#10060;
      </button>
    </div>
  );
};

export default TodoItem;
