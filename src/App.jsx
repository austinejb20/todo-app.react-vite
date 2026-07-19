import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import Filters from "./components/Filters";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [taskInput, setTaskInput] = useState("");

  useEffect(() => {
    loadTodos();
    setDate();
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(text) {
    if (text.trim() === "") return;

    const todo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos((prev) => [...prev, todo]);
    setTaskInput("");
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function clearCompleted() {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  }

  function filterTodos(filter) {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }

  function setActiveFilter(filter) {
    setCurrentFilter(filter);
  }

  function loadTodos() {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) setTodos(JSON.parse(storedTodos));
  }

  function setDate() {
    const options = { weekday: "long", month: "short", day: "numeric" };
    const today = new Date();
    const dateElement = document.getElementById("date");
    if (dateElement) {
      dateElement.textContent = today.toLocaleDateString("en-US", options);
    }
  }

  const filteredTodos = filterTodos(currentFilter);
  const uncompletedTodos = todos.filter((todo) => !todo.completed);
  const itemsLeftText = `${uncompletedTodos.length} item${
    uncompletedTodos.length !== 1 ? "s" : ""
  } left`;

  return (
    <> 
      <div className="app">
        <Header />

        <TodoInput
          taskInput={taskInput}
          setTaskInput={setTaskInput}
          onAdd={() => addTodo(taskInput)}
        />

        <Filters
          currentFilter={currentFilter}
          setActiveFilter={setActiveFilter}
        />

        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />

        <Footer
          itemsLeft={itemsLeftText}
          onClearCompleted={clearCompleted}
        />
      </div>
    </>
  );
}

