import React, { useState } from 'react';
import Board from './components/Board';

function App() {
  const [sections, setSections] = useState({
    'Todo': [],
    'In Progress': [],
    'Done': []
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Kanban Board</h1>
      <Board sections={sections} setSections={setSections} />
    </div>
  );
}

export default App;