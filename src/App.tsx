import React, { ReactNode, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CreateTask } from "./components/CreateTask";
import { Dayjs } from "dayjs";
import { Task } from "./components/Task";
import { createContext } from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

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
        <Grid sx={{ width: "80%" }} container >
          <Grid item xs={12} sm={5.5}>
            <Column>
              {taskList.map((item, index) => {
                if (index % 2 === 0) {
                  return (
                    <Task
                      key={item.id}
                      id={item.id}
                      content={item.content}
                      dueDate={item.dueDate}
                    />
                  );
                }
              })}
            </Column>
          </Grid>
          <Grid item xs={0} sm={1}/>
          <Grid item xs={12} sm={5.5}>
            <Column>
              {taskList.map((item, index) => {
                if (index % 2 !== 0) {
                  return (
                    <Task
                      key={item.id}
                      id={item.id}
                      content={item.content}
                      dueDate={item.dueDate}
                    />
                  );
                }
              })}
            </Column>
          </Grid>
        </Grid>
      </div>
    </Context.Provider>
  );
}

export default App;
