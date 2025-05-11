import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';

export default function Column({ title, tasks, sections, setSections }) {
  const addTask = () => {
    const name = prompt('Task name');
    const description = prompt('Description');
    const dueDate = prompt('Due date');
    const assignee = prompt('Assignee');
    if (name) {
      const newTask = { id: Date.now().toString(), name, description, dueDate, assignee };
      setSections({ ...sections, [title]: [...tasks, newTask] });
    }
  };

  return (
    <div className="bg-white rounded p-2 w-64 flex-shrink-0">
      <h2 className="font-semibold mb-2">{title}</h2>
      <button className="text-blue-500 mb-2" onClick={addTask}>+ Add Task</button>
      <Droppable droppableId={title}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-2 min-h-[100px]">
            {tasks.map((task, index) => (
              <TaskCard
                key={task.id}
                task={task}
                index={index}
                sections={sections}
                setSections={setSections}
                column={title}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}