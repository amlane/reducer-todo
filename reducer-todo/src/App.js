import React from 'react';
import ToDoList from "./components/ToDoList"

import './App.css';

function App() {
  console.log("CDM")
  return (
    <div className="App">
      <h1>To Do App!</h1>
      <ToDoList />
    </div>
  );
}

export default App;
