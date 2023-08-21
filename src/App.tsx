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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const tl = localStorage.getItem("taskList");
    if (tl !== null) {
      setTaskList(JSON.parse(tl));
      console.log(JSON.parse(tl));
    }
    // localStorage.setItem("taskList", "[]");//clear taskList

    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
      console.log(window.innerWidth);
    });
  }, []);

  return (
    <Context.Provider value={{ taskList, setTaskList }}>
      <div className="App">
        <Grid sx={{ width: "80%" }} container>
          <Grid item xs={0} sm={1} md={3} />
          <Grid item xs={12} sm={10} md={6}>
            <CreateTask taskList={taskList} setTaskList={setTaskList} />
          </Grid>
          <Grid item xs={0} sm={1} md={3} />

          {/* after note creation */}

          <Grid item xs={12} sm={5.5}>
            <Column>
              {taskList.map((item, index) => {
                if (index % 2 === 0 && screenWidth >= 600) {
                  return (
                    <Task
                      key={item.id}
                      id={item.id}
                      content={item.content}
                      dueDate={item.dueDate}
                    />
                  );
                } else if (screenWidth < 600) {
                  //return all items in the first column if the screen is small
                  return (
                    <Task
                      id={item.id}
                      key={item.id}
                      content={item.content}
                      dueDate={item.dueDate}
                    />
                  );
                }
              })}
            </Column>
          </Grid>
          <Grid item xs={0} sm={1} />
          <Grid item xs={12} sm={5.5}>
            <Column>
              {taskList.map((item, index) => {
                if (index % 2 !== 0 && screenWidth >= 600) {
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
{
  /* <a target="_blank" href="https://icons8.com/icon/67503/add-new">Add</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */
}
