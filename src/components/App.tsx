import React from "react";
import NavBar from "./Navbar";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div className="uk-container">
      <NavBar></NavBar>
      <TodoList></TodoList>
      <h1>Meu primeiro App</h1>
    </div>
  );
};

export default App;

// () => {}; = Isso é uma função de Setar do java script
