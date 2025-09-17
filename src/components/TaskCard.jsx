import React from "react";

export default function TaskCard({ task }) {
    return (
        <div
            className="task-card"
            draggable
            onDragStart={(e) => e.dataTransfer.setData("text/plain", task.id)}
        >
            <h3>{task.title}</h3>
            <p>{task.desc}</p>
        </div>
    );
}
