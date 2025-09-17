/** Allow dropping by preventing default behavior */
export function allowDrop(e) {
    e.preventDefault();
}

/** Handle card drop and update status */
export function handleDrop(e, newStatus, updateTask) {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    updateTask(id, newStatus);
}
