import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Task } from "./components/Task";
import { CreateTask } from "./components/CreateTask";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="App">
      <CreateTask taskList={taskList} />
    </div>
  );
}

export default App;
