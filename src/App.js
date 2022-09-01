import React from "react";
import "./App.css";
import Header from "./componants/header/Header";
import Todos from "./componants/todos/Todos";

function App() {
  return (
    <div className="App">
      <Header />
      <Todos />
    </div>
  );
}

export default App;
