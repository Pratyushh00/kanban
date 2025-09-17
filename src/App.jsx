import React, { useState } from "react";
import Board from "./components/Board.jsx";
import { v4 as uuid } from "uuid";
import useLocalStorage from "./hooks/useLocalStorage.js";

export default function App() {
  const [tasks, setTasks] = useLocalStorage("kanbanTasks", []);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setTasks([...tasks, { id: uuid(), title, desc, status: "todo" }]);
    setTitle("");
    setDesc("");
  };

  const updateTask = (id, newStatus) =>
    setTasks(tasks.map(t => (t.id === id ? { ...t, status: newStatus } : t)));

  return (
    <div className="app">
      <h1>Kanban Board</h1>
      <form className="task-form" onSubmit={addTask}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <Board tasks={tasks} updateTask={updateTask} />
    </div>
  );
}
