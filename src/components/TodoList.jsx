export default function TodoList({ todos, onToggle, onDelete }) {
  const isEmpty = todos.length === 0;

  return (
    <div className="todos-container">
      <ul id="todos-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            <label className="checkbox-container">
              <input
                type="checkbox"
                className="todo-checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <span className="checkmark"></span>
            </label>
            <span className="todo-item-text">{todo.text}</span>
            <button className="delete-btn" onClick={() => onDelete(todo.id)}>
              <i className="fas fa-times"></i>
            </button>
          </li>
        ))}
      </ul>
      <div className={`empty-state ${isEmpty ? "" : "hidden"}`}>
        <i className="fas fa-clipboard-list"></i>
        <p>No tasks here yet</p>
      </div>
    </div>
  );
}
