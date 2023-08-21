import React, { ReactNode, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CreateTask } from "./components/CreateTask";
import { Dayjs } from "dayjs";
import { Task } from "./components/Task";
import { createContext } from "react";

type ContextType = {
  taskList: TaskContent[];
  setTaskList: any;
};

export const Context = createContext<ContextType>({
  taskList: [],
  setTaskList: undefined,
});

type TaskContent = {
  id: number;
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
    <Context.Provider value={{ taskList, setTaskList }}>
      <div className="App">
        <CreateTask taskList={taskList} setTaskList={setTaskList} />
        {taskList.map((item,index) => {
          return (
            <Task
              id={item.id}
              key={item.id}
              content={item.content}
              dueDate={item.dueDate}
            ></Task>
          );
        })}
      </div>
    </Context.Provider>
  );
}

export default App;
