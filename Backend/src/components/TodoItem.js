import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const TodoItem = () => {
  return (
    <li
      className={`todo-item ${todo.done ? "done" : ""}`}
    >
      <span
        onClick={() => toggleComplete(todo)}
        style={{
          textDecoration: todo.done ? "todo" : "none",
          cursor: "pointer",
        }}
      >
      </span>
      <div className="todo-actions">
        <button className="btn btn-primary" onClick={() => {}}>
          <FaEdit />
        </button>
        <button
          className="btn btn-danger"
          onClick={() => deleteTodo(todo)}
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
