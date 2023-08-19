import React, { ReactNode, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CreateTask } from "./components/CreateTask";
import { Dayjs } from "dayjs";
import { Task } from "./components/Task";

type TaskContent = {
  content: string;
  dueDate: Dayjs | undefined;
};

function App() {
  const [taskList, setTaskList] = useState<TaskContent[]>([]);

  useEffect(() => {
    const tl = localStorage.getItem("taskList");
    if (tl !== null) {
      setTaskList(JSON.parse(tl));
      console.log(JSON.parse(tl));

    }
    // localStorage.setItem("taskList", "[]");//clear taskList
  }, []);

  return (
    <div className="App">
      <CreateTask taskList={taskList} setTaskList={setTaskList} />
      {taskList.reverse().map((item, index) => {
        return (
          <Task
            key={index}
            content={item.content}
            dueDate={item.dueDate}
          ></Task>
        );
      })}
    </div>
  );
}

export default App;
