import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <ul className="todo-list">
      {todo.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
