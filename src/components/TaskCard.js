import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export default function TaskCard({ task, index, sections, setSections, column }) {
  const deleteTask = () => {
    if (window.confirm('Delete this task?')) {
      const newTasks = sections[column].filter(t => t.id !== task.id);
      setSections({ ...sections, [column]: newTasks });
    }
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="bg-gray-50 p-2 rounded shadow"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="flex justify-between">
            <span className="font-medium">{task.name}</span>
            <button onClick={deleteTask}>⋮</button>
          </div>
          <p>{task.description}</p>
          <p className="text-sm">Due: {task.dueDate}</p>
          <p className="text-sm">Assignee: {task.assignee}</p>
        </div>
      )}
    </Draggable>
  );
}