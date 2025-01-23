import React, { useState } from "react";

const AddTodo = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      AddTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        type="text"
        placeholder="Add your task"
        value={text}
        onChange={(e) => (e.target.value)}
      />
      <button type="submit">+</button>
    </form>
  );
};

export default AddTodo;
