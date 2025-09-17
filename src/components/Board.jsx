import React from "react";
import Column from "./Column.jsx";

export default function Board({ tasks, updateTask }) {
    const columns = [
        { key: "todo", title: "To Do" },
        { key: "inprogress", title: "In Progress" },
        { key: "done", title: "Done" },
    ];

    return (
        <div className="board">
            {columns.map(col => (
                <Column
                    key={col.key}
                    status={col.key}
                    title={col.title}
                    tasks={tasks.filter(t => t.status === col.key)}
                    updateTask={updateTask}
                />
            ))}
        </div>
    );
}
