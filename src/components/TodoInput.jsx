export default function TodoInput({ taskInput, setTaskInput, onAdd }) {
  function handleKeyDown(e) {
    if (e.key === "Enter") onAdd();
  }

  return (
    <div className="todo-input">
      <input
        type="text"
        id="task-input"
        placeholder="what do you need to do?"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button id="add-task" onClick={onAdd}>
        <i className="fa fa-plus"></i>
      </button>
    </div>
  );
}
