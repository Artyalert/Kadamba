import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';

export default function Board({ sections, setSections }) {
  const onDragEnd = result => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = sections[source.droppableId];
    const destCol = sections[destination.droppableId];
    const [moved] = sourceCol.splice(source.index, 1);
    destCol.splice(destination.index, 0, moved);

    setSections({
      ...sections,
      [source.droppableId]: sourceCol,
      [destination.droppableId]: destCol
    });
  };

  const addSection = () => {
    const title = prompt('Section title');
    if (title && !sections[title]) {
      setSections({ ...sections, [title]: [] });
    }
  };

  return (
    <div>
      <button
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
        onClick={addSection}
      >
        + Add Section
      </button>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex space-x-4 overflow-x-auto">
          {Object.keys(sections).map(key => (
            <Column
              key={key}
              title={key}
              tasks={sections[key]}
              sections={sections}
              setSections={setSections}
            />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}