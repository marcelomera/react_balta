import React from "react";
import { Todo } from "../models/Todo";

const TodoList = () => {
  const todos: Todo[] = [
    { id: 1, title: "Ir ao Mercado", done: false },
    { id: 2, title: "Ir a Academia", done: false },
  ];
  return (
    <table className="uk-table">
      <caption>Lista de Tarefas</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Tarefa</th>
          <th></th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default TodoList;