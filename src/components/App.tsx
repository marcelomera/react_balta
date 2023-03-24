import React from "react";
import { BrowserRouter as Switch, Route, Router } from "react-router-dom";
import TodoContext from "../contexts/TodoContext";
import AddTodo from "./AddTodo";
import NavBar from "./Navbar";
import TodoList from "./TodoList";

const App = () => {
  return (
    <TodoContext>
      <Router location={""} navigator={undefined}>
        <NavBar></NavBar>
        <br />
        <div className="uk-container">
          <Switch>
            <Route path="/create">
              <AddTodo></AddTodo>
            </Route>
            <Route path="/">
              <h4>Minha lista de Tarefas</h4>
              <TodoList></TodoList>
            </Route>
          </Switch>
        </div>
      </Router>
    </TodoContext>
  );
};

export default App;

// () => {}; = Isso é uma função de Setar do java script
