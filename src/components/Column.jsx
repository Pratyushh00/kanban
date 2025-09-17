import React from "react";
import TaskCard from "./TaskCard.jsx";
import { handleDrop, allowDrop } from "../utils/dragUtils.js";

export default function Column({ status, title, tasks, updateTask }) {
    return (
        <div
            className="column"
            onDragOver={allowDrop}
            onDrop={(e) => handleDrop(e, status, updateTask)}
        >
            <h2>{title}</h2>
            {tasks.map(task => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
}
