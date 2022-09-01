import React, { useState } from "react";
import Todo from "../todo/Todo";
import ToDoFrom from "../toDoFrom/ToDoFrom";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const pushTodo = (value) => {
    setTodos((prevArr) => {
      return [value, ...prevArr];
    });
  };

  const removeTodo = (e) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.filter((el) => el.id !== e.target.id);
      return newTodos;
    });
  };

  const allTodos = todos.map((el) => {
    return (
      <Todo
        todo={el.work}
        key={Math.random().toString()}
        Id={el.id}
        todoHandler={removeTodo}
      />
    );
  });

  return (
    <>
      <ToDoFrom saveTodo={pushTodo} />

      {todos && allTodos}
    </>
  );
};

export default Todos;
