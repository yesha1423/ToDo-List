import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import "./App.css"; 

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Edit Project Video", completed: true },
    { id: 2, text: "Upload Project Video", completed: true },
    { id: 3, text: "Record New Video", completed: false },
    { id: 4, text: "Thanks for Watching", completed: false },
  ]);

  const addTask = (text) => {
    setTasks([
      ...tasks,
      { id: Date.now(), text: text, completed: false },
    ]);
  };

  const toggleTask= (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-container">
      <h2 className="todo-header">
        ToDo List <span role="img" aria-label="notepad">NOTES</span>
      </h2>
      <AddTodo AddTodo={addTask} />
      <TodoList
        todos={tasks}
      />
    </div>
  );
};

export default App;
