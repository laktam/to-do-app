import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Task } from "./components/Task";

function App() {
  return (
    <div className="App">
      <Task
        content={
          "note pour faire quelque chose. note pour faire quelque chose."
        }
        dueDate={"5 min left"}
      ></Task>
    </div>
  );
}

export default App;
