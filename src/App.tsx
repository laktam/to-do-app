import React, { ReactNode, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CreateTask } from "./components/CreateTask";

function App() {
  const [taskList, setTaskList] = useState<ReactNode[]>([]);

  return (
    <div className="App">
      <CreateTask taskList={taskList} setTaskList={setTaskList} />
      {taskList.map((item, index) => {
        return <div key={index}> {item}</div>;
      })}
    </div>
  );
}

export default App;
