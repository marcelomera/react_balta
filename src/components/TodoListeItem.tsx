import React from "react";

const TodoListItem = () => {
  return (
    <tr className="uk-animation-slide-bottom-medium">
      <td className="uk-width-auto">
        <label>
          <input className="uk-checkbox" type="checkbox" />
        </label>
      </td>
      <td className="uk-width-expand">Item</td>
      <td className="uk-width-auto">
        <button className="uk-icon-buttom uk-button-danger" uk-icon="trash">
          X
        </button>
      </td>
    </tr>
  );
};

export default TodoListItem;
