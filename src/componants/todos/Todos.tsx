import React, { useState } from "react";
import TodoItem from "../todo/TodoItem";
import ToDoFrom from "../toDoFrom/ToDoFrom";
import Todo from '../../models/Todo'


const Todos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const pushTodo = (obj: Todo) => {
    setTodos((prevArr) => {
      return [obj, ...prevArr];
    });
  };

  const removeTodo = (todoId: string) => {
    setTodos((prevArr) => {
      return prevArr.filter((el) => el.id !== todoId);
  
    });
  };

  const allTodos = todos.map((el) => {
    return (
      <TodoItem
        todo={el}
        key={Math.random().toString()}
        todoHandler={removeTodo.bind(null, el.id)}
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
